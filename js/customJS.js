/*
 ******************************************************************************************
 ************************************  Login Style  ***************************************
 ******************************************************************************************
 */



// for invalid email
$(document).ready(function() {
    $('.error').hide();
    $('input[type=password]').focus(function() {
        var email = $('#email').val();
        if (email == '') {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == false) {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == true) {
            $('.error').hide();
            $('.txt').css("border", "1.5px solid #37B34A");
            $('.txt').css("background", "#FFFFFF");
            return false;
        }
        return false;
    });
    $('#submit').click(function() {
        var email = $('#email').val();
        if (email == '') {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == false) {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == true) {
            $('.error').hide();
            $('.txt').css("border", "1.5px solid #37B34A");
            $('.txt').css("background", "#FFFFFF");
            return false;
        }
        return false;
    });
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}


// for invalid password
$(document).ready(function() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var capital_alphabets = /([A-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    $('.error2').hide();
    $('.unlock-icon').hide();
    $('.lock2-icon').hide();
    $('#password').keyup(function() {
        var password = $('#password').val();
        if (password == '') {
            $('.error2').show();
            //$('.lock2-icon').show();
            $('.pswd').css("border", "1.5px solid #E0B719");
            $('.pswd').css("background", "#FFF9E3");
            return false;
        }
        if ($('#password').val().length < 8) {
            $('.error2').show();
            //$('.lock2-icon').show();
            $('.pswd').css("border", "1.5px solid #E0B719");
            $('.pswd').css("background", "#FFF9E3");
            return false;
        }
        if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(capital_alphabets) && $('#password').val().match(special_characters)) {
            $('.error2').hide();
            $('.lock-icon').show();
            $('.lock2-icon').hide();
            //$('.unlock-icon').show();
            $('.pswd').css("border", "1.5px solid #40A7E3");
            $('.pswd').css("background", "white");
            return false;
        }
    });


    $('#submit').click(function() {
        var password = $('#password').val();
        var email = $('#email').val();
        if (email != '' && password == '') {
            $('.error2').show();
            $('.lock2-icon').show();
            $('.pswd').css("border", "1.5px solid #E0B719");
            $('.pswd').css("background", "#FFF9E3");
            return false;
        }
    });

    $("body").on('click', '.lock-icon, .unlock-icon, .lock2-icon', function() {
        $(this).toggleClass("abc");
        var input = $("#password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $('.unlock-icon').show();
            $('.lock-icon').hide();
            $('.lock2-icon').hide();
        } else {
            input.attr("type", "password");
            $('.unlock-icon').hide();
            $('.lock-icon').show();
        }
    });
});



/*
 ******************************************************************************************
 *********************************  Super Admin Style  ************************************
 ******************************************************************************************
 */



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').attr('src', e.target.result);
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-logo").click(function() {
    $('#imagePreview').fadeOut(650);
});

$("#imageUpload").change(function() {
    readURL(this);
});

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview1').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview1').css('border', 'none');
            $('#imagePreview1').hide();
            $('#imagePreview1').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-photo").click(function() {
    $('#imagePreview1').css('background-image', 'none');
    $('#imagePreview1').css('border', '1px solid #ccc');
});

$("#imageUpload1").change(function() {
    readURL1(this);
});


function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview2').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview2').css('border', 'none');
            $('#imagePreview2').hide();
            $('#imagePreview2').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-img").click(function() {
    $('#imagePreview2').css('background-image', 'none');
    $('#imagePreview2').css('border', '1px solid #ccc');
});

$("#imageUpload2").change(function() {
    readURL2(this);
});


function readURL5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview5').attr('src', e.target.result);
            $('#imagePreview5').hide();
            $('#imagePreview5').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-logo5").click(function() {
    $('#imagePreview5').fadeOut(650);
});

$("#imageUpload5").change(function() {
    readURL5(this);
});

