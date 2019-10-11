(function() {
  // Всплывающие формы
  // Функция обработки форм

  const ESC_KEYCODE = 27;
  let showPopup = function(popup, popupButtonClose) {
    popup.style.display = 'block';

    let onPopupMapButtonClose = function() {
      hidePopup(popup);
    };
    let onDocumentKeydown = function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        hidePopup(popup);
      }
    };
    // добавляем события закрытия
    popupButtonClose.addEventListener('click', onPopupMapButtonClose);
    document.addEventListener('keydown', onDocumentKeydown);

    //
    let hidePopup = function(popup) {
      popup.style.display = 'none';
      popupButtonClose.removeEventListener('click', onPopupMapButtonClose);
      document.removeEventListener('keydown', onDocumentKeydown);
    };
  };

  // Окно карты
  const popupMap = document.querySelector('.map-popup');
  const littleMap = document.querySelector('.contacts_img');
  const popupMapButtonClose = popupMap.querySelector('.map-popup__button-close');
  let onPopupMap = function() {
    showPopup(popupMap, popupMapButtonClose);
  };
  littleMap.addEventListener('click', onPopupMap);

  // Окно напишите нам
  const popupFeedback = document.querySelector('.feedback-popup');
  const buttonFeedback = document.querySelector('.contacts_button');
  const popupFeedbackButtonClose = popupFeedback.querySelector('.feedback-popup__button-close');

  let onPopupFeedback = function() {
    showPopup(popupFeedback, popupFeedbackButtonClose);
  };
  buttonFeedback.addEventListener('click', onPopupFeedback);

  // Товар добавлен
})();
