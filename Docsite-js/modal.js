const modalCTA = document.querySelector('#example-modal-CTA');
const modalInterstitial = document.querySelector('#example-modal-interstitial');
const modalCloseBtn = document.querySelector('#example-modal-close');
const modalBackBtn = document.querySelector('#example-modal-back');

modalCTA.addEventListener('click', () => {
  modalInterstitial.classList.add('active');
  document.body.style.overflow = 'hidden';
});

modalCloseBtn.addEventListener('click', () => {
  modalInterstitial.classList.remove('active');
  document.body.style.overflow = 'visible';
});

modalBackBtn.addEventListener('click', () => {
  modalInterstitial.classList.remove('active');
  document.body.style.overflow = 'visible';
});
