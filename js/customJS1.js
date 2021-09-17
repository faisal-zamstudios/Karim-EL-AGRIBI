$(document).ready(function() {

    $(".sub-cont-dashboard").show();
    $(".sub-cont-dashboard-link").addClass('blue-color');
    $("#sub-cont-user-documents").addClass('blue-color');
    $(".sub-cont-profile").hide();
    $(".sub-cont-dashboard-user-trainings").hide();
    $(".sub-cont-head-dashboard").show();
    $(".sub-cont-manage-clients").hide();

    $(".sub-cont-dashboard-link").click(function() {
        $(".sub-cont-profile").hide();
        $(".blue-color").removeClass('blue-color');
        $(".sub-cont-dashboard-link").addClass('blue-color');
        $("#sub-cont-personal-information-link").addClass('blue-color');
        $("#sub-cont-user-documents").addClass('blue-color');
        $(".sub-cont-dashboard").show(200);
        $(".sub-cont-dashboard-user-trainings").hide();
        $(".sub-cont-head-dashboard").show();
        $(".sub-cont-manage-clients").hide();
    });

    $(".sub-cont-worker-profile-link").click(function() {
        $(".blue-color").removeClass('blue-color');
        $("#sub-cont-personal-information-link").addClass('blue-color');
        $(".sub-cont-profile").show(200);
        $(".sub-cont-dashboard").hide();
        $(".sub-cont-head-dashboard").hide();
        $(".sub-cont-manage-clients").hide();

    });
    $("#sub-cont-dashboard-training").click(function() {
        $(".sub-cont-dashboard-user-trainings").show(200);
        $(".sub-cont-dashboard").hide();
        $(".sub-cont-profile").hide();
        $(".blue-color").removeClass('blue-color');
        $("#sub-cont-dashboard-training").addClass('blue-color');
        $(".sub-cont-manage-clients").hide();
    });
    $("#sub-cont-user-documents").click(function() {
        $(".sub-cont-dashboard").show(200);
        $(".sub-cont-dashboard-user-trainings").hide();
        $(".blue-color").removeClass('blue-color');
        $("#sub-cont-user-documents").addClass('blue-color');
        $(".sub-cont-manage-clients").hide();
        $(".sub-cont-dashboard-link").addClass('blue-color');
    });
    /*Users */
    $(".sub-cont-user-link").click(function() {
        $(".sub-cont-manage-clients").show(200);
        $(".sub-cont-head-dashboard").hide();
        $(".blue-color").removeClass('blue-color');
        $(".sub-cont-user-link").addClass('blue-color');
        $("#sub-cont-export").hide();
        $(".sub-cont-profile").hide();

    });
});


/*Profile page*/
$(document).ready(function() {
    $("#sub-cont-personal-information").show();
    $(".sub-cont-profile-right-area").show();
    $("#sub-cont-personal-information-link").addClass('blue-color');
    $("#sub-cont-required-document").hide();
    $("#sub-cont-project-document").hide();

    // Company information
    $("#sub-cont-personal-information-link").click(function() {
        $("#sub-cont-required-document").hide();
        $("#sub-cont-project-document").hide();
        $(".sub-cont-profile-right-area").show();
        $('.header-style').text('My Profile');
        $(".sub-cont-profile-left-area").removeClass('w-100');
        $(".set-color .blue-color").removeClass('blue-color');
        $("#sub-cont-personal-information-link").addClass('blue-color');
        $("#sub-cont-personal-information").show(200);
        $(".sub-cont-head-dashboard").hide();
    });
    // legal document
    $("#sub-cont-required-document-link").click(function() {
        $("#sub-cont-personal-information").hide();
        $(".sub-cont-profile-right-area").hide();
        $("#sub-cont-project-document").hide();
        $("#sub-cont-personal-information-link").hide();
        $("#vector").hide();
        $('.header-style').text('User Info');
        $(".sub-cont-profile-left-area").addClass('w-100');
        $(".set-color .blue-color").removeClass('blue-color');
        $("#sub-cont-required-document-link").addClass('blue-color');
        $("#sub-cont-required-document").show(200);
        $(".sub-cont-head-dashboard").hide();
    });
    // training certificate
    $("#sub-cont-project-document-link").click(function() {
        $("#sub-cont-personal-information").hide();
        $("#sub-cont-required-document").hide();
        $(".sub-cont-profile-right-area").hide();
        $(".set-color .blue-color").removeClass('blue-color');
        $("#sub-cont-project-document-link").addClass('blue-color');
        $('.header-style').text('User Info');
        $("#sub-cont-project-document").show();
        $(".sub-cont-profile-left-area").addClass('w-100');
        $(".sub-cont-head-dashboard").hide();
    });
});
// image upload in profile section
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

$("#sub-cont-delete-signature").click(function() {
    $('#imagePreview4').css('background-image', 'none');
    $('#imagePreview4').css('border', '1px solid #ccc');
});

$("#imageUpload4").change(function() {
    readURL4(this);
});






// Modal Upload pdf file

function readURL7(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#uploadPDFText1').text(filename);
        $('#uploadPDFSize1').text(filesize + "Kb");
        $('.add-pdf-file').css('display', 'flex');
    }
}

$("#uploadPDF1").change(function() {
    readURL7(this);
});


$("#cross-file").click(function() {
    $("#uploadPDF1").val("");
    $(".add-pdf-file").hide(200);
});


function readURL8(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#training-uploadPDFText1').text(filename);
        $('#training-uploadPDFSize1').text(filesize + "Kb");
        $('.training-add-pdf-file').css('display', 'flex');
    }
}

$("#training-uploadPDF1").change(function() {
    readURL8(this);
});


