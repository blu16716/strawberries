window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1
    });
  };
  $(document).ready(function(){
    $('.gallery-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
});
})