'use strict'


fixMenu();

	function fixMenu() {
    
		window.onscroll = () => {

			if ( scrollY > 0 ) {
      
				header.classList.add('fixed');
				main.style.marginTop =  header.offsetHeight + 'px';

			} else {

				header.classList.remove('fixed');
				main.style.marginTop =  0 + 'px';
			}
		}
	}

	if ( document.body.clientWidth <= 630 ) {
		
		const swiper = new Swiper('.swiper', {
		
			direction: 'horizontal',
			loop: false,
	
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 40,
	 
			pagination: {
				el: '.swiper-pagination',
				clickable: true, 
			},
	
			breakpoints: {
	
					320: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 10,
					},
					
	}})}

 const swiper2 = new Swiper('.swiper2', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

		// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable: true, 
},

	breakpoints: {

			1300: {
					slidesPerView: 4,
					slidesPerGroup: 1,
					spaceBetween: 40,
			},
			
			1000: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 70,
		},

		700: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 30,
	},
}

})

