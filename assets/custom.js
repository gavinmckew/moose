$(document).ready(function(){

	$('.shopify-section').each(function(){
		//$(this).attr('data-aos', 'fade-up');
	})

	if($('.tabbed-section').length){
		$('.rt-tab:first-child .rt-tab__radio').prop('checked', true);
	}

	$('.second-level').prepend('<li class="back">Back</li>');

		var toggleLevel = function(e){
			var l = e.data.level;
			var $menu = $('menu');
			// Toggele first level
			if(l == 1){
				if($(e.target).hasClass('js-menu') || ($('.is-open').length && !$(e.target).parents('nav').length))
				$menu.toggleClass('is-open');
			}
			else if(l == 2){
				// Close second level
				if($menu.hasClass('is-first-level')){
					$('.second-level, menu').removeClass('is-second-level is-first-level');
				}
				// Open second level
				else{
					$menu.addClass('is-first-level').find($(this)).next('.second-level').addClass('is-second-level');
				}
			}
		}

		/**
			Toggle submenu
		*/

		$('.first-level li > a, .back').on("click", { level: 2 }, toggleLevel);

		/**
			Toggle menu
		*/

		$(document).on('click', { level: 1 }, toggleLevel);

		})

