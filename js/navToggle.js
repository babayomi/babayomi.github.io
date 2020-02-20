jQuery(document).ready(function(){

    jQuery("#nav-toggle").on('click',function(e){
        e.preventDefault();

        jQuery(".main-nav").slideToggle("main-nav-mobilehide");

    });

});