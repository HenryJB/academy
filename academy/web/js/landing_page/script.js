(function () {


  $('.ml1').hide();
  $(".course_description_one").hide();
  $(".ml2").hide();
  $(".course_description_two").hide();
  $(".ml3").hide();
  $(".course_description_three").hide();
  $(".ml4").hide();
  $(".course_description_four").hide();


  $("#first__mobile")
      .mouseover(function () {
        $("#first__mobile")
          .removeClass('image_easeout animated slideIn')
          .addClass("image_easein animated slideIn");
        $("#image_mobile_one").attr("src", $("#image_mobile_one").data("hover"));
        $(".ml1").toggle();
        $(".course_description_one").toggle();
        anime
          .timeline({ loop: true })
          .add({
            targets: ".ml1 .line",
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
          })
          .add({
            targets: ".ml1 .line",
            duration: 600,
            easing: "easeOutExpo",
            translateY: function(e, i, l) {
              var offset = -0.625 + 0.625 * 2 * i;
              return offset + "em";
            }
          })
          .add({
            targets: ".ml1 .ampersand",
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
          })
          .add({
            targets: ".ml1 .letters-left",
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=300"
          })
          .add({
            targets: ".ml1 .letters-right",
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
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
           .timeline({ loop: true })
           .add({
             targets: ".ml2 .line",
             opacity: [0.5, 1],
             scaleX: [0, 1],
             easing: "easeInOutExpo",
             duration: 700
           })
           .add({
             targets: ".ml2 .line",
             duration: 600,
             easing: "easeOutExpo",
             translateY: function(e, i, l) {
               var offset = -0.625 + 0.625 * 2 * i;
               return offset + "em";
             }
           })
           .add({
             targets: ".ml2 .ampersand",
             opacity: [0, 1],
             scaleY: [0.5, 1],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
           })
           .add({
             targets: ".ml2 .letters-left",
             opacity: [0, 1],
             translateX: ["0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=300"
           })
           .add({
             targets: ".ml2 .letters-right",
             opacity: [0, 1],
             translateX: ["-0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
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
           .timeline({ loop: true })
           .add({
             targets: ".ml3 .line",
             opacity: [0.5, 1],
             scaleX: [0, 1],
             easing: "easeInOutExpo",
             duration: 700
           })
           .add({
             targets: ".ml3 .line",
             duration: 600,
             easing: "easeOutExpo",
             translateY: function(e, i, l) {
               var offset = -0.625 + 0.625 * 2 * i;
               return offset + "em";
             }
           })
           .add({
             targets: ".ml3 .ampersand",
             opacity: [0, 1],
             scaleY: [0.5, 1],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
           })
           .add({
             targets: ".ml3 .letters-left",
             opacity: [0, 1],
             translateX: ["0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=300"
           })
           .add({
             targets: ".ml3 .letters-right",
             opacity: [0, 1],
             translateX: ["-0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
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
          .timeline({ loop: true })
          .add({
            targets: ".ml4 .line",
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
          })
          .add({
            targets: ".ml4 .line",
            duration: 600,
            easing: "easeOutExpo",
            translateY: function(e, i, l) {
              var offset = -0.625 + 0.625 * 2 * i;
              return offset + "em";
            }
          })
          .add({
            targets: ".ml4 .ampersand",
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
          })
          .add({
            targets: ".ml4 .letters-left",
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=300"
          })
          .add({
            targets: ".ml4 .letters-right",
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
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
          .timeline({ loop: true })
          .add({
            targets: ".ml1 .line",
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
          })
          .add({
            targets: ".ml1 .line",
            duration: 600,
            easing: "easeOutExpo",
            translateY: function(e, i, l) {
              var offset = -0.625 + 0.625 * 2 * i;
              return offset + "em";
            }
          })
          .add({
            targets: ".ml1 .ampersand",
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
          })
          .add({
            targets: ".ml1 .letters-left",
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=300"
          })
          .add({
            targets: ".ml1 .letters-right",
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
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
           .timeline({ loop: true })
           .add({
             targets: ".ml2 .line",
             opacity: [0.5, 1],
             scaleX: [0, 1],
             easing: "easeInOutExpo",
             duration: 700
           })
           .add({
             targets: ".ml2 .line",
             duration: 600,
             easing: "easeOutExpo",
             translateY: function(e, i, l) {
               var offset = -0.625 + 0.625 * 2 * i;
               return offset + "em";
             }
           })
           .add({
             targets: ".ml2 .ampersand",
             opacity: [0, 1],
             scaleY: [0.5, 1],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
           })
           .add({
             targets: ".ml2 .letters-left",
             opacity: [0, 1],
             translateX: ["0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=300"
           })
           .add({
             targets: ".ml2 .letters-right",
             opacity: [0, 1],
             translateX: ["-0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
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
           .timeline({ loop: true })
           .add({
             targets: ".ml3 .line",
             opacity: [0.5, 1],
             scaleX: [0, 1],
             easing: "easeInOutExpo",
             duration: 700
           })
           .add({
             targets: ".ml3 .line",
             duration: 600,
             easing: "easeOutExpo",
             translateY: function(e, i, l) {
               var offset = -0.625 + 0.625 * 2 * i;
               return offset + "em";
             }
           })
           .add({
             targets: ".ml3 .ampersand",
             opacity: [0, 1],
             scaleY: [0.5, 1],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
           })
           .add({
             targets: ".ml3 .letters-left",
             opacity: [0, 1],
             translateX: ["0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=300"
           })
           .add({
             targets: ".ml3 .letters-right",
             opacity: [0, 1],
             translateX: ["-0.5em", 0],
             easing: "easeOutExpo",
             duration: 600,
             offset: "-=600"
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
          .timeline({ loop: true })
          .add({
            targets: ".ml4 .line",
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
          })
          .add({
            targets: ".ml4 .line",
            duration: 600,
            easing: "easeOutExpo",
            translateY: function(e, i, l) {
              var offset = -0.625 + 0.625 * 2 * i;
              return offset + "em";
            }
          })
          .add({
            targets: ".ml4 .ampersand",
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
          })
          .add({
            targets: ".ml4 .letters-left",
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=300"
          })
          .add({
            targets: ".ml4 .letters-right",
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600"
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

