$(function() {

    var newSelection = "";

    $("#filter-nav h2").click(function(){

        $("#filter-item").fadeTo(200, 0.10);

        $("#flavor-nav h2").removeClass("current");
        $(this).addClass("current");

        newSelection = $(this).attr("rel");

        $(".all_item").not("."+newSelection).slideUp();
        $("."+newSelection).slideDown();

        $("#filter-item").fadeTo(300, 1);

    });

});
$(function () {
    $('.all_item__newscontent').hide();
    $('div.all_item__content').click(function () {
        $(this).next().slideToggle('slow').siblings('p:visible').slideUp('slow');
    });
});
$(".inputUser").focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass("focus");
    }
});
$('.menu_box__open_fast').click(function () {
    $('.popup').addClass('active');
    $('.bg_popup').fadeIn();
    $('.bg_popup').click(function () {
        $('.popup').removeClass('active');
        $('.bg_popup').fadeOut();
    });
});
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#333"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#333",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        }
    }
);