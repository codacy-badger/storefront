;
export function galleryTwo() {
  const TARGET_LINK = 'gallery-three-link';
  const TARGET_URl = 'gallery-three-url';
  const TARGET_POPUP = 'gallery-three-popup';
  const TARGET_POPUP_CONTENT = 'gallery-three-popup-content';
  const TARGET_POPUP_CLOSE = 'gallery-three-popup-close';

  var links = document.querySelectorAll('['+ TARGET_LINK +']');
  var popup = document.querySelectorAll('['+ TARGET_POPUP +']')[0];
  var popupC = document.querySelectorAll('['+ TARGET_POPUP_CONTENT +']')[0];
  var popupX = document.querySelectorAll('['+ TARGET_POPUP_CLOSE +']')[0];
  var defUrl = 'https://www.youtube.com/embed/dqHeutdSSyM';

    [].forEach.call(links, function(el, i) {
        el.onclick = function(e) {
            clickLink(el);
        };
    });

    popupX.onclick = function(e) {
      closePopup();
    };

    popup.onclick = function(e) {
      closePopup();
    };

    function clickLink (el) {
        var content = '';
        let m = false;
        var href = el.getAttribute(TARGET_URl);
        var url = href !== '' ? href : defUrl;
        m = matchYoutubeUrl(url);
        if (m) {
            content = '<iframe id="content"  width="100%" height="100%" src="https://www.youtube.com/embed/' + m + '?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
        } else {
            content = '<img id="content" width="100%"  height="100%" src="' + url + '"></img>'
        }
        setTimeout(opepPopup (content), 500);
    }

    function opepPopup (c) {
        popupC.innerHTML = c;
        popup.style.display = "flex";
        var c = document.getElementById('content');
        var actualWidth = c.clientWidth;
        var calcHeight = actualWidth * 0.5625;
        c.style.height =  calcHeight + 'px';
    }

    function closePopup () {
        popupC.innerHTML = "";
        popup.style.display = "none";
    }

    function matchYoutubeUrl (url) {
        let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
        let matches = url.match(p)
        if (matches) {
            return matches[1]
        }
        return false
    }

}

galleryTwo();
