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

	if ( document.body.clientWidth <= 425 ) {
		
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: false,
	
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 40,
			
		
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
	
					320: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 40,
					},
					
	}

}

)

 }