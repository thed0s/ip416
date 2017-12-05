var yourNavigation = $("#topUI");
    stickyDiv = "sticky";
    yourHeader = $('#topUI').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

$("#testimonialSlideshow > div:gt(0)").hide();

setInterval(function() {
  $('#testimonialSlideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#testimonialSlideshow');
},  3000);

$("#tSlideshow > div:gt(0)").hide();

setInterval(function() {
  $('#tSlideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#tSlideshow');
},  3000);

/*
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
*/