function readURL6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview6').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview6').css('border', 'none');
            $('#imagePreview6').hide();
            $('#imagePreview6').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-photo6").click(function() {
    $('#imagePreview6').css('background-image', 'none');
    $('#imagePreview6').css('border', '1px solid #ccc');
});

$("#imageUpload6").change(function() {
    readURL6(this);
});


$(document).ready(function() {
    $('.btn-create').on('click', function() {
        if ($(this).text() == "Create And Send Email") {
            var inputText = $('.input-text');
            for (var i = 0; i < inputText.length; i++) {
                $(inputText).css("border", "1px solid #DCDCDC");
                $(inputText).css("background", "#FFFFFF");
                if ($(inputText[i]).val() == "") {
                    var warningMsg = $(inputText[i]).parent().parent();
                    if (warningMsg.children('.add-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.children('.add-client-warning-msg');
                        var labelText = $(inputText[i]).parent().children('label').text();
                        warningMsg.children('p').text(labelText + " cannot be empty.");
                        $('.add-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                    if (warningMsg.parent().parent().children('.add-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.parent().parent().children('.add-client-warning-msg');
                        warningMsg.children('p').text("Phone number cannot be empty.");
                        $('.add-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                }
            }
        } else {
            var inputText = $('.input-text');
            for (var i = 0; i < inputText.length; i++) {
                $(inputText).css("border", "1px solid #DCDCDC");
                $(inputText).css("background", "#FFFFFF");
                if ($(inputText[i]).val() == "") {
                    var warningMsg = $(inputText[i]).parent().parent();
                    if (warningMsg.children('.update-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.children('.update-client-warning-msg');
                        var labelText = $(inputText[i]).parent().children('label').text();
                        warningMsg.children('p').text(labelText + " cannot be empty.");
                        $('.update-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                    if (warningMsg.parent().parent().children('.update-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.parent().parent().children('.update-client-warning-msg');
                        warningMsg.children('p').text("Phone number cannot be empty.");
                        $('.update-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                }
            }
        }
    });
});



$(document).ready(function() {

    $("#dismiss-success").click(function() {
        $("#successful-msg").hide(300);
    });

    $(".toggle-password").click(function() {
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).attr("src", "./img/Login/unlock.png");
        } else {
            input.attr("type", "password");
            $(this).attr("src", "./img/Login/lock.png");
        }
    });

    //select all checkboxes
    $("#selectall").change(function() { //"select all" change 
        $(".select-checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
        if ($('.select-checkbox:checked').length > 0) {
            $('.selected-clients-manage').css('display', 'flex');
            $("#sub-cont-export").show();
        } else {
            $('.selected-clients-manage').css('display', 'none');
            $("#sub-cont-export").hide();
        }
    });

    //".checkbox" change 
    $('.select-checkbox').change(function() {
        //uncheck "select all", if one of the listed checkbox item is unchecked
        if (false == $(this).prop("checked")) { //if this item is unchecked
            $("#selectall").prop('checked', false); //change "select all" checked status to false
        }

        if ($('.select-checkbox:checked').length > 0) {
            $('.selected-clients-manage').css('display', 'flex');
            $("#sub-cont-export").show();
        } else {
            $('.selected-clients-manage').css('display', 'none');
            $("#sub-cont-export").hide();
        }

        //check "select all" if all checkbox items are checked
        if ($('.select-checkbox:checked').length == $('.select-checkbox').length) {
            $("#selectall").prop('checked', true);
        }

    });

});


/*     Date Picker start     */

var startDate = new Date(1991, 1 - 1, 1),
    endDate = new Date(new Date().getFullYear() - 18, 12 - 1, 31);
$(".birthday").datepicker({
    autoclose: true,
    disableTouchKeyboard: true,
    format: "dd/mm/yyyy",
    startDate: startDate,
    endDate: endDate
});


/*     Date Picker End      */


$(document).ready(function() {

    $(".manage-clients").show();
    $(".super-admin-clients-link").addClass('blue-color');
    $(".super-admin-profile").hide();

    $(".super-admin-clients-link").click(function() {
        $(".super-admin-profile").hide();
        $(".super-admin-clients-link").addClass('blue-color');
        $(".manage-clients").show(200);
    });

    $(".super-admin-profile-link").click(function() {
        $(".manage-clients").hide();
        $(".blue-color").removeClass('blue-color');
        $(".worker-dashboard-link").addClass('blue-color');
        $(".super-admin-profile").show(200);
    });

});



/*
 ******************************************************************************************
 *********************************  Worker Area Style  ************************************
 ******************************************************************************************
 */



$(document).ready(function() {

    $(".worker-dashboard").show();
    $(".worker-dashboard-link").addClass('blue-color');
    $(".worker-profile").hide();
    $('.my-training').hide();
    $(".worker-training-certified").hide();
    $(".worker-training-new").hide();

    $(".worker-profile-link").click(function() {
        $(".worker-dashboard").hide();
        $('.my-training').hide();
        $(".worker-training-certified").hide();
        $(".worker-training-new").hide();
        $(".blue-color").removeClass('blue-color');
        $("#worker-personal-information").show();
        $("#worker-personal-information-link").addClass('blue-color');
        $("#worker-required-document").hide();
        $(".worker-profile").show(200);
    });

    $(".worker-dashboard-link").click(function() {
        $(".worker-profile").hide();
        $('.my-training').hide();
        $(".worker-training-certified").hide();
        $(".worker-training-new").hide();
        $(".blue-color").removeClass('blue-color');
        $(".worker-dashboard-link").addClass('blue-color');
        $(".worker-dashboard").show(200);
    });

    $(".my-training-link").click(function() {
        $(".worker-profile").hide();
        $(".worker-dashboard").hide();
        $(".worker-training-certified").hide();
        $(".worker-training-new").hide();
        $(".blue-color").removeClass('blue-color');
        $(".my-training-link").addClass('blue-color');
        $(".my-training").show(200);
    });

    $(".my-training-btn").click(function() {
        $(".worker-profile").hide();
        $(".worker-dashboard").hide();
        $(".worker-training-certified").hide();
        $(".worker-training-new").hide();
        $(".blue-color").removeClass('blue-color');
        $(".my-training-link").addClass('blue-color');
        $(".my-training").show(200);
    });

    $(".worker-training-certified-link").click(function() {
        $(".worker-profile").hide();
        $(".worker-dashboard").hide();
        $(".my-training").hide();
        $(".blue-color").removeClass('blue-color');
        $(".my-training-link").addClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $(".worker-training-certified").show(200);
    });

    $(".worker-training-new-link").click(function() {
        $(".worker-profile").hide();
        $(".worker-dashboard").hide();
        $(".my-training").hide();
        $(".blue-color").removeClass('blue-color');
        $(".my-training-link").addClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $(".worker-training-new").show(200);
    });

});


//      Worker Profile Tabs Toggle

$(document).ready(function() {
    $("#worker-personal-information-link").click(function() {
        $("#worker-required-document").hide();
        $(".set-color .blue-color").removeClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $("#worker-personal-information").show(200);
    });

    $("#worker-required-document-link").click(function() {
        $("#worker-personal-information").hide();
        $(".set-color .blue-color").removeClass('blue-color');
        $("#worker-required-document-link").addClass('blue-color');
        $("#worker-required-document").show(200);
    });
});


function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview3').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview3').css('border', 'none');
            $('#imagePreview3').hide();
            $('#imagePreview3').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-img2").click(function() {
    $('#imagePreview3').css('background-image', 'none');
    $('#imagePreview3').css('border', '1px solid #ccc');
});

$("#imageUpload3").change(function() {
    readURL3(this);
});

function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview4').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview4').css('border', 'none');
            $('#imagePreview4').hide();
            $('#imagePreview4').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-worker-signature").click(function() {
    $('#imagePreview4').css('background-image', 'none');
    $('#imagePreview4').css('border', '1px solid #ccc');
});

$("#imageUpload4").change(function() {
    readURL4(this);
});



$(document).ready(function() {

    $('div.dropdown-lang > div.list-lang > div.item > img').each(function() {
        if ($('.caption-lang img').attr('src') == $(this).attr('src')) {
            $(this).parent().addClass('selected');
        }
    });

    $('.dropdown-lang > .caption-lang').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.dropdown-lang > .list-lang > .item').on('click', function() {
        $('.dropdown-lang > .list-lang > .item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open');
        $('.caption-lang img').attr('src', $(this).children('img').prop('src'));
    });

    $(document).on('keyup', function(evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.dropdown-lang').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ($(evt.target).closest(".dropdown-lang > .caption-lang").length === 0) {
            $('.dropdown-lang').removeClass('open');
        }
    });

});


