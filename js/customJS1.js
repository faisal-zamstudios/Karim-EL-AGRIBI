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
    });
});
/*checkbox*/
$(document).ready(function() {
    $('.checkbox').click(function() {
        if ($(this).prop('checked')) {
            $("#sub-cont-export").show(); // This should show the associated tinypic with the same number as the cbox that was clicked.
        } else {
            $("#sub-cont-export").hide(); // This should hide the associated tinypic with the same number as the cbox that was clicked.
        }
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
// image upload
function readURL5(input) {
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
    readURL5(this);
});






// Modal Upload pdf file

function readURL6(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#uploadPDFText1').text(filename);
        $('#uploadPDFSize1').text(filesize + "Kb");
        $('.add-pdf-file').css('display', 'flex');
    }
}

$("#uploadPDF1").change(function() {
    readURL6(this);
});


$("#cross-file").click(function() {
    $("#uploadPDF1").val("");
    $(".add-pdf-file").hide(200);
});


function readURL7(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#training-uploadPDFText1').text(filename);
        $('#training-uploadPDFSize1').text(filesize + "Kb");
        $('.training-add-pdf-file').css('display', 'flex');
    }
}

$("#training-uploadPDF1").change(function() {
    readURL7(this);
});


$("#tarining-cross-file").click(function() {
    $("#training-uploadPDF1").val("");
    $(".training-add-pdf-file").hide(200);
});