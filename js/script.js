$( document ).ready(function() {

    $(function() {
      $(".booking-toggler").click(function() {
        $('.booking-panel').slideToggle(300);
        $(this).toggleClass("active");
      });
    });

    $(function() {
      $(".languages").click(function() {
        $('.languages ul').slideToggle(300);
        $(this).toggleClass("select");
      });
    });

    $(function() {
      $(".depts-toggler").click(function() {
        $('.depts-list').slideToggle(300);
        $(this).toggleClass("active");
      });
    });

    $(function() {
      $(".search-toggler").click(function() {
        $('.search-overlay').fadeToggle(150);
        $('#search-input').focus();
      });
    });

    $(function() {
      $(".numbers-toggler").click(function() {
        $('.usefull-numbers-overlay').toggleClass('active');
      });
    });

    $(function() {
      $(".menu-toggler").click(function() {
        $('nav').toggleClass("active");
        $('body').toggleClass("no-overflow");
      });
    });

    $(function() {
      $(".submenu").click(function() {
        $(this).toggleClass("opened");
        $(".submenu ul").slideToggle();
      });
    });

    $(function() {
      $(".calendar table td").click(function() {
        $(".calendar table td").removeClass("selected");
        $(this).addClass("selected");
      });
    });

    $(function() {
      $(".day-header").click(function() {
          if ( $(this).parent(".day").hasClass("active") ) {

          } else {
            $(".day").removeClass("active");
            $(".day-body").slideUp();
            $(this).parent().find(".day-body").slideToggle();
            $(this).parent(".day").addClass("active");
          }
      });
    });

    $(function() {
      $(".exam-header").click(function() {
        if ( $(this).parent(".exam").hasClass("opened") ) {
        } else {
            $(".exam").removeClass("opened");
            $(".exam-body").slideUp();
            $(this).parent().find(".exam-body").slideDown();
            $(this).parent(".exam").addClass("opened");
        }
      });
    });

    $( function() {
        $( "#faq-list" ).accordion({
          heightStyle: "content",
          collapsible: true,
          active: false
        });
      } );

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();


    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".section-menu").addClass("scrolled");
        } else {
            $(".section-menu").removeClass("scrolled");
        }
    });

});




$(document).on("click", function(event){
    var $trigger = $(".submenu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".submenu ul").slideUp();
        $(".submenu").removeClass("opened");
    }
});
