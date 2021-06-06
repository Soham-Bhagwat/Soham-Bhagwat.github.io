$('a[href^="#"]').on('click tap', function(event) {

    var target = $($(this).attr('href'));
  
    if (target.length) {
      var scrollOffset = target.offset().top;
      if (navigator.userAgent.match(/iPad|iPhone|iPod|Windows Phone|Android/i)) {
        function customScrollTo(to, duration) {
          var start = 0,
            change = to - start,
            currentTime = 0,
            increment = 20;
  
          var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            document.scrollTo(0, val);
            
            if (currentTime < duration) {
              setTimeout(animateScroll, increment);
            }
          };
          animateScroll();
        }
  
        Math.easeInOutQuad = function(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };
  
        customScrollTo(scrollOffset, 1000);
      } else {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
  
    }
  });