const switchMenu = $('#switch-menu');
const navMenu = $('#nav-menu');

switchMenu.click(function(){
    const $this = $(this);
    let h;
    if(navMenu.is(':hidden')){
        h = navMenu.show().height();
        navMenu.css('height', 0);

        navMenu.animate({'height': h}, 500, function(){
            $this.addClass('active');
        });
    } else {
        navMenu.animate({'height': h}, 500, function(){
            $this.removeClass('active');
            navMenu.removeAttr('style').hide();
        });
    }
});


function initMobile() {
    $('body').addClass('is-mobile').removeClass('is-desktop');
    console.log("is-mobile");
}


function initDesktop() {
    $('body').addClass('is-desktop').removeClass('is-mobile');
    switchMenu.removeClass('active');
    navMenu.removeAttr('style');
    console.log("is-desktop");
}


ssm.addState({
    id: 'tablet',
    query: '(max-width: 768px)',
    onEnter: function(){
        initMobile();
    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 768px)',
    onEnter: function(){
        initDesktop();
    }
});



// $("#slider").slick({
//     // autoplay: true,
//     slidesToScroll:1,
//     slidesToShow:1,
//     arrows: false,
//     dots: true,
//     dotsClass: 'dots',
//     draggable: true
//
// });
//
// let elA = $('#el');
// let BoxA = $('#boxA');
// elA.hide();
// BoxA.click(function sayHi(){
//     const target = $(this).data('open');
//     $(target).slideToggle(function(){
//
//     });
// });
// let elD = $('#eld');
// let BoxD = $('#boxd');
// elD.hide();
// BoxD.click(function (){
//     const target = $(this).data('open');
//     $(target).slideToggle(function(){
//     });
// });
//  function sayHi() {
//     const target = $(this).data('open');
//     $(target).slideToggle(function() {
//         if (el.is(':hidden')) {
//         }
//         else {
//         }
// }};
// const el1 = $('#el1');
// const test1 = $('#hero1');
// el1.hide();
// test1.click(function sayHi(){
//     const target = $(this).data('open');
//     $(target).slideToggle(function(){
//         if(el1.is(':hidden')) {
//         } else {
//         }
//     });
// });