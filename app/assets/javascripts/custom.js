$(document).ready(function() {
                        var controller = $.superscrollorama();

                        // individual element tween examples
                        controller.addTween('.fade-it', TweenMax.from( $('.fade-it'), .5, {css:{opacity: 0}}));
                        controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{top:'1000px'}, ease:Quad.easeInOut}));
                        controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
                        controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'120px'}, ease:Quad.easeInOut}));
                        controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
                        controller.addTween('#fade-in', TweenMax.from( $('#fade-in'), .5, {css:{opacity: 0}}));
                        controller.addTween('.move-it', TweenMax.from( $('.move-it'), .75, {css:{top: '150px'}}));

$('.gallery figure').css('position','relative').each(function() {
                        controller.addTween('.gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
                                });
                });
$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('nav').offset().top;

        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('nav').css({position: 'fixed' });
                        $('#nav_placeholder').css({display: 'block'});
                        $('.navbar-addon').css({position: 'fixed', top: '33px'});
                } else {
                        $('nav').css({position: 'static' });
                        $('.navbar-addon').css({position: 'relative', top: '-62px'});
                        $('#nav_placeholder').css({display: 'none'});
                }
        });
  });


(function($) {
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); // Animate the scroll to this link's href value
        });
    });
})(jQuery);

$(document).ready(function() {

var cnt=0, texts=[];

// save the texts in an array for re-use
$(".textContent").each(function() {
  texts[cnt++]=$(this).text();
});
function slide() {
  if (cnt>=texts.length) cnt=0;
  $('#textMessage').html(texts[cnt++]);
  $('#textMessage')
    .fadeIn('slow').animate({opacity: 1.0}, 2000).fadeOut('slow',
     function() {
       return slide()
     }
  );
}
slide()

});
