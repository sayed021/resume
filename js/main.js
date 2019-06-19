// initial wow jquery for animation
new WOW().init();


// window onload function

$(window).on('load',  function(event) {
    $("#mscroll").mCustomScrollbar();
    setTimeout(function(){
        $('.pageLoader').fadeOut(300);
    },200)
});