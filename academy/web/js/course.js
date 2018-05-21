

$(document).ready(function(){
    $('.openPopup').on('click',function(){

        var dataURL = $(this).attr('data-href');
        //alert(dataURL);
        $('.modal-body').load(dataURL,function(){
            $('#courseModal').modal({show:true});
        });
    });

});// document
