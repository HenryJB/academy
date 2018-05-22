(function () {

  //on hover add active class to the code
  var classExists; 

  $(document).ready(function () {
    var element;

    $('.poly-item:nth-of-type(1)').mouseover(function () {
      //add all the classes through a function
      classExists = $('img#image_one').hasClass();

      element = $('.poly-item:nth-of-type(1)');
      
      element.removeClass('image_easeout animated slideIn').addClass("image_easein animated slideIn");
      $('img#image_one').attr('src', 'img/landing_page/film2.png');
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
      
      
      // if(classExists){
      //   $('img#image_one').attr('src', 'img/landing_page/film2.png');
      // }
      
    });
  });

  
})
();