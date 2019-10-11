(function() {
  // Переключение сервисов
  let servicesButtons = document.querySelectorAll('.services__button');
  let servicesDescription = document.querySelectorAll('.services-description');
  let services = Array.from(servicesButtons);
  let descriptions = Array.from(servicesDescription);

  let changeServiceDescription = function(evt) {
    descriptions.forEach(function(description) {
      description.style.display = 'none';
    });
    const index = services.indexOf(evt.target);
    descriptions[index].style.display = 'flex';
  };

  let onServiceButtonClick = function(evt) {
    changeServiceDescription(evt);
  };
  services.forEach(function(service) {
    service.addEventListener('click', onServiceButtonClick);
  });
})();
