(function() {
  // Всплывающие формы
  // Функция обработки форм

  const ESC_KEYCODE = 27;
  let showPopup = function(popup, popupButtonClose) {
    popup.classList.add('popup-show');
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
      popup.classList.remove('popup-show');
      popupButtonClose.removeEventListener('click', onPopupMapButtonClose);
      document.removeEventListener('keydown', onDocumentKeydown);
      popup.classList.remove('popup-error');
    };
  };

  // Окно карты
  const popupMap = document.querySelector('.map-popup');
  const littleMap = document.querySelector('.contacts__link--img');
  const popupMapButtonClose = popupMap.querySelector('.map-popup__button-close');
  let onPopupMap = function(evt) {
    evt.preventDefault();
    showPopup(popupMap, popupMapButtonClose);
  };
  littleMap.addEventListener('click', onPopupMap);

  // Окно напишите нам
  const popupFeedback = document.querySelector('.feedback-popup');
  const buttonFeedback = document.querySelector('.contacts__link--button');
  const popupFeedbackButtonClose = popupFeedback.querySelector('.feedback-popup__button-close');
  const formFeedback = popupFeedback.querySelector('.feedback-popup__form');

  let onFormFeedback = function(evt){
    const nameField = formFeedback.querySelector('.name-field');
    const emailField = formFeedback.querySelector('.email-field');
    if(!nameField.value || !emailField.value){
      evt.preventDefault();
      popupFeedback.classList.add('popup-error');
    }
  }
  formFeedback.addEventListener('submit', onFormFeedback);

  let onPopupFeedback = function(evt) {
    evt.preventDefault();
    showPopup(popupFeedback, popupFeedbackButtonClose);
  };
  buttonFeedback.addEventListener('click', onPopupFeedback);

  // Товар добавлен
})();