$(document).ready(function() {

    $('.dropdown-profile > .caption-profile').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.dropdown-profile > .list-profile > .item').on('click', function() {
        $('.dropdown-profile > .list-profile > .item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open');
    });

    $(document).on('keyup', function(evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.dropdown-profile').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ($(evt.target).closest(".dropdown-profile > .caption-profile").length === 0) {
            $('.dropdown-profile').removeClass('open');
        }
    });

});

$(document).ready(function() {

    var total_messages = $('.dropdown-notification > .list-notification > .item').length;

    $('.dropdown-notification > .caption-notification').on('click', function() {
        if (total_messages > 0) {
            $(this).parent().toggleClass('open');
        }
    });

    if (total_messages > 0) {
        $('div.dropdown-notification > div.caption-notification > div.total-messages').css('display', 'flex');
        $('div.dropdown-notification > div.caption-notification > div.total-messages').text(total_messages);
        $('div.dropdown-notification > div.caption-notification > img').attr('src', './img/Worker\ Area/notification.png');
    } else {
        $('div.dropdown-notification > div.caption-notification > div.total-messages').css('display', 'none');
        $('div.dropdown-notification > div.caption-notification > img').attr('src', './img/Super\ Admin/notification.png');
    }

    $('.dropdown-notification > .list-notification > .item').on('click', function() {
        $('.dropdown-notification > .list-notification > .item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open');
    });

    $(document).on('keyup', function(evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.dropdown-notification').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ($(evt.target).closest(".dropdown-notification > .caption-notification").length === 0) {
            $('.dropdown-notification').removeClass('open');
        }
    });

});


