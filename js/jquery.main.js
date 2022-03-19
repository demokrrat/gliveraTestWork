window.appName = 'APP';
window[window.appName] = {};


((APP) => {
  APP.init = () => {
    APP.blockTo();

    window.svg4everybody(); // SVG for Everybody adds SVG External Content

    // APP.headerBasket();

  };

  



})(window.APP);

window.addEventListener('load', function() {
  window.APP.init();
});
