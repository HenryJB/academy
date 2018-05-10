
  // // scroll image
    $(function () {
      // var $image = $('#skew-filler-box').children('img');
      // function animate_img() {
      //     if ($image.css('top') == '0px') {
      //         $image.animate({top: -($image.height()-468)+"px"}, $image.height()* 125, function () {
      //             animate_img();
      //         });
      //     } else {
      //         $image.animate({top: '0px'}, $image.height()* 125, function () {
      //             animate_img();
      //         });
      //     }
      // }
      // animate_img();


      $(".expand").on( "click", function() {
        // $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if($expand.text() == "+") {
          $expand.text("-");
        } else {
          $expand.text("+");
        }
      });
  });
