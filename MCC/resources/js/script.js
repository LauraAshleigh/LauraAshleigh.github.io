//$(document).ready(function(){
//    
//    /* Sticky navigation */
//    $('.js--mind-body-fitness').waypoint(function(direction){
//        if(direction == "down")
//            {
//                $('nav').addClass('sticky');
//            }
//        else
//            {
//                $('nav').removeClass('sticky');
//            }
//    }, {
//        offset: '60px;'
//    });
//    
//    /* Scroll on buttons */
//    $('.js--scroll-to-start').click(function () {
//        $('html, body').animate({scrollTop: $('.js--mind-body-fitness').offset().top}, 1000);
//    });
//    
//    /* Animations on scroll */
//    $('.js--wp-1').waypoint(function(direction) {
//        $('.js--wp-1').addClass('animated fadeIn');
//    }, {
//        offset: '60%;'
//    });    
//    
//    $('.js--wp-2').waypoint(function(direction) {
//        $('.js--wp-2').addClass('animated pulse');
//    }, {
//        offset: '60%;'
//    });    
//    
//    $('.js--wp-3').waypoint(function(direction) {
//        $('.js--wp-3').addClass('animated pulse');
//    }, {
//        offset: '60%;'
//    });    
//    
//    $('.js--wp-4').waypoint(function(direction) {
//        $('.js--wp-4').addClass('animated pulse');
//    }, {
//        offset: '60%;'
//    });    
//    
//    $('.js--wp-5').waypoint(function(direction) {
//        $('.js--wp-5').addClass('animated fadeInUp');
//    }, {
//        offset: '60%;'
//    });
//
//    /* Mobile navigation */
//    $('.js--nav-icon').click(function(){
//        var nav = $('.js--nav-bar');
//        var icon = $('.js--nav-icon i');
//        
//        nav.slideToggle(200);
//        
//        if(icon.hasClass('ion-md-menu')){
//            icon.addClass('ion-md-close');
//            icon.removeClass('ion-md-menu');
//        } else {
//            icon.addClass('ion-md-menu');
//            icon.removeClass('ion-md-close');
//        }
//    });
//    
//});
