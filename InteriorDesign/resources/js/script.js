$(document).ready(function(){
    
    /* Sticky navigation */
    $('.js--blurb').waypoint(function(direction){
        if(direction == "down")
            {
                $('nav').addClass('sticky');
            }
        else
            {
                $('nav').removeClass('sticky');
            }
    }, {
        offset: '10px;'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-blurb').click(function () {
        $('html, body').animate({scrollTop: $('.js--blurb').offset().top}, 1000);
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--nav-bar');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    }); 
});