function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  }
  
  (() => {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()



      // Text for the typewriter effect
      const text = "Welcome to Peach And Owl";
      const speed = 100; // Speed in milliseconds

      // Function for the typewriter effect
      function typeWriter(text, elementId, speed) {
          const element = document.getElementById(elementId);
          let i = 0;

          function type() {
              if (i < text.length) {
                  element.innerHTML += text.charAt(i);
                  i++;
                  setTimeout(type, speed);
              }
          }

          type();
      }

      // Call the typewriter function for the heading
      typeWriter(text, "hero-heading", speed);


      
      var currentSlide = 0;

      function showSlide(index) {
          var slides = document.querySelector('.slides');
          var totalSlides = document.querySelectorAll('.slide').length;
          currentSlide = (index + totalSlides) % totalSlides;

          slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
      }

      function prevSlide() {
          showSlide(currentSlide - 1);
      }

      function nextSlide() {
          showSlide(currentSlide + 1);
      }

      function toggleMenu() {
          var nav = document.querySelector('nav');
          nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
      }
      function toggleMenu() {
  var nav = document.querySelector('nav');
  var menuIcon = document.querySelector('.menu-icon');
  
  // Toggle the 'active' class on the menu icon
  menuIcon.classList.toggle('active');
  
  // Toggle the visibility of the navigation
  nav.style.transform = (nav.style.transform === 'translateX(0)') ? 'translateX(100%)' : 'translateX(0)';
}
function toggleMenu() {
  var nav = document.querySelector('nav');
  var menuIcon = document.querySelector('.menu-icon');

  // Toggle the 'active' class on the menu icon
  menuIcon.classList.toggle('active');

  // Toggle the visibility of the navigation
  if (nav.style.display === 'flex') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'flex';
  }
}
