(function() {
  // Переключение банеров
  let banners = document.querySelectorAll('.banner-main');
  let buttonLeft = document.querySelector('.banner-main__before');
  let buttonRight = document.querySelector('.banner-main__after');
  banners[0].style.display = 'none';

  let changeMainBanner = function() {
    banners.forEach(function(banner) {
      banner.style.display = banner.style.display === 'none' ? 'block' : 'none';
    });
  };

  let onbuttonLeft = function() {
    changeMainBanner();
  };
  let onbuttonRight = function() {
    changeMainBanner();
  };
  buttonLeft.addEventListener('click', onbuttonLeft);
  buttonRight.addEventListener('click', onbuttonRight);
})();
