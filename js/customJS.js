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
        $(".select-checkbox").prop('checked', $(this).prop("checked")); //change all ".select-checkbox" checked status
    });

    //".checkbox" change 
    $('.select-checkbox').change(function() {
        //uncheck "select all", if one of the listed checkbox item is unchecked
        if (false == $(this).prop("checked")) { //if this item is unchecked
            $("#selectall").prop('checked', false); //change "select all" checked status to false
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

    $(".worker-dashboard-link").click(function() {
        $(".worker-profile").hide();
        $('.my-training').hide();
        $(".blue-color").removeClass('blue-color');
        $(".worker-dashboard-link").addClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $(".worker-dashboard").show(200);
    });

    $(".my-training-link").click(function() {
        $(".worker-profile").hide();
        $(".worker-dashboard").hide();
        $(".blue-color").removeClass('blue-color');
        $(".my-training-link").addClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $(".my-training").show(200);
    });

    $(".worker-profile-link").click(function() {
        $(".worker-dashboard").hide();
        $('.my-training').hide();
        $(".blue-color").removeClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $(".worker-profile").show(200);
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
    $("#worker-personal-information").show();
    $("#worker-personal-information-link").addClass('blue-color');
    $("#worker-required-document").hide();

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