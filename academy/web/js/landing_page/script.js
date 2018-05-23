(function () {

  $(document).ready(function () {
    $('img#image_one').attr('src', '/img/landing_page/film2.png');
     $(".ml1").show();
      $(".course_description_one").show();
    });


  $("#first__mobile")
    .mouseover(function () {
      $("#first__mobile")
        .removeClass('image_easeout animated slideIn')
        .addClass("image_easein animated slideIn");
      $("#image_mobile_one").attr("src", $("#image_mobile_one").data("hover"));
      $(".ml1").toggle();
      $(".course_decription_one").toggle();
      anime
        .timeline({
          loop: true
        })
        .add({
          targets: ".ml1",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#first__mobile")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_mobile_one").attr("src", $("#image_mobile_one").data("src"));
      $(".ml1").hide();
      $(".course_description_one").hide();
    });

  $("#second__mobile")
    .mouseover(function () {
      $("#second__mobile")
        .removeClass('image_easeout')
        .addClass("image_easein");
      $("#image_mobile_two").attr("src", $("#image_mobile_two").data("hover"));
      $(".ml2").toggle();
      $(".course_description_two").toggle();
      anime
        .timeline({
          loop: true
        })        
        .add({
          targets: ".ml2",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#second__mobile")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_mobile_two").attr("src", $("#image_mobile_two").data("src"));
      $(".ml2").hide();
      $(".course_description_two").hide();
    });

  $("#third__mobile")
    .mouseover(function () {
      $("#third__mobile")
        .removeClass('image_easeout')
        .addClass("image_easein");
      $("#image_mobile_three").attr("src", $("#image_mobile_three").data("hover"));
      $(".ml3").toggle();
      $(".course_description_three").toggle();
      anime
        .timeline({
          loop: true
        })       
        .add({
          targets: ".ml3",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#third__mobile")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_mobile_three").attr("src", $("#image_mobile_three").data("src"));
      $(".ml3").hide();
      $(".course_description_three").hide();
    });

  $("#fourth__mobile")
    .mouseover(function () {
      $("#fourth__mobile")
        .removeClass('image_easeout')
        .addClass("image_easein");
      $("#image_mobile_four").attr("src", $("#image_mobile_four").data("hover"));
      $(".ml4").toggle();
      $(".course_description_four").toggle();
      anime
        .timeline({
          loop: true
        })       
        .add({
          targets: ".ml4",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#fourth__mobile")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_mobile_four").attr("src", $("#image_mobile_four").data("src"));
      $(".ml4").hide();
      $(".course_description_four").hide();
    });


  $("#first")
    .mouseover(function () {
      $("#first")
        .removeClass('image_easeout animated slideIn')
        .addClass("image_easein animated slideIn");
      $("#image_one").attr("src", $("#image_one").data("hover"));
      $(".ml1").toggle();
      $(".course_description_one").toggle();
      anime
        .timeline({
          loop: true
        })
        .add({
          targets: ".ml1",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#first")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_one").attr("src", $("#image_one").data("src"));
      $(".ml1").hide();
      $(".course_description_one").hide();
    });

  $("#second")
    .mouseover(function () {
      $("#second")
        .removeClass('image_easeout')
        .addClass("image_easein");
      $("#image_two").attr("src", $("#image_two").data("hover"));
      $(".ml2").toggle();
      $(".course_description_two").toggle();
      anime
        .timeline({
          loop: true
        })
        .add({
          targets: ".ml2",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#second")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_two").attr("src", $("#image_two").data("src"));
      $(".ml2").hide();
      $(".course_description_two").hide();
    });

  $("#third")
    .mouseover(function () {
      $("#third")
        .removeClass('image_easeout')
        .addClass("image_easein");
      $("#image_three").attr("src", $("#image_three").data("hover"));
      $(".ml3").toggle();
      $(".course_description_three").toggle();
      anime
        .timeline({
          loop: true
        })        
        .add({
          targets: ".ml3",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#third")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_three").attr("src", $("#image_three").data("src"));
      $(".ml3").hide();
      $(".course_description_three").hide();
    });

  $("#fourth")
    .mouseover(function () {
      $("#fourth")
        .removeClass('image_easeout')
        .addClass("image_easein");
      $("#image_four").attr("src", $("#image_four").data("hover"));
      $(".ml4").toggle();
      $(".course_description_four").toggle();
      anime
        .timeline({
          loop: true
        })
        .add({
          targets: ".ml4",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 100000000
        });
    })
    .mouseout(function () {
      $("#fourth")
        .removeClass("image_easein")
        .addClass("image_easeout");
      $("#image_four").attr("src", $("#image_four").data("src"));
      $(".ml4").hide();
      $(".course_description_four").hide();
    });
})
();
