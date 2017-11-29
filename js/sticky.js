var yourNavigation = $("#topUI");
    stickyDiv = "sticky";
    yourHeader = $('.slideshowContainer').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

$('.main-gallery').flickity({
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 4000,
  cellAlign: 'left',
  contain: true
});

// 1st carousel, main
$('.carousel-main').flickity({
  prevNextButtons: false,
  autoPlay: 2000,
  cellAlign: 'center',
  contain: true
});
// 2nd carousel, navigation
$('.carousel-nav').flickity({
  asNavFor: '.carousel-main',
  contain: true,
  pageDots: false
});
