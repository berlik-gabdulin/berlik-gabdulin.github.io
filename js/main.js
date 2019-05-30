setTimeout(function() {
	$(document).ready(function () {

		var x = 0;
		$('.menuTgl, .navLink').click(function() {
			if (x == 0) {
				$('.navbar, .nav, .menuTgl, body').addClass('active');
				x = 1;
			} else {
				$('.navbar, .nav, .menuTgl, body').removeClass('active');
				x = 0;
			}
		})

		$(".portfolio__navItem").click(function() {
			$(".portfolio__navItem").removeClass("active");
			$(this).addClass("active");
		});

		$.getJSON('project.json', function(data) {
			for (var i = 0; i < data.length; i++) {
			/*
			Доступно:
			data[i].price
			data[i].title
			data[i].preview
			data[i].type
			data[i].typetitle
			*/
			$('.portfolio__gallery .row').append('<div class="portfolio__galleryItem col-md-3 col-sm-6 col-xs-6 mix ' + data[i].type + '"><a id="' + data[i].id + '" class="portfolio__galleryLink" href="#preview"><img class="portfolio__galleryImg" src="img/portfolio/' + data[i].preview + '"><span class="portfolio__galleryDescr">' + data[i].title + '</span></a></div>');
		}
	}).done(function() {

		$('.portfolio__galleryLink').magnificPopup({
			fixedContentPos: 'true',
			closeBtnInside: 'true',
			ShowCloseBtn: 'true'
		});

		$('.portfolio__galleryLink').click(function() {
			var projectID = $(this).attr('id');
			$.getJSON('project.json', function(data) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].id == projectID) {
						$('.preview__img').attr('src', 'img/portfolio/' + data[i].preview);
						$('.preview__descrTitle').text(data[i].title);
						$('.preview__descrText').text(data[i].descr);
						// $('.preview__descrText').text(data[i].descr);
						$('.preview__descrLink').attr('href', data[i].url);
					}
				}
			})
		});
		var containerEl = document.querySelector('.portfolio__gallery .row');
		var mixer = mixitup(containerEl);
	})


	$(".callbackInput[type='tel']").mask("+7 (999) 999 99 99");

	$('.godown').mPageScroll2id();


		// Форма обратной связи
		$(".callbackInputWrp button.submit").on('click', function() {
			$(document).on('click','.popupform.call-popup .mfp-close', function () {
				$.magnificPopup.close();
			});

			var form = $(this).closest("form");
			var submitButton = $(this);
			var handlerUrl = 'handler.php';

			submitButton.prop('disabled', true).addClass('buttonDisabled');

			$.ajax({
				type: "POST",
				url: handlerUrl,
				data: form.serialize(),
				error: function(response) {
					submitButton.prop('disabled', false);
				},
				success: function (response) {
					if (Array.isArray(response)) {

						form.find("input").each(function(index) {
							$(this).removeClass('err_input');
						});

						for (i = 0; i < response.length; i++) {
							form.find('input[name="' + response[i] + '"]').addClass('err_input');
						}
					} else {
						form.find('.success').css('display', 'block');

						form.find("input").each(function(index) {
							if (!$(this).hasClass('button'))
								$(this).val('');
							$(this).removeClass('err_input');
						});

						// open popup when success
						$.magnificPopup.close();
						$.magnificPopup.open({
							items: {
								src: '#popupformthanks',
								type: 'inline'
							},
							callbacks: {
								open: function() {
									console.log("open");
									$('.popupform.call-popup').show();
								},
								close: function() {
									console.log("close");
									$(".popupform.call-popup").css("display", "none");
								}
							},
							showCloseBtn : true,
							fixedContentPos : false,
							closeOnBgClick : true,
						});
					}
					submitButton.prop('disabled', false).removeClass('buttonDisabled').addClass('buttonSuccess');
				}
			});
			return false;
		});

	});

	function resizeHandler() {
		var mvp = document.getElementById('main-viewport'),
		content = 'width=device-width',
		scale = '1.0';

		if (screen.width > 480) {
			content = 'width=1140';
			scale = '1.0';
		}

		mvp.setAttribute('content', content);
		mvp.setAttribute('inital-scale', scale);
	}

	window.onload = resizeHandler;
	window.onresize = resizeHandler;


	$(window).on('resize orientationchange', function () {
		$('.slider-resize-fix').slick('resize');
	});

}, 1000);