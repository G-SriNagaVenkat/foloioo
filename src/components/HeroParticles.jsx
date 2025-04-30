import CustomParticlesBackground from './CustomParticlesBackground';

const HeroParticles = () => {
  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#5558FF", "#00C6FF", "#9E00FF", "#4FFFB0"],
      },
      shape: {
        type: ["circle", "triangle"],
        options: {
          triangle: {
            sides: 3
          }
        }
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 0.3,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false
        }
      },
      move: {
        enable: true,
        direction: "none",
        out_mode: "bounce",
        speed: 2,
        random: true,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4355ff",
        opacity: 0.3,
        width: 1,
        shadow: {
          enable: true,
          blur: 5,
          color: "#00C6FF"
        }
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: {
            opacity: 0.8,
          },
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
  };

  return <CustomParticlesBackground options={options} className="hero-particles" />;
};

export default HeroParticles;