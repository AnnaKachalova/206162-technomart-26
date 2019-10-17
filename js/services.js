(function() {
  // Переключение сервисов
  let servicesButtons = document.querySelectorAll('.services__button');
  let servicesDescription = document.querySelectorAll('.services-description');
  let descriptions = Array.prototype.slice.call(servicesDescription, 0);
  let services = Array.prototype.slice.call(servicesButtons, 0);

  let changeServiceDescription = function(evt) {
    descriptions.forEach(function(description, i) {
      description.style.display = 'none';
      services[i].classList.remove('services__button--selected');
    });
    const index = services.indexOf(evt.target);
    services[index].classList.add('services__button--selected');
    descriptions[index].style.display = 'flex';
  };

  let onServiceButtonClick = function(evt) {
    changeServiceDescription(evt);
  };
  services.forEach(function(service) {
    service.addEventListener('click', onServiceButtonClick);
  });
})();
