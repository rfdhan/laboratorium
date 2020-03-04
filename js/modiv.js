// $('.page-scroll').on('click', function(e){
    
//     var tujuan = $(this).attr('href');
//     var elemenTujuan = $(tujuan);
//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top-50
//     }, 1250, 'swing');

//     e.preventDefault();
    
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href').scrollIntoView({
            behavior:'smooth'
        }))
    });
});





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