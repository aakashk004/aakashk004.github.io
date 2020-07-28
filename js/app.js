

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": false,
          "value_area": 60
        }
      },
      "color": {
        "value": "#017F35"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#017F35"
        },
        "polygon": {
          "nb_sides": 6
        },
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#017F35",
        "opacity": 0.8,
        "width": 0.5
      },
      "move": {
        "enable": true,
        "speed": 10,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 0.6
          }
        },
      }
    },
  }

);