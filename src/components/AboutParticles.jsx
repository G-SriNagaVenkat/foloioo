import CustomParticlesBackground from './CustomParticlesBackground';

const AboutParticles = () => {
  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#FFC107", "#FF5722", "#F44336", "#FF9800", "#FFEB3B"],
      },
      shape: {
        type: ["circle", "polygon"],
        options: {
          polygon: {
            sides: 5
          }
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: false
        }
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      move: {
        enable: true,
        direction: "top-right",
        out_mode: "out",
        bounce: false,
        speed: 2,
        random: true,
        straight: false,
        attract: {
          enable: true,
          rotateX: 1200,
          rotateY: 1200
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "random",
        opacity: 0.2,
        width: 1
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 250,
          size: 12,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        push: {
          particles_nb: 5,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
    fpsLimit: 60
  };

  return <CustomParticlesBackground options={options} className="about-particles" />;
};

export default AboutParticles;