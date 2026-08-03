$(window).on("load", function() {
    // preload
    $("#preload").fadeOut(500);
});

jQuery(document).ready(function() {
    // slider
    $('.main-slider').bxSlider({
        mode: 'fade',
        pager: false,
        controls: true,
        auto: true,
        pause: 3000,
        speed: 1000
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // carousel team
    $('#team-doctors').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            700: { items: 2 },
            1000: { items: 3 }
        },
        smartSpeed: 2000,
        autoplayHoverPause: true
    });

    //magnific popup
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    // jquery UI
    $("#accordion").accordion({
        collapsible: true,
        icons: {
            "header": "ui-icon-plus",
            "activeHeader": "ui-icon-minus"
        }
    });

    // carousel testimonials
    $('#list-testimonials').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            700: { items: 2 },
            1000: { items: 3 }
        },
        smartSpeed: 2000,
        autoplayHoverPause: true
    });

    // focus, blur booking
    $('input').focus(function() {
        $(this).parent('.wrapper-input').css({
            'border-color': '#ffffff'
        });
    });
    
    $('input').blur(function() {
        $(this).parent('.wrapper-input').css({
            'border-color': '#348498'
        });
    });

    // scroll fixed menu
    $(window).scroll(function() {
        var headerTop = $('.header-top').height();
        if ($(this).scrollTop() >= headerTop) {
            $('.header-bottom').addClass('fixedheader')
        } else {
            $('.header-bottom').removeClass('fixedheader');
        }
    });

    // floating appointment button
    $('#float-appointment').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#float-appointment').fadeIn();
        } else {
            $('#float-appointment').fadeOut();
        }
    });

    (function cycleFloatAppointment() {
        var $btn = $('#float-appointment');
        if (!$btn.length) {
            return;
        }

        $btn.removeClass('show-tooth');
        setTimeout(function() {
            $btn.addClass('show-tooth');
            setTimeout(cycleFloatAppointment, 3000);
        }, 4000);
    })();

    // scroll menu (only in-page anchors like #about)
    $(".main-menu").on("click", "a", function(event) {
        var id = $(this).attr('href');
        if (!id || id.charAt(0) !== '#') {
            return; // allow normal navigation to other pages (e.g. kids.html)
        }
        event.preventDefault();
        var $target = $(id);
        if (!$target.length) {
            return;
        }
        var top = $target.offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    $("#logo, .appointment").on("click", function(event) {
        var id = $(this).attr('href');
        if (!id || id.charAt(0) !== '#') {
            return;
        }
        event.preventDefault();
        var $target = $(id);
        if (!$target.length) {
            return;
        }
        var top = $target.offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    // mobile menu
    $("#open-menu").click(function(e) {
        e.preventDefault();
        $(".wrapp-menu-callback.flex-row").animate({
            'left': 0
        }, 500);
    });

    $("#close-menu").click(function(e) {
        e.preventDefault();
        $(".wrapp-menu-callback.flex-row").animate({
            'left': '-330px'
        }, 500);
    });

    $(".main-menu li a, #logo, .appointment").on("click", function() {
        $(".wrapp-menu-callback.flex-row").animate({
            'left': '-320px'
        }, 500);
    });

    // ВИДАЛЕНО AJAX блок для форми - тепер використовується EmailJS

}); //ready
