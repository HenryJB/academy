//animation effect(waypoint)
//paste this code under head tag or in a seperate js file.
 // Wait for window load
 $(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");

  function onScrollInit( items, trigger ) {
    items.each( function() {
      var osElement = $(this),
      osAnimationClass = osElement.attr('data-os-animation'),
      osAnimationDelay = osElement.attr('data-os-animation-delay');

      osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
      });

      var osTrigger = ( trigger ) ? trigger : osElement;

      osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
      },{
        triggerOnce: true,
        offset: '90%'
      });
    });
  }
  onScrollInit( $('.os-animation') );
  onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));
  var md = new MobileDetect(window.navigator.userAgent);

  if (md.mobile() || md.tablet() || md.phone()) {
    var head = document.getElementsByTagName("head")[0];
    var link1 = document.createElement("link");
    var link2 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.type = "text/css";
    link1.href = "css/media_queries/skewbox.css";
    link1.media = "all";
    head.appendChild(link1);

    link2.rel = "stylesheet";
    link2.type = "text/css";
    link2.href = "css/media_queries/scrollbox.css";
    link2.media = "all";
    head.appendChild(link2);

    //remove the laptop query
    $("#laptop").remove();
  }
  });

  $(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
     $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
  });

  $(window).resize(function() {
    updateContainer();
  });
  //this checks if the browser has been resized
  function updateContainer() {
  var md = new MobileDetect(window.navigator.userAgent);

  var $containerWidth = $(window).width();
  if ($containerWidth <= 1199 && md.phone() === null && md.tablet() === null) {
    console.log(md.phone());
    window.location.reload();
    console.log("window was resized");
  } else {
    console.log(md.phone());
    console.log("Could not reload browser");
  }
  }
