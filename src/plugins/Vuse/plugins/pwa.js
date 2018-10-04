import JSZip from 'jszip'
import saveAs from 'save-as'
import { getImageBlob, cleanDOM } from './../util'

/**
 * Adds a service worker that caches the static assets.
 */
function createSW (output, { images = [] } = {}) {
  output.file('sw.js', `
    const staticCacheName = 'bbuilder-static-v1';

    self.addEventListener('install', function(event) {
      event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
          return cache.addAll([
            '/',
            '/assets/js/main.js',
            ${images.map(i => "'/public/image/" + i.name + "'").join(',').trim(',')}
          ]);
        })
      );
    });

    function serveAsset(request) {
      return caches.open(staticCacheName).then(function(cache) {
        return cache.match(request).then(function(response) {
          if (response) return response;

          return fetch(request).then(function(networkResponse) {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      });
    }

    self.addEventListener('fetch', function(event) {
      const requestUrl = new URL(event.request.url);

      if (requestUrl.origin === location.origin) {
        if (requestUrl.pathname === '/') {
          event.respondWith(caches.match('/'));
          return;
        }
        if (requestUrl.pathname.startsWith('/public/')) {
          event.respondWith(serveAsset(event.request));
          return;
        }
      }

      event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
    });
  `)

  const scripts = output.folder('assets/js')
  scripts.file('main.js', `
    function registerSW () {
      if (!navigator.serviceWorker) return;
      if (location.protocol !== 'http:' || location.protocol !== 'https:') return;
      navigator.serviceWorker.register('/sw.js').then(function (reg) {
        console.log('SW registered!');
      });
    }

    registerSW();
  `)
}

/**
 * Adds some PWA features.
 */
function createPWA (output, payload) {
  createSW(output, payload)
}

function download (assets) {
  const frag = this.outputFragment()
  const artboard = frag.querySelector('#artboard')
  const title = document.title
  const zip = new JSZip()
  const output = zip.folder('project')
  const jsFolder = output.folder('js/')

  var promise = new Promise((resolve, reject) => {
    const assetsClient = new XMLHttpRequest()
      assetsClient.open('GET', assets.js)
      assetsClient.onload = function () {
        console.log(this)
        console.log(this.response)
        resolve(this.response)
      }
      assetsClient.send(null)
    })
    .then((content) => {
      jsFolder.file('cjs.js', content)
      return content
    })
    .then(() => {
      cleanDOM(frag)
      let styles = this.getCss(frag)
      output.file('index.html',
        `<html>
          <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              ${styles}
            </style>
          </head>
          <body>
            ${artboard.innerHTML}
          <script src="js/cjs.js"></script>
          </body>
        </html>`)

      zip.generateAsync({ type: 'blob' }).then((blob) => {
        saveAs(blob, 'project.zip')
      })
    })
}

export default function install ({ builder }) {
  builder.download = download
};
