$(function () {
    "use strict";
    // Burger Menu 
    var burgerMenu = function () {
        $('.js-addo-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');
            }
            else {
                $this.addClass('active');
                $('body').addClass('offcanvas');
            }
        });
    };
    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#addo-aside, .js-addo-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas')) {
                    $('body').removeClass('offcanvas');
                    $('.js-addo-nav-toggle').removeClass('active');
                }
            }
        });
        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.js-addo-nav-toggle').removeClass('active');
            }
        });
    };
    if ($('#particles-js').length > 0) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100
                    , "density": {
                        "enable": true
                        , "value_area": 800
                    }
                }
                , "color": {
                    "value": "#c29032"
                }
                , "shape": {
                    "type": "circle"
                    , "stroke": {
                        "width": 0
                        , "color": "#000000"
                    }
                    , "polygon": {
                        "nb_sides": 5
                    }
                    , "image": {
                        "src": "img/github.svg"
                        , "width": 100
                        , "height": 100
                    }
                }
                , "opacity": {
                    "value": 0.5
                    , "random": false
                    , "anim": {
                        "enable": false
                        , "speed": 1
                        , "opacity_min": 0.1
                        , "sync": false
                    }
                }
                , "size": {
                    "value": 3
                    , "random": true
                    , "anim": {
                        "enable": false
                        , "speed": 40
                        , "size_min": 0.1
                        , "sync": false
                    }
                }
                , "line_linked": {
                    "enable": true
                    , "distance": 150
                    , "color": "#c29032"
                    , "opacity": 0.4
                    , "width": 1
                }
                , "move": {
                    "enable": true
                    , "speed": 6
                    , "direction": "none"
                    , "random": false
                    , "straight": false
                    , "out_mode": "out"
                    , "bounce": false
                    , "attract": {
                        "enable": false
                        , "rotateX": 600
                        , "rotateY": 1200
                    }
                }
            }
            , "interactivity": {
                "detect_on": "canvas"
                , "events": {
                    "onhover": {
                        "enable": true
                        , "mode": "grab"
                    }
                    , "onclick": {
                        "enable": true
                        , "mode": "push"
                    }
                    , "resize": true
                }
                , "modes": {
                    "grab": {
                        "distance": 140
                        , "line_linked": {
                            "opacity": 1
                        }
                    }
                    , "bubble": {
                        "distance": 400
                        , "size": 40
                        , "duration": 2
                        , "opacity": 8
                        , "speed": 3
                    }
                    , "repulse": {
                        "distance": 200
                        , "duration": 0.4
                    }
                    , "push": {
                        "particles_nb": 4
                    }
                    , "remove": {
                        "particles_nb": 2
                    }
                }
            }
            , "retina_detect": true
        });
    }
    var wind = $(window);
    // scroll
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    // Progress Bar
    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    // Testimonials owlCarousel
    $('.carousel-single.owl-carousel').owlCarousel({
        items: 1
        , loop: true
        , margin: 0
        , mouseDrag: false
        , autoplay: true
        , smartSpeed: 500
    });
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 4
            }
        }
    });
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg'
        , type: 'image'
        , gallery: {
            enabled: true
        }
    });
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
});
// === window When Loading === //
$(window).on("load", function () {
    var wind = $(window);
    // Preloader
    $(".loading").fadeOut(500);
    // stellar
    wind.stellar();
    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
        , masonry: {
            columnWidth: '.isotope-sizer'
        }
    , });
    var $gallery = $('.gallery').isotope({
        // options
    });
    // filter items on button click
    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });
    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // contact form validator
    $('#contact-form').validator();
    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            $.ajax({
                type: "POST"
                , url: url
                , data: $(this).serialize()
                , success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
    
});
// Slider 
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1
        , loop: true
        , margin: 0
        , autoplay: true
        , smartSpeed: 500
    });
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1
        , loop: true
        , margin: 0
        , autoplay: true
        , smartSpeed: 500
        , animateOut: 'fadeOut'
    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.nd-button').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.nd-button').addClass('animated zoomIn');
    });
});