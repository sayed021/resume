$(document).ready(function() {
   // "use strict";

    document.getElementById('expYear').innerText = parseInt( new Date().getFullYear() ) - 2016;



    /**************************************************************************
                 SKILL BAR 
    **************************************************************************/

    $(".determinate").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
        .empty()
        .append('<i class="fa fa-circle"></i>');                
    });

    /**************************************************************************
        WOW INIT
    **************************************************************************/

    var wow = new WOW({ mobile: false });
    wow.init();


    $(".iziModal").iziModal({
        radius: 5,
        padding: 20,
       closeButton: true,
       title: 'title',
       width: 1250,
       headerColor: '#002e5b',
       /* bodyOverflow: Forcing overflow hidden in the document when opening the modal, closing the modal, overflow will be restored. */
       bodyOverflow: true,
    });



    
    /**************************************************************************
       Projects
    **************************************************************************/
    $('#portfolio-item').mixItUp();

    $('#back-button').on('click', function(event) {
        event.preventDefault();
        var dataShow    = $('#portfolio-item'),
            dataHide    = $('#project-gallery-view'),
            filterBtn   = $('#filter-button');

        $("[data-animate]").each( function() {
            $(this).addClass($(this).attr('data-animate'));
        });

        dataHide.fadeOut(400);
        $(this).fadeOut(400);
        setTimeout(function(){
            dataShow.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
            filterBtn.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
            dataShow.fadeIn(400);
            filterBtn.fadeIn(400);
        },400);
        setTimeout(function(){
            dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
        },1500);
    });

});

