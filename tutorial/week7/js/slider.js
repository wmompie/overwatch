$(document).ready(function () {
    $('#slider3').anythingSlider({
        theme           : 'metallic',
        expand          : false,
        resizeContents  : true,
        aspectRatio     : true,
        showMultiple    : 1,
        changeBy        : 1,
        startPanel      : 1,
        autoPlay        : true,
        buildArrows     : true,
        pauseOnHover    : true
    })
    .find('.panel')
    .find('div[class*=caption]').css({
        position: 'absolute'
    })
    .end()
    .hover(function () {
        showCaptions($(this))
    },
    function() {
        hideCaptions($(this));  
    });
    // beginning of showCaptions and HideCaptions functions
    showCaptions = function(el){
        var $this = el;
        if ($this.find('.caption-top').length) {
            $this.find('.caption-top')
                .show()
                .animate({ top: 0, opacity: 1 }, 400);
        }
        if ($this.find('.caption-right').length) {
            $this.find('.caption-right')
                .show()
                .animate({ right: 0, opacity: 1 }, 400);
        }
        if ($this.find('.caption-bottom').length) {
            $this.find('.caption-bottom')
                .show()
                .animate({ bottom: 0, opacity: 1 }, 400);
        }
        if ($this.find('.caption-left').length) {
            $this.find('.caption-left')
                .show()
                .animate({ left: 0, opacity: 1 }, 400);
        }
    };
    hideCaptions = function(el) {
        var $this = el;
        if ($this.find('.caption-top').length) {
            $this.find('.caption-top')
                .stop()
                .animate({ top: -50, opacity: 0 }, 350, function (){
                $this.find('.caption-top').hide(); });
        }
        if ($this.find('.caption-right').length) {
            $this.find('.caption-right')
                .stop()
                .animate({ right: -150, opacity: 0 }, 350, function (){
                $this.find('.caption-right').hide(); });
        }
        if ($this.find('.caption-bottom').length) {
            $this.find('.caption-bottom')
                .stop()
                .animate({ bottom: -50, opacity: 0 }, 350, function (){
                $this.find('.caption-bottom').hide(); });
        }
        if ($this.find('.caption-left').length) {
            $this.find('.caption-left')
                .stop()
                .animate({ left: -150, opacity: 0 }, 350, function(){
                $this.find('.caption-left').hide(); 
            });
        }
    };  //end of showCaptions and hideCaptions functions

    // hide all captions initially
    hideCaptions($('#slider3 .panel'));
    hideCaptions($('.slider .panel'));
}); //end slider