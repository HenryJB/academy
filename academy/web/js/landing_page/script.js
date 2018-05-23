(function () {

  $(document).ready(function () {

    $('.poly-item:nth-of-type(1)').addClass('active');

    if($('.poly-item:nth-of-type(1)').hasClass('active')){
      
        var element = $('.poly-item:nth-of-type(1)');
        
        addAnimatedClass(element);
    
        var image = $('img#image_one').attr('data-hover');
    
        $('img#image_one').attr('src', image);
        
    
        $('.ml1').show();
    
    
      
    }

    $('.ml1').hide();
  $('.ml2').hide();
  $('.ml3').hide();
  $('.ml4').hide();
    imageone();
    imagetwo();
    imagethree();
    imagefour();
  });


})();

function addAnimatedClass(element) {
  element.removeClass('image_easeout').addClass("image_easein");
}

function removeAnimatedClass(element) {
  if (element.hasClass('active')) {
    element.removeClass('image_easein').addClass('image_easeout')
  }
}



function imageone() {
  $('.poly-item:nth-of-type(1)').mouseover(function () {

    var element = $('.poly-item:nth-of-type(1)').addClass('active');

    addAnimatedClass(element);

    var image = $('img#image_one').attr('data-hover');

    $('img#image_one').attr('src', image);


    $('.ml1').show();

  }).mouseout(function () {

    var defaultImage = $('img#image_one').attr('data-src');
    
    var element = $('.poly-item:nth-of-type(1)');

    removeAnimatedClass(element);
    
    $('img#image_one').attr('src', defaultImage);

    $('.ml1').hide();

  });
}
  
function imagetwo() {
  $('.poly-item:nth-of-type(2)').mouseover(function () {

    var element = $('.poly-item:nth-of-type(2)').addClass('active');

    addAnimatedClass(element);

    var image = $('img#image_two').attr('data-hover');

    $('img#image_two').attr('src', image);
    
    $('.ml2').show();

  }).mouseout(function () {

    var defaultImage = $('img#image_two').attr('data-src');
    var element = $('.poly-item:nth-of-type(2)');

    removeAnimatedClass(element);
    
    $('img#image_two').attr('src', defaultImage);
    $('.ml2').hide();

  });
}

function imagethree() {
  $('.poly-item:nth-of-type(3)').mouseover(function () {

    var element = $('.poly-item:nth-of-type(3)').addClass('active');

    addAnimatedClass(element);

    var image = $('img#image_three').attr('data-hover');

    $('img#image_three').attr('src', image);

    $('.ml3').show();

  }).mouseout(function () {

    var defaultImage = $('img#image_three').attr('data-src');
    var element = $('.poly-item:nth-of-type(3)');

    removeAnimatedClass(element);
    
    $('img#image_three').attr('src', defaultImage);
    $('.ml3').hide();
  });
}

function imagefour() {
  $('.poly-item:nth-of-type(4)').mouseover(function () {

    var element = $('.poly-item:nth-of-type(4)').addClass('active');

    addAnimatedClass(element);

    var image = $('img#image_four').attr('data-hover');

    $('img#image_four').attr('src', image);
    $('.ml4').show();

  }).mouseout(function () {

    var defaultImage = $('img#image_four').attr('data-src');
    var element = $('.poly-item:nth-of-type(4)');

    removeAnimatedClass(element);
    
    $('img#image_four').attr('src', defaultImage);
    $('.ml4').hide();

  });
}