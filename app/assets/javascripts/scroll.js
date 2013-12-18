/* =============================================================

    Smooth Scroll 1.1
    Animated scroll to anchor links.

    Script by Charlie Evans.
    http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links

    Rebounded by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/

 * ============================================================= */

(function($) {
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
        });
    });
})(jQuery);

$(document).ready(function()
{
  $('#navbar-button').click(function() {
    if($(this).css("margin-left") == "200px")
    {
        $('.navbar-fixed-left').animate({"margin-left": '-=200'});
        $('#navbar-button').animate({"margin-left": '-=200'});
    }
    else
    {
        $('.navbar-fixed-left').animate({"margin-left": '+=200'});
        $('#navbar-button').animate({"margin-left": '+=200'});
    }


  });


(function pulse(){
        $('.fa-chevron-down').delay(200).fadeOut(800).delay(50).fadeIn(800, pulse);
    })();

 });
