/* ----------------- Start Document ----------------- */
(function($){
	$(document).ready(function(){
		/*----------------------------------------------------*/
		/*	bxSlider
		/*----------------------------------------------------*/
		$('.bxslider').bxSlider({
			controls: false,
			auto: true,
			responsive: true
		});

		/*----------------------------------------------------*/
		/*	Magnific popup
		/*----------------------------------------------------*/
		$('.button-calculator').magnificPopup({
			type:'inline',
			midClick: true
			// other options
		});
		$('.how-get').magnificPopup();

		/*----------------------------------------------------*/
		/*	Tooltips
		/*----------------------------------------------------*/

		$(".tooltip.top").tipTip({
			defaultPosition: "top"
		});

		$(".tooltip.bottom").tipTip({
			defaultPosition: "bottom"
		});

		$(".tooltip.left").tipTip({
			defaultPosition: "left"
		});

		$(".tooltip.right").tipTip({
			defaultPosition: "right"
		});

		$('.menu-toggle').click(function() {
			if ($('.navblock').is(':visible')) {
				$('.navblock').addClass('hideme');
				$('.menu-toggle').addClass('active');
			} else {
				$('.navblock').removeClass('hideme');
				$('.menu-toggle').removeClass('active');
			};
		});
		
		$('.style-set__prev img').click(function() {
			src = $(this).data("fullSrc");
			$('.style-set__bigimg img').attr('src', src);
		});

		$('.constr__option-wall-colour li').click(function() {
			var checkedItem = $(this);
			if (checkedItem.hasClass('checked')) {
				checkedItem.removeClass('checked');
			} else {
				checkedItem.addClass('checked');
			}
		});

		$('.style-set__option-item').click(function() {
			var checkedItem = $(this);
			if (checkedItem.hasClass('checked')) {
				checkedItem.removeClass('checked');
			} else {
				checkedItem.addClass('checked');
			}
		});

		$('.constr__option-inner-item').click(function() {
			var checkedItem = $(this);
			if (checkedItem.hasClass('checked')) {
				checkedItem.removeClass('checked');
			} else {
				checkedItem.addClass('checked');
			}
		});

		$('.term__start-wrapper').click(function() {
			var checkedItem = $(this);
			checkedItem.parent().children().removeClass('checked');
			if (checkedItem.hasClass('checked')) {
				checkedItem.removeClass('checked');
			} else {
				checkedItem.addClass('checked');
			}
		});

		$('.form-calculator-popup-number_rooms').click(function() {
			var checkedItem = $(this);
			checkedItem.parent().children().removeClass('active');
			if (checkedItem.hasClass('active')) {
				checkedItem.removeClass('active');
			} else {
				checkedItem.addClass('active');
			}
		});

		$('.addit__desc').click(function() {
			if ($(this).next().is(':hidden')) {
				$(this).next().show();
				$(this).parent().addClass('open');
			} else {
				$(this).next().hide();
				$(this).parent().removeClass('open');
			}
		});

		$('.include__icon').click(function() {
			if ($(this).next().is(':hidden')) {
				$('.include__descr-wrapper').removeClass('open');
				$('.include__text').hide();

				includeTextH = $(this).next().height();
				$('.divider').css('margin-bottom', includeTextH);

				$(this).next().show();
				$(this).parent().addClass('open');
			} else {
				$(this).next().hide();
				$(this).parent().removeClass('open');
				$('.divider').css('margin-bottom', 0);
			}
		});

		$('.include__nav-item').click(function() {
			$('.include__nav-item').removeClass('current');
			$('.include__tab').hide().fadeOut('slow');
			showTab = $(this).attr('data-target');
			$('.' + showTab).show().fadeIn('slow');
			$(this).addClass('current');
			$('.divider').css('margin-bottom', 0);
		});

		var x = 0;
		$('.include__nav-change, .include__nav-item').click(function() {
			if (x === 0) {
				$('.include__nav').addClass('open');
				x = 1;
			} else {
				$('.include__nav').removeClass('open');
				x = 0;
			}
		});
		
		// $('#responsive').flexMenu();

		if ($(window).width()<768) {
			$(".menu>ul>li").each(function(i) {
				y = i + 1;
				if ($(this).find('.menu__submenu').length > 0 ) {
					$(this).addClass("sub");
					console.log(y);
				};
			});
		} else {
			$(".menu>ul>li").removeClass("sub");
		};
		$('.sub').click(function() {
			$(this).removeClass("sub");
		});

	});
})(this.jQuery);

$(window).resize(function() {
	// aboutheight=$('.about__img img').css('height');
	// $('.about__img').css('min-height', aboutheight);

	if ($('.social-icons').is(':hidden') && $(window).width()<768) {
		$('#footer').addClass('constr');
	} else {
		$('#footer').removeClass('constr');
	};

	if ($(window).width()<768) {
		$(".menu>ul>li").each(function(i) {
			y = i + 1;
			if ($(this).find('.menu__submenu').length > 0 ) {
				$(this).addClass("sub");
				console.log(y);
			};
		});
	} else {
		$(".menu>ul>li").removeClass("sub");
	};
	
	
});

/* ------------------ End Document ------------------ */