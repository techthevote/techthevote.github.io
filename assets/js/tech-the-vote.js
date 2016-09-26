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