$('.arrow-img').click(function(event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 650}, 2000);
});

$('.chapter-1').click(function(event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 510}, 1500);
});

$('.chapter-2').click(function(event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 1350}, 1500);
});

$('.chapter-3').click(function(event) {
    event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 2100}, 1500);
});

$('.gallery-logo').click(function(event) {
  if ($(".separate-page").length > 0) {
    // on the dedicated page, treat boxes as normal links
    return true;
  }

  if ($(this).attr("class").indexOf("seemore") > -1) {
    // the see more link is a normal link
    return true;
  }

  event.preventDefault();
  $('.gallery-logo').removeClass('selected');
  $( this ).addClass('selected');

  // todo: something better..
  var companyClass = $( this ).attr("class")
    .replace("gallery-logo", "")
    .replace("nav-element", "")
    .replace("selected", "")
    .replace("extended", "")
    .trim();
  console.log(companyClass);

  $('.gallery-container').css('display', 'none');
  $('#' + companyClass).css('display', 'inline-block');
});
