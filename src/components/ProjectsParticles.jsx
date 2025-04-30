import CustomParticlesBackground from './CustomParticlesBackground';

const ProjectsParticles = () => {
  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: ["#BD34FE", "#41D1FF", "#FFCA28", "#45CFDD", "#FF5F9E"],
      },
      shape: {
        type: ["star", "circle"],
        options: {
          star: {
            sides: 5,
            inset: 2
          }
        }
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "random",
        animation: {
          enable: true,
          speed: 3,
          sync: false
        }
      },
      move: {
        enable: true,
        direction: "none",
        out_mode: "out",
        speed: 1.2,
        random: true,
        straight: false,
        bounce: false,
        path: {
          enable: true,
          options: {
            clamp: true
          },
          delay: {
            random: {
              enable: true,
              minimumValue: 0.5
            },
            value: 0
          }
        },
        trail: {
          enable: true,
          length: 5,
          fillColor: {
            value: "#000000"
          }
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "random",
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          color: "#ffffff",
          opacity: 0.05
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.1,
          opacity: 1,
          color: {
            value: "random"
          }
        },
        lines: {
          enable: false,
          frequency: 0.1,
          opacity: 1
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "connect",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        push: {
          quantity: 6,
          size: true
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
    fpsLimit: 60,
    motion: {
      disable: false,
      reduce: {
        factor: 2,
        value: true
      }
    }
  };

  return <CustomParticlesBackground options={options} className="projects-particles" />;
};

export default ProjectsParticles;