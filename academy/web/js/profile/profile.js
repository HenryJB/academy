$(document).ready(function () {

    $('#uploadProjectBtn').on('click', function () {
        var dataURL = $(this).attr('data-href');

        $('.modal-body').load(dataURL, function () {
        });
    });

    $('#submitProject').click(function (e) {
        e.preventDefault();
        alert('note working');
        //var dataURL = $(this).attr('data-href');

        $('.modal-body').load(dataURL, function () {});
    });
});

