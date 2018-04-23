window.onload = function() {
  var scrolled;
  var timer;
  var x = 100; //x - scrolling speed

  document.getElementById('top').onclick = function() {
    scrolled = window.pageYOffset;
    scrollToTop();
  }

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - x;
      timer = setTimeout(scrollToTop, 100);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0,0);
    }
  }
}
