document.addEventListener('DOMContentLoaded', function () {
	// Mobile Menu
	const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
	const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

	toggleButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
	});

	// Video Modal
	const modal = document.querySelector('#videoModal');
	const videoButton = document.querySelector('.preview__video-button');
	const closeButton = document.querySelector('.modal__close-button');
	const videoPlayer = document.querySelector('#videoPlayer');

	// Open Modal
	videoButton.addEventListener('click', function () {
		modal.style.display = 'block';
		videoPlayer.src =
			'https://www.youtube.com/embed/PoFkd42WvQA?si=LVnWCNEr5Ri2QzN_';
	});

	// Close Modal
	closeButton.addEventListener('click', function () {
		modal.style.display = 'none';
		videoPlayer.src = '';
	});

	window.addEventListener('click', function (e) {
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	});
});

// Navbar
window.addEventListener('scroll', function () {
	const navbar = document.querySelector('.navbar');

	if (this.window.scrollY > 0) {
		navbar.classList.add('navbar--scroll');
	} else {
		navbar.classList.remove('navbar--scroll');
	}
});
