$(function() {

  function UploadPreview() {
      var oFReader = new FileReader();

      oFReader.readAsDataURL(document.getElementById("upload").files[0]);

      oFReader.onload = function (oFREvent) {
          document.getElementById("uploadPreview").src = oFREvent.target.result;
          //document.getElementById("uploadPreview1").src = oFREvent.target.result;
          $.ajax({

          });
      };


  };



//    $(".timeline-show").click(function() {
//   setTimeout(function(){
//     $(".widget-timeline").capletTimeline();
//   }, 400);
// });
// Initialize box isotope
      // var $container= $('.box-feed');
      // var $filter= $('.box-filter');

  // $(".portfolio-show").click(function() {
  //     if(!$container.hasClass("isotope")){
  //           setTimeout(function(){
  //             $container.isotope({
  //                 filter : '*',
  //                 layoutMode : 'fitRows',
  //                 animationOptions : {  duration : 750, easing : 'linear' }
  //             });
  //           }, 400);
  //       }
  // });
      // $filter.find('a').click(function() {
      // var selector = $(this).attr('data-filter');
      // $filter.find('a').removeClass('active');
      // $(this).addClass('active');
      // $container.isotope({
      //   filter: selector,
      //   animationOptions   : { animationDuration  : 750, easing: 'linear',   queue: false  }
      // });
      // return false;
      // });
});
