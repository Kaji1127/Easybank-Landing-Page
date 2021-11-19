/* ======== Variables ======== */
const navToggle = document.querySelector('#nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navClose = document.querySelector('.nav__close');
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
	if (!navMenu.classList.contains('show')) {
		navMenu.classList.add('show');
		overlay.classList.add('show');
	} else {
		navMenu.classList.remove('show');
		overlay.classList.remove('show');
	}
});
