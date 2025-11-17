$(document).ready(function () {
  // Header
  $('.hamburger').click(function () {
    $('.nav').toggle();
  });

  // Faq Section
  var $faqItem = $('.faq-item');
  var $faqQuestion = $('.faq-question');
  $faqQuestion.on('click', function () {
    var $currentItem = $(this).closest('.faq-item');
    var isActive = $currentItem.hasClass('active');
    if (!isActive) {
      $faqItem.removeClass('active');
    }
    $currentItem.toggleClass('active');
  });

  // Slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Previous"><span class="arrow-icon prev"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Next"><span class="arrow-icon next"></span></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992, // <992 => tablet and below
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // <768 => mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Previous"><span class="arrow-icon prev"></span></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Next"><span class="arrow-icon next"></span></button>',

    responsive: [
      {
        breakpoint: 992, // tablet + mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // thumbnail Images
  let firstThumb = $(".thumbnail img").first();
  firstThumb.parent().addClass("active");
  $(".main-image img").attr("src", firstThumb.attr("src"));

  $(".thumbnail img").click(function () {
    $(".thumbnail").removeClass("active");
    $(this).parent().addClass("active");
    $(".main-image img").attr("src", $(this).attr("src"));
  });

  // Quantity
  $(document).ready(function () {
    $(".plus-btn").click(function () {
      let input = $(".qty-display");
      let val = parseInt(input.val());
      input.val(val + 1);
    });

    $(".minus-btn").click(function () {
      let input = $(".qty-display");
      let val = parseInt(input.val());
      if (val > 1) input.val(val - 1);
    });
  });
});

