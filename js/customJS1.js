
$(document).ready(function () {

    $(".worker-dashboard").show();
    $(".sub-cont-dashboard-link").addClass('blue-color');
    $(".sub-cont-worker-profile").hide();
    $('.my-training').hide();

    $(".worker-dashboard-link").click(function () {
        $(".sub-cont-worker-profile").hide();
        $('.my-training').hide();
        $(".blue-color").removeClass('blue-color');
        $(".worker-dashboard-link").addClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#sub-cont-worker-personal-information-link").addClass('blue-color');
        $(".worker-dashboard").show(200);
    });

    $(".my-training-link").click(function () {
        $(".sub-cont-worker-profile").hide();
        $(".worker-dashboard").hide();
        $(".blue-color").removeClass('blue-color');
        $(".my-training-link").addClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#sub-cont-worker-personal-information-link").addClass('blue-color');
        $(".my-training").show(200);
    });

    $(".sub-cont-worker-profile-link").click(function () {
        $(".worker-dashboard").hide();
        $('.my-training').hide();
        $(".blue-color").removeClass('blue-color');
        $(".super-admin-clients-link").addClass('blue-color');
        $("#sub-cont-worker-personal-information-link").addClass('blue-color');
        $(".sub-cont-worker-profile").show(200);
    });

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

$("#sub-cont-delete-signature").click(function () {
    $('#imagePreview4').css('background-image', 'none');
    $('#imagePreview4').css('border', '1px solid #ccc');
});

$("#imageUpload4").change(function () {
    readURL4(this);
});
