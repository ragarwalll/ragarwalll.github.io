$(document).ready(function() {
//Preloader
  $(window).on("load", function() {
    preloaderFadeOutTime = 700;
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
  });
});
