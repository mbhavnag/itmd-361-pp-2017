$.noconflict();

//function
(function($) {
  var doorbell = new Audio('media/doorbell.mp3');
  $('html').removeClass('nojs').addClass('js');
  $('audio').remove();
  $('#doorbell').on('click', function(){
    doorbell.play();
  });
})(jQuery);
