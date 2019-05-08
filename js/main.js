$(document).ready(function() {
    //////////////// nav hover
    $("nav").accessibleDropDown();
    $('#menu ul li a').hover(function() {
        $(this).stop().animate({
            borderRadius: '2px'
        },
        200);
    },
    function() {
        $(this).stop().animate({
            borderRadius: '20px'
        },
        500);
    }); //////////// end nav hover
    
    
    /////////////////// start of slider
    $('#slider3').anythingSlider({
        theme           :'metallic',
        expand          :false,
        resizeContents  :true,
        aspectRatio     :true,
        showMultiple    :1,
        changeBy        :1,
        startPanel      :1,
        autoPlay        :true,
        buildArrows     :true,
        pauseOnHover    :true
    })
    .find('.panel')
    .find('div[class*=caption]').css({
        position:'absolute'
    })
    .end()
    .hover(function() {
        showCaptions($(this))
    },
    function() {
        hideCaptions($(this));   
    });
    ////////////// beginning of showCaptions and HideCaptions functions
    showCaptions = function(el){
        var $this = el;
        if ($this.find('.caption-top').length) {
            $this.find('.caption-top')
                .show()
                .animate({ top: 0, opacity: 9 }, 400);
        }
        if ($this.find('.caption-right').length) {
            $this.find('.caption-right')
                .show()
                .animate({ right: 0, opacity: 9 }, 400);
        }
        if ($this.find('.caption-bottom').length) {
            $this.find('.caption-bottom')
                .show()
                .animate({ bottom: 0, opacity: 9 }, 400);
        }
        if ($this.find('.caption-left').length) {
            $this.find('.caption-left')
                .show()
                .animate({ left: 0, opacity: 9 }, 400);
        }
    };
    hideCaptions = function(el){
        var $this = el;
        if ($this.find('.caption-top').length) {
            $this.find('.caption-top')
                .stop()
                .animate({ top: -50, opacity: 0 }, 350, function(){
                $this.find('.caption-top').hide(); });
        }
        if ($this.find('.caption-right').length) {
            $this.find('.caption-right')
                .stop()
                .animate({ right: -150, opacity: 0 }, 350, function(){
                $this.find('.caption-right').hide(); });
        }
        if ($this.find('.caption-bottom').length) {
            $this.find('.caption-bottom')
                .stop()
                .animate({ bottom: -50, opacity: 0 }, 350, function(){
                $this.find('.caption-bottom').hide(); });
        }
        if ($this.find('.caption-left').length) {
            $this.find('.caption-left')
                .stop()
                .animate({ left: -150, opacity: 0 }, 350, function(){
                $this.find('.caption-left').hide(); });
        }
    };  /////////////////end of showCaptions and hideCaptions functions

    //////////////// hide all captions initially
    hideCaptions( $('#slider3 .panel') );
    ////////////////end slider 
    
});///////////////end ready

$.fn.accessibleDropDown = function() {
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
};

////////////////// Contact Form
function validForm() {
    // first name, email, comments and phone
    var fname = document.form1.fname;
    var lname = document.form1.lname;
    var email = document.form1.email;
    var regexEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    var phone1 = document.form1.phone1;
    var phone2 = document.form1.phone2;
    var phone3 = document.form1.phone3;
    var comments = document.form1.comments;
    
    // collecting the error spans for later use
    var fnErr = document.getElementById('fnErr');
    var lnErr = document.getElementById('lnErr');
    var emErr = document.getElementById('emErr');
    var phErr = document.getElementById('phErr');
    var cmErr = document.getElementById('cmErr');
    
    //feedback - radio selection
    var feedback = document.getElementById('feedback');
    var fbErr = document.getElementById('fbErr');
    var i = feedback.selectedIndex;
    var fbValue = feedback.options[i].text;
    
    //interests - radio selection
    var interest = document.getElementById('interest');
    var inErr = document.getElementById('inErr');
    var si = interest.selectedIndex;
    var inValue = interest.options[si].text;
    
    //notices
    var notices = document.form1.notices;
    var selected;
    
    //set up a message for an advert recipient
    var msg = 'Thank you, <b>'+fname.value+' '+lname.value+'!</b> Your message has been received and one of us will reply to <a href="'+email.value+'">'+email.value+'</a> within a day or two. Relax, and enjoy the rest of the site!';
    
    
    // first name cannot be blank
    if(fname.value == '') {
        fnErr.innerHTML = 'We need your first name, please.';
        fname.focus();
        return false;
    } else {
        fnErr.innerHTML = '';
    };
    
    // last name cannot be blank
    if(lname.value == '') {
        lnErr.innerHTML = 'We need your last name, please.';
        lname.focus();
        return false;
    } else {
        lnErr.innerHTML = '';
    };
    
    //email cannot be blank
    if(email.value == '') {
        emErr.innerHTML = 'We need an email address, please.';
        email.focus();
        return false;
    } else {
        email.innerHTML = '';
    };
    
    //email error checking
    if(regexEmail.test(email.value)) {
        emErr.innerHTML = '';
    } else {
        emErr.innerHTML = 'Must be a valid email address.';
        email.focus();
        return false;
    };
    
    //phone needs numbers only
    if(isNaN(phone1.value) || isNaN(phone2.value) || isNaN(phone3.value)) {
        phErr.innerHTML = 'If you include a phone number it should be numbers only.';
        phone1.select();
        return false;
    } else {
        phErr.innerHTML = '';
    };
    
    //comments cannot be blank
    if(comments.value == '') {
        cmErr.innerHTML = 'Please include a comment or "none" in the comment box';
        comments.focus();
        return false;
    } else {
        cmErr.innerHTML = '';
    };
    
    //feedback - radio selection
    if(fbValue === '-- Please Select --') {
        fbErr.innerHTML = 'Please choose a Rating.';
        return false;
    } else {
        fbErr.innerHTML = '';
    };
    
    //interests - radio selection
    if(inValue === '-- Please Select --') {
        inErr.innerHTML = 'Please select your interests.';
        return false;
    } else {
        inErr.innerHTML = '';
    };
    
    //notices
    for(var i=0; i<notices.length; i++) {
        if(notices[i].checked) {
            selected = notices[i].value;
        }
    };
    
    //set up a message for an advert recipient
    if(selected != undefined) {
        document.getElementById('notePref').innerHTML = '';
    };
    if(selected == 'yes') {
        // here's where we test the contents of "selected"
        document.getElementById('fn1Msg').innerHTML = msg;
        var contactForm = document.getElementById('contactForm').setAttribute('class', 'hide');
        var loseSep = document.getElementsByClassName('spec');
        loseSep[0].setAttribute('class', 'hide');
    } else if(selected == 'maybe' || selected == 'no') {
        document.getElementById('fn1Msg').innerHTML = '<strong>'+fname.value+'</strong>, thank you for your feedback!';
        var contactForm = document.getElementById('contactForm').setAttribute('class', 'hide');
        var loseSep = document.getElementsByClassName('spec');
        loseSep[0].setAttribute('class', 'hide');
    } else {
        document.getElementById('notePref').innerHTML = 'Please make a selection:';
    };
};