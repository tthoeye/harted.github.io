

// Header
var header_height = 50;

// Global objects
// NOTE: TEMPORARY transfer
var HL = headerlogo_s; // header logo


// // Make header ------------------------------------------------------------------------------------------------------------------------
// function Header(color) {
//
// 	//placed in css to prevent inter page flicker
// 	/*$('#header').css({
// 		'position': 'fixed',
// 		'width': '100%',
// 		'height': header_height,
// 		'line-height': header_height + 'px',
// 		'bottom': 0,
// 		'background-color': color,
// 	})*/
// 	// $('#header_whitespace').css({
// 	// 	'width': '100%',
// 	// 	'height': header_height * 2,
// 	// })
// 	// $('#header_forcescrollspace').css({
// 	// 	'position': 'fixed',
// 	// 	'width': win.iW*3,
// 	// 	'left': -(win.iW),
// 	// 	'height': win.iH,
// 	// 	'bottom': -(win.iH) + header_height,
// 	// 	'background-color': 'black',
// 	// })
// };
// Make headerlogo --------------------------------------------------------------------------------------------------------------------
function HeaderLogo(HL_color) {

	$('#header_menu').css({
		'opacity': 1,  //no fade in
	})
	setTimeout(function(){
		$('#header_menu').css({
			'opacity': 1,
			'transition': HL.load.transition + 'ms',
		})
		$('#headerlogo').css({
			'height': HL.width(),
			'width': HL.width(),
			'margin': HL.margin(),
			'transition': HL.load.transition + 'ms',
		}).off('mouseover').on('mouseover', function(){
			$(this).css('cursor', 'pointer')
			.off('click').on('click', function(){
				if (playing_global == true) {
					window.open('/index.html');
				} else if (playing_global == false) {
					$('.fade, #header_menu').css({
						'opacity': 0,
						'transition': HL.click.transition + 'ms',
					});
					$('#headerlogo').css({
						'width': HL.load.width,
						'height': HL.load.width,
						'margin': HL.load.margin(),
						'transition': HL.click.transition + 'ms',
					}).on('transitionend', function(){
						//future replace by fadebox and go to index
						$('#header, #header_forcescrollspace').css({
							'opacity': 0,
							'transition': HL.load.transition + 'ms',
						});
						setTimeout(function(){
							window.location = '/index.html';
						}, HL.load.transition)
					});
				};
			});
		});
	},100)
};

// Make headermenu --------------------------------------------------------------------------------------------------------------------
function HeaderMenu(text_color) {

	var padding_right = 20;

	/*$('#header_menu').css({
		'text-decoration': 'none',
		'margin-top': 0,
		'padding-left': HL.center_right(),
	})*/
	/*$('#header_menu li').css({
		'font-weight': '400',
		'display': 'inline-block',
		'padding-right': '20px',
		'color': text_color || color_back,
	})*/

	var menu_size = Math.round((($('#header_menu li').width() + padding_right)*4) + HL.center_right());
	var menu_space = Math.round((win.iW - (HL.center_right()*2)));
	var menu_overlap = menu_space - menu_size

	var padding_right_new = Math.round(padding_right + (menu_overlap/4))

	if (padding_right_new > 4) {
		$('#header_menu li').css({
			'display': 'inline-block',
		})
		if (menu_overlap > 0) {
			$('#header_menu li').css({
				'padding-right': padding_right + 'px',
			})
		} else {
			$('#header_menu li').css({
				'padding-right': padding_right_new + 'px',
			})
		};
	} else {
		$('#header_menu li').css({
			'display': 'none',
		})
	}


	MenuItem('#menu_about', '/about.html', color_1)
	MenuItem('#menu_music', '/music.html', color_2)
	MenuItem('#menu_video', '/video.html', color_3)
	MenuItem('#menu_shows', '/shows.html', color_4)

};

