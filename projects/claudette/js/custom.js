


jQuery('#main-menu').html(jQuery('header nav').html());
var API;
jQuery(document).ready(function() {
    jQuery("#main-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [`
                    <div class="mobile-logo"><a href="index.html"><img src="images/logo.png" alt="" width="256" height="168" /></a></div>
                    <span class="mmenu-close-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                `]
            },
            {
                "position": "bottom",
                "content": [
                    "<a href='#'><i class='fa fa-twitter'></i></a>",
                    "<a href='#'><i class='fa fa-instagram'></i></a>",
                    "<a href='#'><i class='fa fa-facebook-f'></i></a>"
                 ]
            }
        ],
        "extensions": [
            "fx-menu-fade",
            "fx-panels-slide-up",
            "fx-listitems-slide"
       ]
    });
    API = jQuery("#main-menu").data( "mmenu" );
    jQuery("#btn-close-menu, .mmenu-close-button").click(function(event) {
        API.close();
    });
    jQuery(window).resize(function(event) {
        if(jQuery(window).innerWidth()>950){ API.close(); }
    });
});