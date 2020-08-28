$( document ).ready(function() {
	new WOW().init();
	$('.owl-carousel-home').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	$('.owl-carousel-part').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})

	$('.owl-carousel-coments').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	})

	$('#contacto').click(function () {
		$.scrollTo($('#services-five'), 3000);
	});
});