// Make menuitem ----------------------------------------------------------------------------------------------------------------------
function MenuItem(MI_id, MI_href, MI_color) {
	if (MI_href != '/' + document.location.href.match(/[^\/]+$/)[0]) {
		$(MI_id)
		.off('mouseover').on('mouseover', function(){
			$(this).css({
				'cursor': 'pointer',
				'opacity': 0.5,
			})
		})
		.on('mouseout').on('mouseout', function(){
			$(this).css({
				'cursor': 'initial',
				'opacity': 1,
			})
		})
		.off('click').on('click', function(){
			if (playing_global == true) {
				window.open(MI_href);
			} else if (playing_global == false) {
				/*$('.fade, #header_menu').css({
					'opacity': 0,
					'transition': HL.click.transition + 'ms',
				});*/
				/*$('#header, #header_forcescrollspace').css({
					'background-color': MI_color,
					'transition': HL.click.transition + 'ms',
				}).on('transitionend', function(){
					window.location = MI_href;
				});*/
				window.location = MI_href;
				/*$('#headerlogo').css({
					'width': HL.load.width,
					'height': HL.load.width,
					'margin': HL.load.margin,
					'transition': HL.click.transition + 'ms',
				})*/
			}
		});
	} else {
		$(MI_id).css({'opacity':0.5})
	};
};

// Make content container -------------------------------------------------------------------------------------------------------------
function ContentContainer(){
	if (win.width_b.M == true || win.width_b.S == true) {
		$('.content_container').css({
				'margin': '0px',
		})
	} else if (win.width_b.L == true){
		$('.content_container').css({
				'margin': '0px ' + (HL.center_right()) + 'px',
		})
	} else {
		$('.content_container').css({
				'margin': '0px ' + (HL.center_right() * 2) + 'px',
		})
	}
}

// Make content container -------------------------------------------------------------------------------------------------------------
function ContainerChild(){
		$('.container_child').css({
			'margin': '0px ' + (HL.center_right()) + 'px',
			'top': 0,
		});
};

// Make page header -------------------------------------------------------------------------------------------------------------------
function PageBanner(){

	// make sure the image fills the content container width
	// aspect = 2x1 so height is defined so browser nows how heigh the image is on first load
	$('#banner_img_holder').css({
		'width': $('.content_container').width() + 'px',
		'height': $('.content_container').width() / 2 + 'px',
		'overflow': 'hidden'
	})

	$('#banner_img_holder img').css({
		'width': $('.content_container').width() + 'px',
		'height': $('.content_container').width() / 2 + 'px',
		'vertical-align': 'middle',
	})

	// run function on load and resize
	PageBannerPosition();

	// run function on scroll
	$(window).off('scroll').on('scroll', function(){
		PageBannerPosition();
	});
};

// Page header position ---------------------------------------------------------------------------------------------------------------
function PageBannerPosition(){

	var scroll_top = $(window).scrollTop();
	var viewport_height = win.iH - header_height;
	var image_height = $('#banner_img_holder').height()
	var h1_height = $('#page_banner_scroll h1').height();
	var banner_height = image_height + h1_height

	var maximum_whitespace = image_height/2 - h1_height; //maximum whitespace until content joins the header initially
	var whitespace = viewport_height - banner_height;

	var horizontal_crop = Math.round(-(whitespace)/2);
	var h1_margin_top = Math.round((whitespace - scroll_top)/2);

	// crop evenly when Niels Blondeel wants to do his screen all fancy :p
	if (whitespace < 0){
		$('#banner_img_holder img').css('margin-top', horizontal_crop)
	} else {
		$('#banner_img_holder img').css('margin-top', 0);
		if (whitespace < maximum_whitespace){
			$('#page_banner_scroll h1').css('padding-top', h1_margin_top);
		} else {
			$('#page_banner_scroll h1').css('padding-top', 0);
		}
	}

	// if the white_space is small enough then do the animation where the content meets the banner when scrolling
	if (whitespace < maximum_whitespace) {
		$('#page_banner').css({
			'position': 'relative',
			'height': viewport_height + 'px',
		});

		// actual height of the banner + the amount of space above the viewport when scrolling down.
		var scroll_whitespace = viewport_height - (scroll_top + banner_height);

		// if the space between the page banner and content > 0 then banner is fixed
		if (scroll_whitespace > 0) {
			$('#page_banner_scroll').css({
				'position': 'fixed',
				'width': $('.content_container').width(),
				'top': 0,
				'bottom': 'auto',
			});
		} else { // banner is fixed untill page banner and content = 0
			$('#page_banner_scroll').css({
				'position': 'absolute',
				'width': $('.content_container').width(),
				'top': 'auto',
				'bottom': 0,
			});
		};
	} else {
		$('#page_banner').css({
			'position': 'relative',
			'height': $('#page_banner_scroll').height(),
		});
		$('#page_banner_scroll').css({
			'position': 'absolute',
			'width': $('.content_container').width(),
			'top': 'auto',
			'bottom': 0,
		});
	}
}
