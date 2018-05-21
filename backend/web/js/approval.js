$(document).ready(function () {
    var val1 = $('.update1').text();
    var id = $('#textid').attr('value');
    $('.update1').on('click',function(e){
        $.ajax({
            data: {id : id,val1 : val1 },
            url: 'approval',
            method: 'POST',
            success: function(data){
                $('.update1').text(data);
            },
            error: {}
        });
    });
});

function UploadPreview() {
    var oFReader = new FileReader();
    var id = $('#userid').val();
    alert(id);
    oFReader.readAsDataURL(document.getElementById("upload").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        //document.getElementById("uploadPreview1").src = oFREvent.target.result;
        $.ajax({
            data: {id : id,img : oFREvent.target.result },
            url: 'picture',
            method: 'POST',
            success: function(data){
                alert(data);
            },
            error: {}
        });


    };
}

function UploadPreview1() {
    var oFReader = new FileReader();
      var id = $('#userid').val();

    oFReader.readAsDataURL(document.getElementById("upload").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        //document.getElementById("uploadPreview1").src = oFREvent.target.result;
        $.ajax({
            data: {id : id,img : oFREvent.target.result },
            url: 'picture',
            method: 'POST',
            success: function(data){
                alert(data);
            },
            error: {}
        });


    };


}