$("#tarining-cross-file").click(function() {
    $("#training-uploadPDF1").val("");
    $(".training-add-pdf-file").hide(200);
});
///End PDF



///use in crop image Initializing croppie in my image_demo div
var image_crop = $('#image_demo').croppie({
    viewport: {
        width: 176,
        height: 175,
        type: 'square'
    },
    boundary: {
        height: 175,
        width: 176
    },
    enableResize: true,
    enforceBoundary: true
});
/// catching up the imageUpload100 change event and binding the image into my croppie. Then show the modal.
$('#imageUpload100').on('change', function() {
    var reader = new FileReader();
    reader.onload = function(event) {
        image_crop.croppie('bind', {
            url: event.target.result,
        });
    }
    reader.readAsDataURL(this.files[0]);
    $('.cr-slider').attr('aria-valuenow', '1.4');
    $('#uploadimageModal').modal('show');
});
/// Get button click event and get the current crop image
$('.crop_image').click(function(event) {
    var formData = new FormData();
    image_crop.croppie('result', {
        type: 'base64',
        format: 'png'
    }).then(function(resp) {
        $('#imagePreview100').css('background-image', 'url(' + resp + ')');
        $('#uploadimageModal').modal('hide');
    });
});
$("#delete-photo100").click(function() {
    $('#imagePreview100').css('background-image', 'none');
    $('#imagePreview100').css('border', '1px solid #ccc');
});

$('.cr-slider').attr('min', 0.4);
$('.cr-slider').attr('max', 4);

$("#imageUpload100").change(function() {
    readAsDataURL(this);
});

/* Upload and delete picture in edit user */
function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview101').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview101').css('border', 'none');
            $('#imagePreview101').hide();
            $('#imagePreview101').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#delete-photo101").click(function() {
    $('#imagePreview101').css('background-image', 'none');
    $('#imagePreview101').css('border', '1px solid #ccc');
});

$("#imageUpload101").change(function() {
    readURL1(this);
});


/* radio click Color Change */
$(document).ready(function() {
    $(document).on('click', 'input[name="optradio"]', function() {
        $('input[name="optradio"]').parent().children('label').css('color', '#B4B4B4');
        $(this).parent().children('label').css('color', '#000');
    });
});




/* Profile */

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

/* password validation */
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

/* $("#minus-btn").click(function() {
    var time_per_question = $("#input-btn").val();
    time_per_question.replace('s', '');
    time_per_question = time_per_question.parseInt();
    time_per_question--;
    $("#input-btn").val(time_per_question);
    $(".training-add-pdf-file").hide(200);
});
 */

/* Add user Validation */
$(document).ready(function() {
    $('.add-user').on('click', function() {
        if ($(this).text() == "Create And Send Email") {
            var inputText = $('.input-text');
            for (var i = 0; i < inputText.length; i++) {
                $(inputText).css("border", "1px solid #DCDCDC");
                $(inputText).css("background", "#FFFFFF");
                if ($(inputText[i]).val() == "") {
                    var warningMsg = $(inputText[i]).parent().parent();
                    if (warningMsg.children('.sub-cont-add-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.children('.sub-cont-add-client-warning-msg');
                        var labelText = $(inputText[i]).parent().children('label').text();
                        warningMsg.children('p').text(labelText + " cannot be empty.");
                        $('.sub-cont-add-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                    if (warningMsg.parent().parent().children('.sub-cont-add-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.parent().parent().children('.sub-cont-add-client-warning-msg');
                        warningMsg.children('p').text("Phone number cannot be empty.");
                        $('.sub-cont-add-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                }
            }
            $('.sub-cont-add-client-warning-msg').css('display', 'none');
        } else {
            var inputText = $('.input-text');
            for (var i = 0; i < inputText.length; i++) {
                $(inputText).css("border", "1px solid #DCDCDC");
                $(inputText).css("background", "#FFFFFF");
                if ($(inputText[i]).val() == "") {
                    var warningMsg = $(inputText[i]).parent().parent();
                    if (warningMsg.children('.sub-cont-update-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.children('.sub-cont-update-client-warning-msg');
                        var labelText = $(inputText[i]).parent().children('label').text();
                        warningMsg.children('p').text(labelText + " cannot be empty.");
                        $('.sub-cont-update-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                    if (warningMsg.parent().parent().children('.sub-cont-update-client-warning-msg').length > 0) {
                        $(inputText[i]).css("border", "1.5px solid #E0B719");
                        $(inputText[i]).css("background", "#FFF9E3");
                        $(inputText[i]).focus();
                        warningMsg = warningMsg.parent().parent().children('.sub-cont-update-client-warning-msg');
                        warningMsg.children('p').text("Phone number cannot be empty.");
                        $('.sub-cont-update-client-warning-msg').css('display', 'none');
                        warningMsg.css('display', 'flex');
                        return false;
                    }
                }
            }
            $('.sub-cont-update-client-warning-msg').css('display', 'none');
        }
    });
});







function _(el) {
    return document.getElementById(el);
}

function uploadFile() {
    var file = _("file1").files[0];
    // alert(file.name+" | "+file.size+" | "+file.type);
    var formdata = new FormData();
    formdata.append("file1", file);
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "file_upload_parser.php"); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
    //use file_upload_parser.php from above url
    ajax.send(formdata);
}

function progressHandler(event) {
    _("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
    var percent = (event.loaded / event.total) * 100;
    _("progressBar").value = Math.round(percent);
    _("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
}

function completeHandler(event) {
    _("status").innerHTML = event.target.responseText;
    _("progressBar").value = 0; //wil clear progress bar after successful upload
}

function errorHandler(event) {
    _("status").innerHTML = "Upload Failed";
}

function abortHandler(event) {
    _("status").innerHTML = "Upload Aborted";
}