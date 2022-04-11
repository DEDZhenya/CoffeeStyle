$(function() {
    $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img src='../images/prev.svg' alt = 'prev' class = 'prev'>",
        nextArrow: "<img src='../images/next.svg' alt = 'next' class = 'next'>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.header__link-burger').on('click', function() {
        $('.rightsite__menu').removeClass('rightsite__menu--close')
        $('body').toogleClass('.lock')
    })
    $('.rightsite__menu-close').on('click', function() {
        $('.rightsite__menu').addClass('rightsite__menu--close')

    })
});