// for invalid password
$(document).ready(function() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var capital_alphabets = /([A-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,.])/;
    $('.error2').hide();
    $('.error3').hide();
    $('.error4').hide();
    $('.unlock-icon1').hide();
    $('.lock2-icon1').hide();

    $('#password-field1').keyup(function() {
        var password = $('#password-field1').val();
        if (password == '' || password.length < 8) {
            $('.error2').show();
            $('#password-field1').css("border", "1.5px solid #E0B719");
            $('#password-field1').css("background", "#FFF9E3");
            return false;
        }
        if (password.match(number) && password.match(alphabets) && password.match(capital_alphabets) && password.match(special_characters)) {
            $('.error2').hide();
            $('#password-field1').parent().children('.lock-icon1').show();
            $('#password-field1').parent().children('.lock2-icon1').hide();
            $('#password-field1').css("border", "1.5px solid #40A7E3");
            $('#password-field1').css("background", "white");
            return false;
        }
    });

    $('#password-field2').keyup(function() {
        var password = $('#password-field2').val();
        if (password == '' || password.length < 8) {
            $('.error3').show();
            $('#password-field2').css("border", "1.5px solid #E0B719");
            $('#password-field2').css("background", "#FFF9E3");
            return false;
        }
        if (password.match(number) && password.match(alphabets) && password.match(capital_alphabets) && password.match(special_characters)) {
            $('.error3').hide();
            $('#password-field2').parent().children('.lock-icon1').show();
            $('#password-field2').parent().children('.lock2-icon1').hide();
            $('#password-field2').css("border", "1.5px solid #40A7E3");
            $('#password-field2').css("background", "white");
            return false;
        }
    });

    $('#password-field3').keyup(function() {
        var password = $('#password-field3').val();
        var password1 = $('#password-field2').val();
        if (password != password1) {
            $('.error4').show();
            $('#password-field3').css("border", "1.5px solid #E0B719");
            $('#password-field3').css("background", "#FFF9E3");
        } else {
            $('.error4').hide();
            $('#password-field3').parent().children('.lock-icon1').show();
            $('#password-field3').parent().children('.lock2-icon1').hide();
            $('#password-field3').css("border", "1.5px solid #40A7E3");
            $('#password-field3').css("background", "white");
        }
        return false;
    });

    $('#changePassword').click(function() {
        var password1 = $('#password-field1');
        var password2 = $('#password-field2');
        var password3 = $('#password-field3');
        if (password1.val() == '') {
            $('.error2').show();
            password1.parent().children('.lock-icon1').hide();
            password1.parent().children('.unlock-icon1').hide();
            password1.parent().children('.lock2-icon1').show();
            password1.css("border", "1.5px solid #E0B719");
            password1.css("background", "#FFF9E3");
            return false;
        }
        if (password2.val() == '') {
            $('.error3').show();
            password2.parent().children('.lock-icon1').hide();
            password2.parent().children('.unlock-icon1').hide();
            password2.parent().children('.lock2-icon1').show();
            password2.css("border", "1.5px solid #E0B719");
            password2.css("background", "#FFF9E3");
            return false;
        }
        if (password3.val() == '') {
            $('.error4').show();
            password3.parent().children('.lock-icon1').hide();
            password3.parent().children('.unlock-icon1').hide();
            password3.parent().children('.lock2-icon1').show();
            password3.css("border", "1.5px solid #E0B719");
            password3.css("background", "#FFF9E3");
            return false;
        }
    });

    $('.lock-icon1, .unlock-icon1, .lock2-icon1').on('click', function() {
        $(this).toggleClass("abc");
        var input = $(this).parent().children('input');
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $(input).parent().children('.unlock-icon1').show();
            $(input).parent().children('.lock-icon1').hide();
            $(input).parent().children('.lock2-icon1').hide();
        } else {
            input.attr("type", "password");
            $(input).parent().children('.unlock-icon1').hide();
            $(input).parent().children('.lock-icon1').show();
        }
    });
});



