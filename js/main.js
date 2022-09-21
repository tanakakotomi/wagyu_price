$(function() {
  $('#page-top').click(function() {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    // var position = target.offset().top;
		var position = 0;
		console.log(position);
    var speed = 500;
    $('html, body').animate({
      scrollTop: position,
    }, speed, 'swing');
    return false;
  });
});