import CustomParticlesBackground from './CustomParticlesBackground';

const EducationParticles = () => {
  const options = {
    background: {
      color: {
        value: "#131b2c",
      },
    },
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#C084FC", "#818CF8", "#E879F9"],
      },
      shape: {
        type: "polygon",
        options: {
          polygon: {
            sides: 6
          }
        }
      },
      opacity: {
        value: 0.6,
        random: true,
      },
      size: {
        value: 8,
        random: true,
      },
      move: {
        enable: true,
        direction: "top",
        out_mode: "out",
        speed: 1.2,
        random: true,
        straight: false,
        bounce: false,
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#A78BFA",
        opacity: 0.2,
        width: 1,
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
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.4,
          },
        },
        push: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
  };

  return <CustomParticlesBackground options={options} className="education-particles" />;
};

export default EducationParticles;