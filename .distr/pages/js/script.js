fixMenu();

	function fixMenu() {
    
		window.onscroll = () => {

			if ( scrollY > 0 ) {
       console.log(1)
				header.classList.add('fixed');
				main.style.marginTop =  header.offsetHeight + 'px';

			} else {

				header.classList.remove('fixed');
				main.style.marginTop =  0 + 'px';
			}
		}
	}