$(document).ready(function() {

    $('div.catagories > div.catagory-item').on('click', function() {
        $('div.catagory-item.selected-catagory').removeClass('selected-catagory');
        $(this).addClass('selected-catagory');
    });

});

///////////////////////////////////
//////// Scroll with Arrow
///////////////////////////////////

// duration of scroll animation
var scrollDuration = 300;
// arrows
var leftArrow = document.getElementsByClassName('left-scroll-arrow');
var rightArrow = document.getElementsByClassName('right-scroll-arrow');
// get some relevant size for the paddle triggering point
var paddleMargin = 30;

var menuWrapperSize = $('.catagory-wrapper').outerWidth();

var menuSize = $('.catagory-text').outerWidth(true);
var catagoryItems = document.getElementsByClassName('catagory-item');

for (var i = 0; i < $('.catagory-item').length; i++) {
    menuSize += $(catagoryItems[i]).outerWidth(true);
}

// get how much have we scrolled to the left
var getMenuPosition = function() {
    return $('.catagories').scrollLeft();
};

if (menuSize <= menuWrapperSize) {
    $(leftArrow).css('display', 'none');
    $(rightArrow).css('display', 'none');
}

// the wrapper is responsive
$(window).on('resize', function() {
    menuWrapperSize = $('.catagory-wrapper').outerWidth();
    if (menuSize <= menuWrapperSize) {
        $(leftArrow).css('display', 'none');
        $(rightArrow).css('display', 'none');
    } else {
        $(leftArrow).css('display', 'none');
        $(rightArrow).css('display', 'flex');
    }
});


