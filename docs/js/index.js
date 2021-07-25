$(window).on('load', function() {
    console.log($('#banner'));

    // $('#banner').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    $('#banner').slick({
        // infinite: false,
        // variableWidth: true,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});


console.log('Olá mundo ')

$('#cards').slick({
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
	

/* Header INICIO */

/* Header FIM */


/* Slider INICIO */
// criar function para aplicar o slider 
// receber id como parametro 
// chamar function passando o id de cada slider 
//

/* Slider FIM */