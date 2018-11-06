;
export function galleryTwo() {
  const TARGET_LINK = 'gallery-two-link';
  const TARGET_URl = 'gallery-two-url';
  const TARGET_POPUP = 'gallery-two-popup';
  const TARGET_POPUP_PADD = 'gallery-two-popup-padd';
  const TARGET_POPUP_CONTENT = 'gallery-two-popup-content';
  const TARGET_POPUP_CLOSE = 'gallery-two-popup-close';
  const TARGET_POPUP_PREV = 'gallery-two-popup-prev';
  const TARGET_POPUP_NEXT = 'gallery-two-popup-next';
  const TARGET_POPUP_SETTINGS = 'gallery-two-popup-settings';

  var links = document.querySelectorAll('[' + TARGET_LINK + ']');
  var popup = document.querySelectorAll('[' + TARGET_POPUP + ']')[0];
  var popupP = document.querySelectorAll('[' + TARGET_POPUP_PADD + ']')[0];
  var popupC = document.querySelectorAll('[' + TARGET_POPUP_CONTENT + ']')[0];
  var popupX = document.querySelectorAll('[' + TARGET_POPUP_CLOSE + ']')[0];
  var prev = document.querySelectorAll('[' + TARGET_POPUP_PREV + ']')[0];
  var next = document.querySelectorAll('[' + TARGET_POPUP_NEXT + ']')[0];
  var defUrl = 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png';
  var index = null;

  if (links.length === 0) {
    return;
  }

  [].forEach.call(links, function (el, i) {
    el.onclick = function (e) {
      clickLink(el, i);
    };
  });

  popupX.onclick = function (e) {
    closePopup();
  };

  prev.onclick = function (e) {
    clickArr(index - 1);
  };

  next.onclick = function (e) {
    clickArr(index + 1);
  };

  function clickLink(el, i) {
    var content = '';
    var m = false;
    var href = el.getAttribute(TARGET_URl);
    var url = href !== '' ? href : defUrl;
    m = matchYoutubeUrl(url);
    if (m) {
      content = '<iframe id="content"  width="100%" height="100%" src="https://www.youtube.com/embed/' + m + '?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    } else {
      content = '<img id="content" width="100%"  height="100%" src="' + url + '"></img>'
    }
    index = i;
    popupP.style.width = "100%";
    popupP.style.height = "100%";
    popupP.style.margin = "0 auto";
    setTimeout(opepPopup(content), 100);
  }

  function opepPopup(c) {
    popupC.innerHTML = c;
    popup.style.display = "flex";
    var c = document.getElementById('content');
    var actualWidth = c.clientWidth;
    var calcHeight = actualWidth * 0.5625;
    c.style.height = calcHeight + 'px';

    if (index === 0) {
      prev.style.display = "none";
      next.style.display = "block";
    } else if (index === links.length - 1) {
      prev.style.display = "block";
      next.style.display = "none";
    } else {
      prev.style.display = "block";
      next.style.display = "block";
    }
  }

  function closePopup() {
    popupC.innerHTML = "";
    popup.style.display = "none";
  }

  function matchYoutubeUrl(url) {
    let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    let matches = url.match(p)
    if (matches) {
      return matches[1]
    }
    return false
  }

  function clickArr(i) {
    clickLink(links[i], i);
  }

}

galleryTwo();
