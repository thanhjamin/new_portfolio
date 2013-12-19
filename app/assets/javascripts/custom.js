$(document).ready(function() {
                        var controller = $.superscrollorama();

                        // individual element tween examples
                        controller.addTween('.fade-it', TweenMax.from( $('.fade-it'), .5, {css:{opacity: 0}}));
                        controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{left:'1000px'}, ease:Quad.easeInOut}));
                        controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
                        controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'120px'}, ease:Quad.easeInOut}));
                        controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
                        controller.addTween('#fade-in', TweenMax.from( $('#fade-in'), .5, {css:{opacity: 0}}));
                        controller.addTween('#move-it', TweenMax.from( $('#move-it'), .75, {css:{left: '1200px'}}));
                });

