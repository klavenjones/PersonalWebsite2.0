$(document).ready(function(){

    $('.intro-overlay').addClass('splash');
    $('.greeting').addClass('fadeIn');
  
    
    $('#grooving-close').click(function(){
        $('.groooving-overlay').addClass( 'animated rotateOutDownLeft');
        
        setTimeout(function(){
            $('.groooving-overlay').removeClass('visible animated rotateInUpLeft');
        },100)
        
    });

    $('#munchies-close').click(function(){
        $('.munchies-overlay').addClass('animated lightSpeedOut');
    });

    $('#blog-close').click(function(){
        $('.blog-overlay').addClass('animated flipOutX');
    });

   
   
    $('#groooving').click(function(){
        $('.groooving-overlay').removeClass('animated rotateOutDownLeft').addClass('visible animated rotateInUpLeft');
    });

    $('#munchies').click(function(){
        $('.munchies-overlay').removeClass('animated lightSpeedOut').addClass('visible animated lightSpeedIn');
    });

    $('#simple-blog').click(function(){
        $('.blog-overlay').removeClass('animated flipOutX').addClass('visible animated flipInX');
    });

    $('.project h2').hover(function(){
        $(this, 'span').css('font-size', '15px');
    }, function(){
        $(this, 'span').css('font-size', '12px');
    })
})