// finally, what happens when we are actually scrolling the menu
$('.catagories').on('scroll', function() {

    // get how much of menu is invisible
    var menuInvisibleSize = menuSize - menuWrapperSize;

    // get how much have we scrolled so far
    var menuPosition = getMenuPosition();

    // show & hide the paddles 
    // depending on scroll position
    if (menuPosition <= 0) {
        $(leftArrow).css('display', 'none');
        $(rightArrow).css('display', 'flex');
    } else if (menuPosition < menuInvisibleSize) {
        // show both paddles in the middle
        $(leftArrow).css('display', 'flex');
        $(rightArrow).css('display', 'flex');
    } else if (menuPosition >= menuInvisibleSize) {
        $(leftArrow).css('display', 'flex');
        $(rightArrow).css('display', 'none');
    }

});

// scroll to left
$(rightArrow).on('click', function() {
    $('.catagories').animate({ scrollLeft: getMenuPosition() + 200 }, scrollDuration);
});

// scroll to right
$(leftArrow).on('click', function() {
    $('.catagories').animate({ scrollLeft: getMenuPosition() - 200 }, scrollDuration);
});


// WTTC Catagories

$(document).ready(function() {

    $('div.wttc-items > div.item').on('click', function() {
        $('div.wttc-training > div.wttc-card').hide();
        $('div.wttc-items > div.item.selected').removeClass('selected');
        $(this).addClass('selected');
        $(this).children().fadeOut();
        var wCatagoryText = $(this).clone().children().remove().end().text();
        if (wCatagoryText == "All") {
            $('span.wttc-quoted-text').text("\"All Catagories\"");
            $('div.wttc-training > div.wttc-card').show();
        } else {
            $('span.wttc-quoted-text').text("\"" + wCatagoryText + " Catagory\"");
            if (wCatagoryText == 'New') {
                $('.wttc-inner-card-new-btn').parent().parent().parent().parent().show();
            } else if (wCatagoryText == 'Certified') {
                $('.wttc-inner-card-certified-btn').parent().parent().parent().parent().show();
            } else if (wCatagoryText == 'Expired') {
                $('.wttc-inner-card-expired-btn').parent().parent().parent().parent().show();
            } else if (wCatagoryText == 'Nearly expired') {
                $('.wttc-inner-card-nearly-expired-btn').parent().parent().parent().parent().show();
            }
        }
    });

    var totalNewItems = $('.wttc-inner-card-new-btn').length;

    if (totalNewItems > 0) {
        $('div.wttc-items > div.item.new-item > div.total-new-items').css('display', 'flex');
        $('div.wttc-items > div.item.new-item > div.total-new-items').text(totalNewItems);
    } else {
        $('div.wttc-items > div.item.new-item > div.total-new-items').css('display', 'none');
    }

    var totalCertifiedItems = $('.wttc-inner-card-certified-btn').length;

    if (totalCertifiedItems > 0) {
        $('div.wttc-items > div.item.certified-item > div.total-certified-items').css('display', 'flex');
        $('div.wttc-items > div.item.certified-item > div.total-certified-items').text(totalCertifiedItems);
    } else {
        $('div.wttc-items > div.item.certified-item > div.total-certified-items').css('display', 'none');
    }

    var totalExpiredItems = $('.wttc-inner-card-expired-btn').length;

    if (totalExpiredItems > 0) {
        $('div.wttc-items > div.item.expired-item > div.total-expired-items').css('display', 'flex');
        $('div.wttc-items > div.item.expired-item > div.total-expired-items').text(totalExpiredItems);
    } else {
        $('div.wttc-items > div.item.expired-item > div.total-expired-items').css('display', 'none');
    }

    var totalNearlyExpiredItems = $('.wttc-inner-card-nearly-expired-btn').length;

    if (totalNearlyExpiredItems > 0) {
        $('div.wttc-items > div.item.nearly-expired-item > div.total-nearly-expired-items').css('display', 'flex');
        $('div.wttc-items > div.item.nearly-expired-item > div.total-nearly-expired-items').text(totalNearlyExpiredItems);
    } else {
        $('div.wttc-items > div.item.nearly-expired-item > div.total-nearly-expired-items').css('display', 'none');
    }

});



