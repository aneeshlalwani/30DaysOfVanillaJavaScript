function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
}
  
const sliderImages = document.querySelectorAll('.slide-in');

// This function will check either the window is being scrolled or not
function checkSlide(e) {
    // console.log(e);
    sliderImages.forEach(sliderImage => {
        // Half way through the image
        const slideInAT = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // Finding bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        
        const isHalfShown = slideInAT > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}
window.addEventListener('scroll', debounce(checkSlide));