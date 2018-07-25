/* particlesJS */
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Image Gallery
var imagesObj = [
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483637/mccascol/photo_2018-07-25_07-30-48.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483637/mccascol/photo_2018-07-25_07-30-51.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483637/mccascol/photo_2018-07-25_07-31-25.jpg",
    title: "Game Development with Unity",
    desp: "Game Development with Unity"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483636/mccascol/photo_2018-07-25_07-30-44.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483636/mccascol/photo_2018-07-25_07-30-45.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483636/mccascol/photo_2018-07-25_07-30-36.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483635/mccascol/photo_2018-07-25_07-30-40.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483635/mccascol/photo_2018-07-25_07-30-35.jpg",
    title: "Mozilla Campus Club Orientation",
    desp: "Mozilla Campus Club Orientation"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483635/mccascol/photo_2018-07-25_07-30-31.jpg",
    title: "Git Workshop",
    desp: "Git Workshop"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483635/mccascol/photo_2018-07-25_07-30-29.jpg",
    title: "Git Workshop",
    desp: "Git Workshop"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483635/mccascol/photo_2018-07-25_07-30-26.jpg",
    title: "Git Workshop",
    desp: "Git Workshop"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483634/mccascol/photo_2018-07-25_07-29-37.jpg",
    title: "Workshop on Web Extension",
    desp: "Workshop on Web Extension"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483634/mccascol/photo_2018-07-25_07-30-18.jpg",
    title: "Workshop on Web Extension",
    desp: "Workshop on Web Extension"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483634/mccascol/photo_2018-07-25_07-30-01.jpg",
    title: "Workshop on Web Extension",
    desp: "Workshop on Web Extension"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483634/mccascol/photo_2018-07-25_07-30-25.jpg",
    title: "Git Workshop",
    desp: "Git Workshop"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483634/mccascol/photo_2018-07-25_07-29-34.jpg",
    title: "Introduction to Common Voice and DeepSpeech",
    desp: "Introduction to Common Voice and DeepSpeech"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483633/mccascol/photo_2018-07-25_07-29-58.jpg",
    title: "Workshop on Web Extension",
    desp: "Workshop on Web Extension"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483633/mccascol/photo_2018-07-25_07-31-57.jpg",
    title: "Game Development with Unity",
    desp: "Game Development with Unity"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483633/mccascol/photo_2018-07-25_07-29-31.jpg",
    title: "Introduction to Common Voice and DeepSpeech",
    desp: "Introduction to Common Voice and DeepSpeech"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483633/mccascol/photo_2018-07-25_07-29-27.jpg",
    title: "Introduction to Common Voice and DeepSpeech",
    desp: "Introduction to Common Voice and DeepSpeech"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483633/mccascol/photo_2018-07-25_07-29-48.jpg",
    title: "Workshop on Web Extension",
    desp: "Workshop on Web Extension"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483632/mccascol/photo_2018-07-25_07-31-55.jpg",
    title: "Game Development with Unity",
    desp: "Game Development with Unity"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483632/mccascol/photo_2018-07-25_07-31-45.jpg",
    title: "Game Development with Unity",
    desp: "Game Development with Unity"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483632/mccascol/photo_2018-07-25_07-31-30.jpg",
    title: "Game Development with Unity",
    desp: "Game Development with Unity"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483632/mccascol/photo_2018-07-25_07-29-13.jpg",
    title: "Introduction to Common Voice and DeepSpeech",
    desp: "Introduction to Common Voice and DeepSpeech"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483632/mccascol/photo_2018-07-25_07-29-17.jpg",
    title: "Introduction to Common Voice and DeepSpeech",
    desp: "Introduction to Common Voice and DeepSpeech"
  },
  {
    image: "https://res.cloudinary.com/nirmalrizal/image/upload/v1532483632/mccascol/photo_2018-07-25_07-28-51.jpg",
    title: "Introduction to Common Voice and DeepSpeech",
    desp: "Introduction to Common Voice and DeepSpeech"
  }
];

$(document).ready(function(){ 

  var imageHtml = '';
  imagesObj.map(function(img){

    imageHtml += '<img alt="'+ img.title +'" src="'+ img.image +'" data-image="'+ img.image +'" data-description="'+ img.desp +'">';

  });

  $("#gallery-images").html(imageHtml);

  $("#gallery-images").unitegallery({
    gallery_theme: "tiles"
  }); 
}); 
