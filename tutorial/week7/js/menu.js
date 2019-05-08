$(document).ready(function() {
    $("nav").accessibleDropDown();
    $('nav ul li a').hover(function() {
        $(this).stop().animate({
            paddingRight: '2.5em'
        },
        1000);
    },
    function() {
        $(this).stop().animate({
            paddingRight: '1.2em'
        },
        1000);
    }); // end nav hover
}); //end ready
$.fn.accessibleDropDown = function() {
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
};
function validForm() {
    // first name, email, comments and phone
    var fname = document.form1.fname;
    var email = document.form1.email;
    var regexEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    var comments = document.form1.comments;
    var phone1 = document.form1.phone1;
    var phone2 = document.form1.phone2;
    var phone3 = document.form1.phone3;
    
    // collecting the error spans for later use
    var fnErr = document.getElementById('fnErr');
    var lnErr = document.getElementById('lnErr');
    var emErr = document.getElementById('emErr');
    var phErr = document.getElementById('phErr');
    var cmErr = document.getElementById('cmErr');
    
    // first name cannot be blank
    if(fname.value == '') {
        fnErr.innerHTML = 'We need your name, please.';
        fname.focus();
        return false;
    } else {
        fnErr.innerHTML = '';
    };
    
    //email cannot be blank
    if(email.value == '') {
        emErr.innerHTML = 'We need an email addres, please.';
        email.focus();
        return false;
    } else {
        email.innerHTML = '';
    };
    
    //email error checking
    if(regexEmail.test(email.value)) {
        emErr.innerHTML = '';
    } else {
        emErr.innerHTML = 'Email is incorrect.';
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
    
    //guitar types - radio selection
    var gtrType = document.getElementById('guitarType');
    var gtErr = document.getElementById('gtErr');
    var i = gtrType.selectedIndex;
    var gtrValue = gtrType.options[i].text;
    
    if(gtrValue === '-- Please Select --') {
        gtErr.innerHTML = 'Please choose a guitar type.';
        return false;
    } else {
        gtErr.innerHTML = '';
    };
    
    //interests - radio selection
    var interest = document.getElementById('interest');
    var inErr = document.getElementById('inErr');
    var si = interest.selectedIndex;
    var inValue = interest.options[si].text;
    
    if(inValue === '-- Please Select --') {
        inErr.innerHTML = 'Please select your interests.';
        return false;
    } else {
        inErr.innerHTML = '';
    };
    
    //notices
    var notices = document.form1.notices;
    var selected;
    
    for(var i=0; i<notices.length; i++) {
        if(notices[i].checked) {
            selected = notices[i].value;
        }
    };
    
    //set up a message for an advert recipient
    var msg = 'Thank you, <b>'+fname.value+'!</b> Your message has been received and one of our representatives will reply to <a href="'+email.value+'">'+email.value+'</a> within a day or two. Relax, and enjoy the rest of the site!';
    
    if(selected != undefined) {
        document.getElementById('notePref').innerHTML = '';
    };
    if(selected == 'yes') {
        // here's where we test the contents of "selected"
        document.getElementById('fn1Msg').innerHTML = msg;
    } else if(selected == 'maybe' || selected == 'no') {
        document.getElementById('fn1Msg').innerHTML = '<strong>'+fname.value+'</strong>, thank you for your feedback!';
        var contactForm = document.getElementById('contactForm').setAttribute('class', 'hide');
        var loseSep = document.getElementsByClassName('spec');
        loseSep[0].setAttribute('class', 'hide');
    } else {
        document.getElementById('notePref').innerHTML = 'Please make a selection:';
    };
};