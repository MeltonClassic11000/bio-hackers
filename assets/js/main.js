$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.nav').toggle(); // toggle() automatically switches display block/flex
  });


});

// Ensure jQuery is loaded before this script
$(document).ready(function () {
  var $faqItem = $('.faq-item');
  var $faqQuestion = $('.faq-question');

  // Page Load State: First item already has the 'active' class in HTML
  // We don't need any additional JS for the initial state.

  $faqQuestion.on('click', function () {
    var $currentItem = $(this).closest('.faq-item');

    // Check if the clicked item is already active
    var isActive = $currentItem.hasClass('active');

    // Close all other active items (Accordion functionality)
    if (!isActive) {
      $faqItem.removeClass('active');
    }

    // Toggle the 'active' class on the clicked item
    // If it was open, it closes. If it was closed, it opens.
    $currentItem.toggleClass('active');
  });
});

$(document).ready(function(){
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
});