(function() {
  // Переключение банеров
  let buttonLeft = document.querySelector('.banner-main__before');
  let buttonRight = document.querySelector('.banner-main__after');
  let bannersСollections = document.querySelectorAll('.banner-main');
  let bannersArray = Array.prototype.slice.call(bannersСollections, 0);
  let buttonsСollections = document.querySelectorAll('.banner-main__button-item');
  let buttonsArray = Array.prototype.slice.call(buttonsСollections, 0);
  const classActive = 'banner-main__button-item-active';

  let bunners = [];
  let buttons = [];
  let bunnersVisibile = [false, true];

  // объект банеров
  bannersArray.forEach(function(bannerView, i) {
    let banner = {
      view: bannerView,
      visible: bunnersVisibile[i],
    };
    bunners.push(banner);
  });

  // объект кнопок
  buttonsArray.forEach(function(buttonView) {
    let button = {
      view: buttonView,
      active: false,
    };
    buttons.push(button);
  });

  // События переключения по кнопкам
  let changeVisible = function() {
    bunners.forEach(function(obj, i) {
      obj.view.style.display = obj.visible ? 'block' : 'none';
      buttons[i].active = obj.visible;

      if (obj.visible) {
        buttons[i].view.classList.add(classActive);
      } else {
        buttons[i].view.classList.remove(classActive);
      }
    });
  };

  let onbuttonLeft = function() {
    bunners.forEach(function(obj, i) {
      obj.visible = i === 0;
    });
    changeVisible();
  };
  let onbuttonRight = function() {
    bunners.forEach(function(obj, i) {
      obj.visible = i === 1;
    });
    changeVisible();
  };
  buttonLeft.addEventListener('click', onbuttonLeft);
  buttonRight.addEventListener('click', onbuttonRight);
  buttonsArray[0].addEventListener('click', onbuttonLeft);
  buttonsArray[1].addEventListener('click', onbuttonRight);
})();
