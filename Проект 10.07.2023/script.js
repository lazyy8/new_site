let arrowScroll = document.querySelector('.arrow_scroll');
arrowScroll.addEventListener('click', function() {
  let promoServices = document.querySelector('.promo_services');
  promoServices.scrollIntoView({ behavior: 'smooth' });
});