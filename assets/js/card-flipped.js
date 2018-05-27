$(document).ready(function(){
    $('.cardWrapper .card').click(function(){
        $(this).toggleClass('flipped');
    });
    
    $(".Contact").click(function(){
        $('html').animate({
        scrollTop: $("#hireme").offset().top-56
    }, 1500);
    }); 

    $(".Project").click(function(){
        $('html').animate({
        scrollTop: $("#project").offset().top-56
    }, 1500);
    }); 


    $(".About").click(function(){
        $('html').animate({
        scrollTop: $("#about").offset().top-56
    }, 1500);
    }); 

    $(".Home").click(function(){
        $('html').animate({
        scrollTop: $("#home").offset().top-56
    }, 1500);
    }); 

});