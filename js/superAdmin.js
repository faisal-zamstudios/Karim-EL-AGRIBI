
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
    $(".manage-clients-link").addClass('color-blue');
    $(".my-profile").hide();

    $(".manage-clients-link").click(function () {
        $(".my-profile").hide();
        $(".manage-clients-link").addClass('color-blue');
        $(".manage-clients").show(200);
    });

    $(".my-profile-link").click(function () {
        $(".manage-clients").hide();
        $(".color-blue").removeClass('color-blue');
        $(".my-profile").show(200);
    });

});


