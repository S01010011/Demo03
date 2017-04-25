(function(){
	
	// preloader
	$(window).on('load',function(){
		$('#preloader').fadeOut(1000);
	})

	// dropdown
	var $menuToggle = $('#menu-button>a'),
		$dropdown = $('#menu-button .dropdown');
	$menuToggle.on('click',function(){
		$dropdown.stop(true).slideToggle(300);
	});

	// gotop
	$('#footer .gotop').on('click',function(){
		$('html,body').stop(true).animate({
			scrollTop:0,
		},1000);
	});

	// lightbox options
	lightbox.option({
		'disableScrolling':true,
	});

	// today specail slide
	$('#today-specail-slide').owlCarousel({
		loop: true,
		autoPlay: true,
		navigation: true,
		pagination: false,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 1200,
		items: 2,
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [380, 1]
	});

	// staff-member-slide
	$('#staff-member-slide').owlCarousel({
		navigation: false,
		pagination: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 1200,
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 2],
		itemsTablet: [768, 1],
		itemsMobile: [380, 1]
	});

	// recent update slide
	$('#recent-update-slide').owlCarousel({
		loop: true,
		autoPlay: true,
		navigation: true,
		pagination: false,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 1200,
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 2],
		itemsTablet: [768, 1],
		itemsMobile: [380, 1]
	});

	//testimonial slide
	$('#testimonial-slide').owlCarousel({
		loop: true,
		autoPlay: true,
		navigation: false,
		pagination: true,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		slideSpeed: 1200,
		items: 1,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsMobile: [380, 1]
	});


})();