/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////    Date   //////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////




const date = new Date();
// Results below assume UTC timezone - your results may vary

function formattedDate(date) {
    // Specify date and time format using "style" options (i.e. full, long, medium, short)
    var formattedDate = new Intl.DateTimeFormat('en-BE', { dateStyle: 'long', timeStyle: 'short' }).format(date);
    // Expected output "10 May 2021 at 18:23"

    formattedDate = formattedDate.replace('at', '-');
    // Expected output "10 May 2021 - 18:23"

    formattedDate = formattedDate.substr(0, formattedDate.length - 13) + ',' + formattedDate.substr(formattedDate.length - 13, formattedDate.length);
    // Expected output "10 May, 2021 - 18:23"

    return formattedDate;
}

$(document).ready(function() {
    $('div.wtdn-notes > div.wtdn-note > div.navbar > div > img.note-edit').on('click', function() {
        var noteMessage = $(this).parent().parent().parent().children('.wtdn-note-msg').text();
        $(this).parent().parent().parent().parent().parent().children('.w-100').children('.wtdn-textarea').text(noteMessage);
    });
});




/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////    PDF Viewer   ///////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


// Add ?page=4 to the end of the URL
const urlToPDF = "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Summary.pdf";
const clientId = "e800d12fc12c4d60960778b2bc4370af";

const viewerOptions = {
    embedMode: "FULL_WINDOW",
    defaultViewMode: "FIT_PAGE",
    showDownloadPDF: false,
    showPrintPDF: false,
    showLeftHandPanel: false,
    showAnnotationTools: false
};

function fetchPDF(urlToPDF) {
    return new Promise((resolve) => {
        fetch(urlToPDF)
            .then((resolve) => resolve.blob())
            .then((blob) => {
                resolve(blob.arrayBuffer());
            });
    });
}

function goToPage(previewFilePromise, pageNum) {
    previewFilePromise.then((adobeViewer) => {
        adobeViewer.getAPIs().then((apis) => {
            // Go to the page. Page numbers are 1 based.
            apis.gotoLocation(parseInt(pageNum));
        });
    });
}

function processEvent(event, previewFilePromise) {
    if (event.type == "PDF_VIEWER_OPEN") {
        // Get the page parameter from the URL
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const pageNum = urlParams.get("page");
        // Go to the page number specified in the URL
        goToPage(previewFilePromise, pageNum);
    }
}

document.addEventListener("adobe_dc_view_sdk.ready", function() {

    // Create embedded view
    var adobeDCView = new AdobeDC.View({
        clientId: clientId,
        divId: "embeddedView"
    });
    // Show the file
    var previewFilePromise = adobeDCView.previewFile({
            content: { promise: fetchPDF(urlToPDF) },
            metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
        },
        viewerOptions
    );
    // register the event callback
    adobeDCView.registerCallback(
        AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        function(event) {
            processEvent(event, previewFilePromise);
        }
    );



    // Create embedded view
    var adobeDCView2 = new AdobeDC.View({
        clientId: clientId,
        divId: "embeddedView2"
    });
    // Show the file
    var previewFilePromise2 = adobeDCView2.previewFile({
            content: { promise: fetchPDF(urlToPDF) },
            metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
        },
        viewerOptions
    );
    // register the event callback
    adobeDCView2.registerCallback(
        AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        function(event) {
            processEvent(event, previewFilePromise2);
        }
    );
});

// Helper Function: Add arrayBuffer if necessary i.e. Safari
(function() {
    if (Blob.arrayBuffer != "function") {
        Blob.prototype.arrayBuffer = myArrayBuffer;
    }

    function myArrayBuffer() {
        return new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsArrayBuffer(this);
        });
    }
})();