


/*
  ******************************************************************************************
  ************************************  Login Style  ***************************************
  ******************************************************************************************
*/



// for invalid email
$(document).ready(function () {
    $('.error').hide();
    $('input[type=password]').focus(function () {
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
    $('#submit').click(function () {
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
$(document).ready(function () {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var capital_alphabets = /([A-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    $('.error2').hide();
    $('.unlock-icon').hide();
    $('.lock2-icon').hide();
    $('#password').keyup(function () {
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


    $('#submit').click(function () {
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

    $("body").on('click', '.lock-icon, .unlock-icon, .lock2-icon', function () {
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
        reader.onload = function (e) {
            $('#imagePreview').attr('src', e.target.result);
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-logo").click(function () {
    $('#imagePreview').fadeOut(650);
});

$("#imageUpload").change(function () {
    readURL(this);
});

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview1').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview1').css('border', 'none');
            $('#imagePreview1').hide();
            $('#imagePreview1').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-photo").click(function () {
    $('#imagePreview1').css('background-image', 'none');
    $('#imagePreview1').css('border', '1px solid #ccc');
});

$("#imageUpload1").change(function () {
    readURL1(this);
});


function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview2').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview2').css('border', 'none');
            $('#imagePreview2').hide();
            $('#imagePreview2').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-img").click(function () {
    $('#imagePreview2').css('background-image', 'none');
    $('#imagePreview2').css('border', '1px solid #ccc');
});

$("#imageUpload2").change(function () {
    readURL2(this);
});



$(document).ready(function () {

    $("#dismiss-success").click(function () {
        $("#successful-msg").hide(300);
    });

    $(".toggle-password").click(function () {
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
    $("#selectall").change(function () {  //"select all" change 
        $(".select-checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
    });

    //".checkbox" change 
    $('.select-checkbox').change(function () {
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


$(document).ready(function () {

    $(".manage-clients").show();
    $(".super-admin-clients-link").addClass('blue-color');
    $(".super-admin-profile").hide();

    $(".super-admin-clients-link").click(function () {
        $(".super-admin-profile").hide();
        $(".super-admin-clients-link").addClass('blue-color');
        $(".manage-clients").show(200);
    });

    $(".super-admin-profile-link").click(function () {
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



$(document).ready(function () {

    $(".worker-dashboard").show();
    $(".worker-dashboard-link").addClass('blue-color');
    $(".worker-profile").hide();
    
    $(".worker-dashboard-link").click(function () {
        $(".worker-profile").hide();
        $(".worker-dashboard-link").addClass('blue-color');
        $(".worker-dashboard").show(200);
    });

    $(".worker-profile-link").click(function () {
        $(".worker-dashboard").hide();
        $(".blue-color").removeClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#worker-personal-information-link").addClass('blue-color');
        $(".worker-profile").show(200);
    });

});

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview3').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview3').css('border', 'none');
            $('#imagePreview3').hide();
            $('#imagePreview3').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-img2").click(function () {
    $('#imagePreview3').css('background-image', 'none');
    $('#imagePreview3').css('border', '1px solid #ccc');
});

$("#imageUpload3").change(function () {
    readURL3(this);
});

function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview4').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview4').css('border', 'none');
            $('#imagePreview4').hide();
            $('#imagePreview4').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#delete-worker-signature").click(function () {
    $('#imagePreview4').css('background-image', 'none');
    $('#imagePreview4').css('border', '1px solid #ccc');
});

$("#imageUpload4").change(function () {
    readURL4(this);
});


$(document).ready(function () {
    $("#worker-personal-information").show();
    $("#worker-personal-information-link").addClass('blue-color');
    $("#legal-documents").hide();
    $("#training-certificates").hide();

    $("#worker-personal-information-link").click(function () {
      $("#legal-documents").hide();
      $("#training-certificates").hide();
      $(".set-color .blue-color").removeClass('blue-color');
      $("#worker-personal-information-link").addClass('blue-color');
      $("#worker-personal-information").show(200);
    });

    $("#legal-documents-link").click(function () {
      $("#worker-personal-information").hide();
      $("#training-certificates").hide();
      $(".set-color .blue-color").removeClass('blue-color');
      $("#legal-documents-link").addClass('blue-color');
      $("#legal-documents").show(200);
    });

    $("#training-certificates-link").click(function () {
      $("#worker-personal-information").hide();
      $("#legal-documents").hide();
      $(".set-color .blue-color").removeClass('blue-color');
      $("#training-certificates-link").addClass('blue-color');
      $("#training-certificates").show(200);
    });

  });