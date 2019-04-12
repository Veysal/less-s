$(function() {	

	$('#my-menu').mmenu({
		extensions: ["theme-black", "fx-menu-fade", "fx-panels-zoom", 
		"fx-listitems-slide", "pagedim-black"
	],
		navbar:{
			title: '<img src="img/logo-1.svg">'
		},
		offCanvas: {
			position: 'right'
		}
		
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active')
	});

	$('.carousel-services').on('initialize.owl.carousel', function(){
		setTimeout(function(){
			carouselServ();
		}, 100)
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-double-left"</i>', '<i class="fa fa-angle-double-right"</i>'],
		responsiveClass: true,
		dots:false,
		// autoplay:true, 
         smartSpeed:1000, 
        // autoplayTimeout:2000,
		responsive: {
			0:{
				items:1
			},
			800:{
				items:2
			},
			1100:{
				items:3
			}
		}
	});

	function carouselServ(){
		$('.carousel-services-item').each(function(){
			var ths= $(this),
			thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh)
		});
	}
	carouselServ();

	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
	});

	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
	});

	$('select').selectize({});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed:1000,
		autoHeight: true
	})

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed:1000,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"</i>, <i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
		responsiveClass: true,
		responsive: {
			0:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn()
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut()
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

$(window).scroll(function(){
	if($(this).scrollTop() > $(this).height()){
		$('.top').addClass('active');
	}else{
		$('.top').removeClass('active');
	}
})
$('.top').click(function(){
	$('html, body').stop().animate({scrollTop:0}, 'slow', 'swing')
})
	$(window).bind('resize', function () {
		equalize();
	  });
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow')
})
