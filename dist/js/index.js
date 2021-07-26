$(window).on('load', function() {
  $('#banner').slick({
      dots: true,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            centerMode: false,
            // centerPadding: '0',
            centerPadding: '40px',
            slidesToShow: 1
          }
        } 
      ]
    });

  function aplicarSlick(seletor) {
    $(seletor).slick({
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 3,
          }
        },
          {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });
  }
    
  aplicarSlick('#cards');
  aplicarSlick('#cards2');
  aplicarSlick('#cards3');
  aplicarSlick('#cards4');
  aplicarSlick('#cards5');
});
