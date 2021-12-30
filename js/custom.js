$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};   

});


$(document).ready(function(){
    
    var ll = new LazyLoad({
        elements_selector: ".lazyload",
    });
    
    
    $('.js-popup-open').fancybox({
        src  : $(this).attr('href'),
        type : 'inline',
        touch: false,
        closeExisting: true,
        autoFocus: false
    });
    
    $('select').selectric({
        disableOnMobile: false,
        nativeOnMobile: true,
        maxHeight: 218,
        arrowButtonMarkup: '<b class="button"><svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6a.68.68 0 0 1-.495-.216l-4.3-4.526a.765.765 0 0 1 0-1.042.676.676 0 0 1 .99 0L5 4.22 8.805.216a.676.676 0 0 1 .99 0 .765.765 0 0 1 0 1.042l-4.3 4.526A.68.68 0 0 1 5 6Z"/></svg></b>',
        onChange: function() {
            $(this).parents('.selectric-wrapper').addClass('selectric-wrapper-selected');
            
            if($(this).parents('.product-tabs').length){
                $(this).parents('.product-tabs').find('.product-tabs-nav__item[data-tab="'+$(this).val()+'"]').click();        
            }
        }                  
    });

	function showDiv() {
		if ($(window).scrollTop() > 200) {			
			$("#header").addClass('fixed');
			$("body").addClass('body-fixed');
		}else {
            $("#header").removeClass('fixed');	
            $("body").removeClass('body-fixed');
		}
        
	}
    showDiv();
	$(window).scroll(showDiv);	
    
    $('.mobile-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.header__nav').addClass('active');
            $('.mobile-trigger').addClass('is-active');
        }else{
            $('body').removeClass('menu-open');
            $('.header__nav').removeClass('active');
            $('.mobile-trigger').removeClass('is-active');
        }
        return false;
	});
    
    $('.main-wrapper__before').on('click', function(event) {
        if($('body').hasClass('menu-open')){
            $('body').removeClass('menu-open');
            $('.header__nav').removeClass('active') ;
            $('.mobile-trigger').removeClass('is-active');
        }
        
        if($('body').hasClass('body-filter-sort-open')){
            $('body').removeClass('body-filter-sort-open');
            $('.filter-sort-mobile').removeClass('active') ;
            $('.filter-sort-select__content').removeClass('active') ;
        }
        
        if($('body').hasClass('body-search')){
            $('.header-search__content').fadeOut(100);
            $('.header-search__clear').fadeOut(100);
            $('body').removeClass('body-search');
        }
        
        if($('body').hasClass('body-open-share')){
            $('.product-share__content').fadeOut(100);
            $('body').removeClass('body-open-share');
        }
        
        event.stopPropagation();
    })
    
    $('.js-nav-close').on('click', function(event) {
        
            $('body').removeClass('menu-open');
            $('.header__nav').removeClass('active');
            $('.mobile-trigger').removeClass('is-active');
        
        return false;
	});
    
    $('.js-link-city-more').click(function(){ 
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).text($(this).attr('data-hide'));
            $(this).next('.js-city-more').slideDown();
        }else{
            $(this).text($(this).attr('data-show'));
            $(this).next('.js-city-more').slideUp();
        }    
        return false;
    });
    
    $('.city-more__inner').overlayScrollbars({}); 
   
    
    $('#input-city').keyup( function(e){
        if( $(this).val().length >1 ) { 
            $('.city-list-main').hide();
            $('.city-list-search').show();
        }else{
             $('.city-list-main').show();
            $('.city-list-search').hide();
        }
    });
    
    $('.js-choose-city-alert-close').click(function(){ 
        $(this).parents('.choose-city-alert').hide();
        
        return false;
    });
    
    
    $('#input-search').keyup( function(e){
        if( $(this).val().length >0 ) { 
            $(this).parents('.header-search').find('.header-search__content').fadeIn(100);
            $(this).parents('.header-search').find('.header-search__clear').fadeIn(100);
            $('body').addClass('body-search');
        }else{
            $(this).parents('.header-search').find('.header-search__content').fadeOut(100);
            $(this).parents('.header-search').find('.header-search__clear').fadeOut(100);
            $('body').removeClass('body-search');
        }
    });
    
    $('.header-search__clear').click(function(){ 
        $('#input-search').val('');
        $(this).parents('.header-search').find('.header-search__content').fadeOut(100);
        $(this).parents('.header-search').find('.header-search__clear').fadeOut(100);
        $('body').removeClass('body-search');
        return false;
    });
    
     $('.header-search__content-inner').overlayScrollbars({}); 
    
    $('.cookie__close').click(function(){ 
        $(this).parents('.cookie').fadeOut(100);
        return false;
    });
    
       
    $('.js-slider-main').each(function () {
          $(this).slick({
                infinite:true, 
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                arrows:false
         })
     })
    
    $('.slider-tabs-nav__item').on('click', function(event) {  
        $(this).parents('.slider-tabs').find('.slider-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.slider-tabs').find('.slider-tabs-content').removeClass('active');
        $(this).parents('.slider-tabs').find('.slider-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
        $(this).parents('.slider-tabs').find('.active .js-slider-main').slick('setPosition', 0);
        $(this).parents('.slider-tabs').find('.active .js-slider-main').resize();
        return false;
    });
    
    $('.js-slider-production').on('init', function(event, slick, direction){
        ll.update();
    });
    
    $('.js-slider-production').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        centerMode:true,
        variableWidth:true,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>',
        appendArrows:$('.production-slider-arrows'),
         responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    variableWidth:false,
                    centerMode:false,
                }
            },
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    variableWidth:true,
                    centerMode:false,
                }
            }
        ]
    });
    
    $('.js-slider-production').on('afterChange', function(event, slick, direction){
        ll.update();
    });
  
     $('.advantages-more__list-item span').on('mouseenter', function(event) {  
        $(this).parents('.advantages-more__list').find('.advantages-more__list-item').removeClass('active');
        $(this).parents('.advantages-more__list-item').addClass('active');
        $(this).parents('.advantages-more').find('.advantages-more__image').find('img').removeClass('active');
        $(this).parents('.advantages-more').find('.advantages-more__image').find('img[data-id="'+$(this).parents('.advantages-more__list-item').attr('data-id')+'"]').addClass('active');

        return false;
    });
    
     $('.js-news-slider .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>',
        appendArrows:$('.news-slider-arrows'),
        responsive: [           
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    variableWidth:true
                }
            }
        ]
    });
    
     $('.scroll').click(function() {          
		  var target = $(this.hash);
		  if (target.length) {
            
            if($('body').hasClass('menu-open')){
                $('body').removeClass('menu-open');
                $('.nav').removeClass('active');
                $('.mobile-trigger').removeClass('is-active'); 
            }
              
			var tt= target.offset().top - $('#header').height();					 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
    });
    
    
    $(".filter-sort-select__title").click(function(){ 
        
        if($(window).innerWidth()>991){
            if(!$(this).hasClass('active')){
                $(".filter-sort-select__title").removeClass('active');
                $('.filter-sort-select__content').slideUp(100);     
                $(this).addClass('active');     
                $(this).next('.filter-sort-select__content').slideDown(100);     
            }else{
                $(".filter-sort-select__title").removeClass('active');
                $('.filter-sort-select__content').slideUp(100);   
            }
        }else{   
            $(this).next('.filter-sort-select__content').addClass('active');     
            $('body').addClass('body-filter-sort-open');
        }
        return false;
    });
     
    $(document).bind("click touchstart",function(event) {
        if($(window).innerWidth()>991){
            if ($(event.target).closest(".filter-sort-select__title, .filter-sort-select").length) return;
            $(".filter-sort-select__title").removeClass('active');     
            $('.filter-sort-select__content').slideUp(100);   
            event.stopPropagation();
        }
        
        if ($(event.target).closest(".header-search").length) return;
        
        $('.header-search__content').fadeOut(100);
        $('.header-search__clear').fadeOut(100);
        $('body').removeClass('body-search');
         
      });
    
    
    $(".js-filter-item-open").click(function(){ 
        
        if($(window).innerWidth()>991){
            if(!$(this).parents('.filter-item').hasClass('active')){            
                $('.filter-item').removeClass('active');
                $('.filter-item__content').slideUp(100); 
                $(this).parents('.filter-item').addClass('active');     
                $(this).parents('.filter-item').find('.filter-item__content').slideDown(100);     
            }else{
                $('.filter-item').removeClass('active');
                $('.filter-item__content').slideUp(100);             
            }       
        }else{
            $(this).parents('.filter-item').toggleClass('active');     
            $(this).parents('.filter-item').find('.filter-item__content').slideToggle(100);     
        }        
        return false;
    });
    
    $('.filter-item-list').overlayScrollbars({}); 
    $('.filter-aside-list_overflow').overlayScrollbars({}); 
    
    
    if($('#filter-slider-prices').length){
    
        var handlesSlider = document.getElementById("filter-slider-prices"),
            priceFrom = parseInt($("#price_from").val()),
            priceTo = parseInt($("#price_to").val());
        
        var max = typeof maxPrice != "undefined"? maxPrice : 100000;

        noUiSlider.create(handlesSlider, {
            start: [ priceFrom, priceTo > 0? priceTo : max ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ max ]
            }
        });
    
        var valueInput = document.getElementById('price_from');
        var valueInput2 = document.getElementById('price_to');

        handlesSlider.noUiSlider.on('update', function( values, handle ) {            
            if ( handle ) {
                 valueInput2.value = parseInt(values[handle]);         
            } else {
                valueInput.value = parseInt(values[handle]);                
            }
        });

        valueInput.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([this.value, null]);
        });

        valueInput2.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([null, this.value]);
        });
    
    }
    
    if($('#filter-slider-lenght').length){
    
        var handlesSliderL = document.getElementById("filter-slider-lenght"),
            priceFromL = parseInt($("#lenght_from").val()),
            priceToL = parseInt($("#lenght_to").val());        
        var maxL = typeof maxPriceL != "undefined"? maxPriceL : 10000;

        noUiSlider.create(handlesSliderL, {
            start: [ priceFromL, priceToL > 0? priceToL : maxL ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ maxL ]
            }
        });
    
        var valueInputL = document.getElementById('lenght_from');
        var valueInput2L = document.getElementById('lenght_to');

        handlesSliderL.noUiSlider.on('update', function( valuesL, handleL ) {            
            if ( handleL ) {
                 valueInput2L.value = parseInt(valuesL[handleL]);         
            } else {
                valueInputL.value = parseInt(valuesL[handleL]);                
            }
        });

        valueInputL.addEventListener('change', function(){
            handlesSliderL.noUiSlider.set([this.value, null]);
        });

        valueInput2L.addEventListener('change', function(){
            handlesSliderL.noUiSlider.set([null, this.value]);
        });
    
    }
    
    if($('#filter-slider-width').length){
    
        var handlesSliderW = document.getElementById("filter-slider-width"),
            priceFromW = parseInt($("#width_from").val()),
            priceToW = parseInt($("#width_to").val());        
        var maxW = typeof maxPriceW != "undefined"? maxPriceW : 10000;

        noUiSlider.create(handlesSliderW, {
            start: [ priceFromW, priceToW > 0? priceToW : maxW ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ maxW ]
            }
        });
    
        var valueInputW = document.getElementById('width_from');
        var valueInput2W = document.getElementById('width_to');

        handlesSliderW.noUiSlider.on('update', function( valuesW, handleW ) {            
            if ( handleW ) {
                 valueInput2W.value = parseInt(valuesW[handleW]);         
            } else {
                valueInputW.value = parseInt(valuesW[handleW]);                
            }
        });

        valueInputW.addEventListener('change', function(){
            handlesSliderW.noUiSlider.set([this.value, null]);
        });

        valueInput2W.addEventListener('change', function(){
            handlesSliderW.noUiSlider.set([null, this.value]);
        });
    
    }
    
    if($('#filter-slider-area').length){
    
        var handlesSliderA = document.getElementById("filter-slider-area"),
            priceFromA = parseInt($("#area_from").val()),
            priceToA = parseInt($("#area_to").val());        
        var maxA = typeof maxPriceA != "undefined"? maxPriceA : 450;

        noUiSlider.create(handlesSliderA, {
            start: [ priceFromA, priceToA > 0? priceToA : maxA ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ maxA ]
            }
        });
    
        var valueInputA = document.getElementById('area_from');
        var valueInput2A = document.getElementById('area_to');

        handlesSliderA.noUiSlider.on('update', function( valuesA, handleA ) {            
            if ( handleA ) {
                 valueInput2A.value = parseInt(valuesA[handleA]);         
            } else {
                valueInputA.value = parseInt(valuesA[handleA]);                
            }
        });

        valueInputA.addEventListener('change', function(){
            handlesSliderA.noUiSlider.set([this.value, null]);
        });

        valueInput2A.addEventListener('change', function(){
            handlesSliderA.noUiSlider.set([null, this.value]);
        });
    
    }
    
    
    $('.price-range-checkbox__more').click(function(){ 
        $(this).parents('.price-range-checkbox').toggleClass('active');
        return false;
    });
    
    $('.filter-aside-item__title').click(function(){ 
        $(this).parents('.filter-aside-item').toggleClass('active');
        $(this).next('.filter-aside-item__content').slideToggle();
        return false;
    });
    
    
    $('.js-products-fav').click(function(){ 
        $(this).toggleClass('active');
        
        if($(this).hasClass('active')){
            $(this).html('<svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m15 25.35-1.45-1.32C8.4 19.36 5 16.28 5 12.5 5 9.42 7.42 7 10.5 7c1.74 0 3.41.81 4.5 2.09C16.09 7.81 17.76 7 19.5 7c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L15 25.35Z"/></svg>');
        }else{
            $(this).html('<svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 6c-1.74 0-3.41.81-4.5 2.09C13.91 6.81 12.24 6 10.5 6 7.42 6 5 8.42 5 11.5c0 3.78 3.4 6.86 8.55 11.54L15 24.35l1.45-1.32C21.6 18.36 25 15.28 25 11.5 25 8.42 22.58 6 19.5 6Zm-4.4 15.55-.1.1-.1-.1C10.14 17.24 7 14.39 7 11.5 7 9.5 8.5 8 10.5 8c1.54 0 3.04.99 3.57 2.36h1.87C16.46 8.99 17.96 8 19.5 8c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05Z"/></svg>');
        }
        
        return false;
    });
    
    $('.js-products-compare').click(function(){ 
        $(this).toggleClass('active');
        return false;
    });
    
    $('.js-products-slider .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:5,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>',
        appendArrows:$('.products-slider-arrows'),
         swipeToSlide:true,
         responsive: [
           
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });    
    
    $('.js-products-slider-2 .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:6,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>',
        appendArrows:$('.products-slider-arrows'),
         swipeToSlide:true,
         responsive: [
           {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint:768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:true
                    }
                }
        ]
    });
    
    $('.js-slider-photos').slick({
        infinite:true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.8 18-6-6 6-6-1.2-2.4L7.2 12l8.4 8.4 1.2-2.4Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.2 18 6-6-6-6 1.2-2.4 8.4 8.4-8.4 8.4L7.2 18Z"/></svg></button>',
    });
    
    
    $('.js-slider-photos-2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-slider-photos-2-nav',
       
    });
    $('.js-slider-photos-2-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.js-slider-photos-2',
      dots: false,
      focusOnSelect: true,
        vertical:true,
        arrows:false
    });
    

    $('.slick-cloned a').removeAttr('data-fancybox');    
    
    
    $('.js-products-other-slider .y-row').each(function() {  
        $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:6,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>',
            appendArrows:$(this).parents('.js-products-other-slider').find('.products-other-slider-arrows'),
             swipeToSlide:true,
             responsive: [
                 {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow:5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint:768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:true,
                        arrows:false
                    }
                }
            ]
        })
    })
    
    $('.tabs-other-nav__item').on('click', function(event) {  
        $(this).parents('.tabs-other').find('.tabs-other-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs-other').find('.tabs-other__content').removeClass('active');
        $(this).parents('.tabs-other').find('.tabs-other__content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
        $(this).parents('.tabs-other').find('.js-products-other-slider  .y-row').slick('setPosition', 0);
        $(this).parents('.tabs-other').find('.js-products-other-slider  .y-row').resize();
        return false;
    });
    
    $('.product-tabs-nav__item').on('click', function(event) {  
        $(this).parents('.product-tabs').find('.product-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-tabs').find('.product-tabs-content').removeClass('active');
        $(this).parents('.product-tabs').find('.product-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
        $('.js-slider-photos-2-nav').slick('resize');
        $('.js-slider-photos-2').slick('resize');
        $('.js-slider-photos-2').slick('setPosition', 0);
        $('.js-slider-photos-2-nav').slick('setPosition', 0);
        
        $(this).parents('.product-tabs').find('select option[value='+$(this).attr('data-tab')+']').prop('selected', true);
        $(this).parents('.product-tabs').find('select').selectric('refresh');
        
        return false;
    });    
    
    $('.product-tabs-select select').on('change', function() {
        $(this).parents('.product-tabs').find('.product-tabs-nav__item[data-tab="'+$(this).val()+'"]').click();
        
    });
    
    $('.js-reviews-slider .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>',
        appendArrows:$('.reviews-slider-arrows'),
         swipeToSlide:true,
         responsive: [
           
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
             {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('.slider-tabs-nav').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.257A1.256 1.256 0 0 0 5.855.368L.367 5.856a1.258 1.258 0 0 0 0 1.777l5.488 5.488a1.257 1.257 0 0 0 1.777-1.777l-4.599-4.6 4.6-4.598A1.253 1.253 0 0 0 8 1.257Z" ></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.231a1.256 1.256 0 0 0 2.145.889l5.488-5.488a1.258 1.258 0 0 0 0-1.777L2.145.367A1.257 1.257 0 0 0 .368 2.145l4.599 4.599-4.6 4.598a1.252 1.252 0 0 0-.367.889Z" /></svg></button>',
        responsive: [            
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                     slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                     slidesToShow: 2,
                }
            }
        ]
    }); 
    
    $(window).on('resize orientationchange', function() {
      $('.slider-tabs-nav').slick('resize');
    });
    
    $('.product-info-tabs-nav__item').on('click', function(event) {  
        $(this).parents('.product-info-tabs').find('.product-info-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-info-tabs').find('.product-info-tabs-content').removeClass('active');
        $(this).parents('.product-info-tabs').find('.product-info-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
        return false;
    });
    
    
    $('.js-filter-btn').click(function(){ 
        $(".js-filter").addClass('active');
        $('body').addClass('body-filter-open');
        return false;
    });
    
    $('.js-filter-close').click(function(){ 
        $(".js-filter").removeClass('active');
         $('body').removeClass('body-filter-open');
        return false;
    });
    
    
    $('.form-subscribe').each(function() {  
        $(this).validate({  
             //ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'name': "required",               
                'email': {
                    'email':true,
                    "required":true
                }            
            },
            messages: {
                'name': "Обязательно заполните поле",               
                'email': {
                    'email':"Введите корректный E-mail",
                    "required":"Обязательно заполните поле"
                }, 
            },
            submitHandler: function(form){
              $(form).submit();
            }
         });
    });
    
    
    $('.js-products-item-hover-photo').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.174 12.938c.313-.313.281-.782 0-1.094L4.393 8.25h9a.74.74 0 00.75-.75v-1a.76.76 0 00-.75-.75h-9l3.781-3.563c.281-.312.313-.78 0-1.093L7.487.406a.774.774 0 00-1.063 0L.362 6.5a.684.684 0 000 1.031l6.062 6.094c.281.281.75.281 1.063 0l.687-.688z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 1.094c-.312.312-.28.781 0 1.093L9.862 5.75H.892a.74.74 0 00-.75.75v1c0 .438.313.75.75.75h8.97L6.08 11.844a.814.814 0 000 1.094l.688.687c.312.281.781.281 1.062 0l6.094-6.094c.281-.281.281-.75 0-1.062L7.83.406c-.28-.281-.75-.281-1.062 0l-.688.688z"></svg></button>' 
    });
    
    
    $('.js-text-more-hidden-toggle').click(function(){ 
        $(this).prev('.js-text-more-hidden').toggleClass('text-more-hidden');
        if($(this).prev('.js-text-more-hidden').hasClass('text-more-hidden')){
            $(this).text($(this).attr('data-show'));
        }else{
             $(this).text($(this).attr('data-hide'));
        }
        return false;
    });
    
     $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    
    $(".input-phone").mask("+7 999 999 99 99").on('click', function () {
        if ($(this).val() === '+7 ___ ___ __ __') {
           $(this).setCursorPosition(3);
        }
    });
    
    $('.form-auth').each(function() {  
        $(this).validate({  
             //ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'phone': "required",               
                'agree': "required"
            },
            messages: {
                'phone': "Обязательно заполните телефон",               
                'agree': "Обязательное поле"
            },
            submitHandler: function(form){
                $(form).find('.form-auth__btn').hide();
                $(form).find('.form-auth__code').show();                
                var this_form= $(form);        
                var count = 59;
                var innterval = setInterval(function() {
                if (count == 0)
                    {
                        console.log('end');
                        clearInterval(innterval);
                        this_form.find('.form-auth__timer-count').hide();
                        this_form.find('.form-auth__timer-finish').show();
                    }else{
                        console.log(count);
                        count--;
                        this_form.find('.form-auth__timer-time').html(count);
                    } 
                }, 1000);
            }
         });
    });
    

    $('.form-auth__timer-finish a').click(function(){ 
        $(this).parents('.form-auth').find('.form-auth__timer-count').show();
        $(this).parents('.form-auth').find('.form-auth__timer-finish').hide();
        var this_form=$(this).parents('.form-auth');
        this_form.find('.form-auth__timer-time').html('59');
        var count = 59;
        var innterval = setInterval(function() {
        if (count == 0)
            {
                console.log('end');
                clearInterval(innterval);
                this_form.find('.form-auth__timer-count').hide();
                this_form.find('.form-auth__timer-finish').show();
            }else{
                console.log(count);
                count--;
                this_form.find('.form-auth__timer-time').html(count);
            }           
            
          }, 1000);
        return false;  
    })
        
    if($('#timer').length){
        
        var day = new Date();
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 2);
        console.log(nextDay); // May 01 2000    
        
        var countDownDate = new Date(nextDay).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo"
          document.getElementById("timer").innerHTML = days + " д " + hours + " ч "
          + minutes + " мин " + seconds + " сек";
            
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
          }
        }, 1000);
    }
    
    $(document).on('click', '.calc__minus', function(){ 
        var val=parseInt($(this).parent('.calc').find('.calc__input').val());
        var new_val=val-1;
        if(new_val<1)
        {
            new_val=1;
            $(this).parents('.added').removeClass('added');
        }
        $(this).parent('.calc').find('.calc__input').val(new_val);   
        
        return false;  
    })
    
    $(document).on('click', '.calc__plus', function(){ 
        var val=parseInt($(this).parent('.calc').find('.calc__input').val());
        var new_val=val+1;
        if(new_val<1)new_val=1;
        $(this).parent('.calc').find('.calc__input').val(new_val);        
        return false;  
    })
    
    $('.js-table-toggle-order').click(function(){ 
        $(this).toggleClass('active');
        $(this).parents('tr').next('.table-orders__hidden').find('.table-orders-more-wrapper').slideToggle();
        return false;
    })
    
    
    $('.js-text-more').click(function(){ 
        $(this).parents('.text-more').find('.text-more__text').toggleClass('active');
        if($(this).parents('.text-more').find('.text-more__text').hasClass('active')){
            $(this).text($(this).attr('data-hide'));
        }else{
             $(this).text($(this).attr('data-show'));
        }
        return false;
    });
    
    $('.js-tocart').click(function(){ 
        $(this).parents('.products-item__btns').toggleClass('added');
        return false;
    });
    
    
    var countSlab = $(".js-slider-slab .slider-slab__slide").length;

    var countResponsive=3;
    
    if($(window).innerWidth()<1200){
       var countResponsive=2;
    }
    
    if($(window).innerWidth()<992){
       var countResponsive=3;
    }
    
    if($(window).innerWidth()<768){
       var countResponsive=1;
    }
    
    if(countSlab>countResponsive){
        
        $('.js-slider-slab').on('init', function(slick){
            var currentSlide=0;
            if(currentSlide>0){
                $('.slider-slab__prev').html(currentSlide).fadeIn();            
            }else{
                $('.slider-slab__prev').fadeOut();            
            }

            var nextSlides=countSlab - currentSlide - countResponsive;

            if(nextSlides>0){
                $('.slider-slab__next').html(nextSlides).fadeIn();            
            }else{
                $('.slider-slab__next').fadeOut();            
            }

            //var countSlab = $(".js-slider-slab .slider-slab__slide").length;

        });
        
        $('.js-slider-slab').slick({
            infinite:false,
            arrows:true,
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.8 18-6-6 6-6-1.2-2.4L7.2 12l8.4 8.4 1.2-2.4Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.2 18 6-6-6-6 1.2-2.4 8.4 8.4-8.4 8.4L7.2 18Z"/></svg></button>',
            //variableWidth:true,
            responsive: [            
                 {
                    breakpoint: 1200,
                    settings: {
                         slidesToShow: 2,
                    }
                },
                 {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:true,
                    }
                }
            ]
        }); 
        
    }else{
        
        $('.js-slider-slab').slick({
            infinite:false,
            arrows:true,
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.8 18-6-6 6-6-1.2-2.4L7.2 12l8.4 8.4 1.2-2.4Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.2 18 6-6-6-6 1.2-2.4 8.4 8.4-8.4 8.4L7.2 18Z"/></svg></button>',
            //variableWidth:true,
            responsive: [            
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                         slidesToShow: 2,
                    }
                },
                 {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:true,
                    }
                }
            ]
        }); 
        
    }
    
    
    $('.js-slider-slab').on('afterChange', function(event, slick, currentSlide, direction){
        //console.log(currentSlide);
        if(currentSlide>0){
            $('.slider-slab__prev').html(currentSlide).fadeIn();            
        }else{
            $('.slider-slab__prev').fadeOut();            
        }
        
        var nextSlides=countSlab - currentSlide - countResponsive;
        console.log(countSlab +' '+  currentSlide +'-'+ countResponsive +' '+ nextSlides);
        if(nextSlides>0){
            $('.slider-slab__next').html(nextSlides).fadeIn();            
        }else{
            $('.slider-slab__next').fadeOut();            
        }
        
        
    });
    
    $(window).on('resize orientationchange', function() {
      $('.js-slider-slab').slick('resize');
    });
    
    $('.slider-slab-item').click(function(){
        $('.slider-slab-item').removeClass('active');
        $(this).addClass('active');
        return false;
    })
    
    $('.product-share__toggle').click(function(){
       
        
        if($(window).innerWidth()<992){
             $(this).next('.product-share__content').slideToggle();
        }else{
             $(this).next('.product-share__content').fadeToggle(100);
        }
        
        $('body').toggleClass('body-open-share');        
        return false;
    })
    
    $('.products-item__title').matchHeight();
    
    $('.product-price-block-tabs-nav__item').on('click', function(event) {  
        $(this).parents('.product-price-block-tabs').find('.product-price-block-tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-price-block-tabs').find('.product-price-block-tabs-content').removeClass('active');
        $(this).parents('.product-price-block-tabs').find('.product-price-block-tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
        return false;
    });
    
   $('.product-favorite').on('click', function(event) { 
        $(this).toggleClass('active');
        return false;
    });
    
    $('.js-tooltip').tooltipster({
        maxWidth: 280,
    });
    
    
    $(document).on('click', '.js-tocart-2', function(){ 
        $(this).parents('.product-price-block__btns-cart').addClass('added');
        return false;
    });
    
    
    
    var ll2 = new LazyLoad({
        elements_selector: ".slick-slide .lazyload",
    });
    
    ll2.loadAll();

});

function myCopy() {
      var copyText = document.getElementById("copyInput");
      copyText.select();
      copyText.setSelectionRange(0, 99999); 
      navigator.clipboard.writeText(copyText.value);
    }


/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.form-inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));