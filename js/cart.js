(function() {
  // Добавление в карзину
  const buttonsBuy = document.querySelectorAll('.catalog-goods_button--buy');
  const buttonsBuyArray = Array.prototype.slice.call(buttonsBuy, 0);
  const popupSuccess = document.querySelector('.success-popup');
  const popupSuccessButtonClose = popupSuccess.querySelector('.success-popup__button-close');
  const popupSuccessButtonContinue = popupSuccess.querySelector('.success-popup__button-continue');

  const ESC_KEYCODE = 27;

  let showPopup = function() {
    popupSuccess.classList.add('popup-show');
    let onPopupMapButtonClose = function() {
      hidePopup(popupSuccess);
    };
    let onDocumentKeydown = function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        hidePopup(popupSuccess);
      }
    };
    // добавляем события закрытия
    popupSuccessButtonClose.addEventListener('click', onPopupMapButtonClose);
    popupSuccessButtonContinue.addEventListener('click', onPopupMapButtonClose);

    document.addEventListener('keydown', onDocumentKeydown);

    //
    let hidePopup = function(popupSuccess) {
      popupSuccess.classList.remove('popup-show');
      popupSuccessButtonClose.removeEventListener('click', onPopupMapButtonClose);
      popupSuccessButtonContinue.removeEventListener('click', onPopupMapButtonClose);
      document.removeEventListener('keydown', onDocumentKeydown);
    };
  };
  // Клик корзина
  let cartCounter = 0;
  const basket = document.querySelector('.nav-first__item--basket');
  const basketCount = basket.querySelector('.basket-count');

  let onButtonBuy = function() {
    // Добавление у счетчику корзины
    cartCounter++;
    basket.classList.add('nav-first__item--basket-not-empty');
    basketCount.textContent = cartCounter;
    showPopup();
  };

  buttonsBuyArray.forEach(function(button) {
    button.addEventListener('click', onButtonBuy);
  });

  // Клик закладки
  let bookmarkCounter = 0;
  const buttonsBookmark = document.querySelectorAll('.catalog-goods_button--to-bookmarks');
  const buttonsBookmarkArray = Array.prototype.slice.call(buttonsBookmark, 0);
  const bookmarks = document.querySelector('.nav-first__item--bookmarks');
  const bookmarksCount = bookmarks.querySelector('.bookmarks-count');

  let onButtonBookmark = function() {
    // Добавление у счетчику закладко
    bookmarkCounter++;
    bookmarks.classList.add('nav-first__item--basket-not-empty');
    bookmarksCount.textContent = bookmarkCounter;
  };

  buttonsBookmarkArray.forEach(function(button) {
    button.addEventListener('click', onButtonBookmark);
  });

  // Сбрасываем у верхних ссылок preventDefault
  let onLinkPreventDefault = function(evt) {
    evt.preventDefault();
  };
  const bookmarksLink = document.querySelector('.bookmarks__link');
  const basketLink = document.querySelector('.basket__link');
  const orderLink = document.querySelector('.order__link');
  bookmarksLink.addEventListener('click', onLinkPreventDefault);
  basketLink.addEventListener('click', onLinkPreventDefault);
  orderLink.addEventListener('click', onLinkPreventDefault);
})();
