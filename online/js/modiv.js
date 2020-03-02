$('.page-scroll').on('click',function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    console.log($('html, body').scrollTop());
    e.preventDefault();
})



$('.slider-one').slick({
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
});

//Slider dua

$('.slider-dua').slick({
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:".site-slider-dua .slide-btn .prev",
    nextArrow:".site-slider-dua .slide-btn .next"
  });