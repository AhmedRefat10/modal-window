// start main vars
const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  btnsOpenModal = document.querySelectorAll('.show-modal'),
  btnCloseModal = document.querySelector('.close-modal'),
  hidden = document.querySelector('.hidden');

// open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// open modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
// close modal by times btn
btnCloseModal.addEventListener('click', closeModal);
// close modal by clicking on overlay
overlay.addEventListener('click', closeModal);
// close modal by ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
