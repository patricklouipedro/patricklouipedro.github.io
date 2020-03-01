$(function() {
  $('.nav-item a').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    scrollTo($(href).offset().top);
  });

  var scrollTo = function(top) {
    $('html, body').animate(
      {
        scrollTop: top
      },
      500
    );
  };
});
