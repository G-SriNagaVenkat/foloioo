import CustomParticlesBackground from './CustomParticlesBackground';

const SkillsParticles = () => {
  const options = {
    background: {
      color: {
        value: "#0f172a",
      },
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: ["#4ADE80", "#22D3EE", "#60A5FA"],
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
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
        value: 4,
        random: true,
      },
      move: {
        enable: true,
        direction: "none",
        out_mode: "bounce",
        speed: 1,
        random: true,
        straight: false,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4ADE80",
        opacity: 0.2,
        width: 1,
      },
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
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 110,
          line_linked: {
            opacity: 0.4,
          },
        },
        bubble: {
          distance: 300,
          size: 8,
          duration: 2,
          opacity: 0.6,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
  };

  return <CustomParticlesBackground options={options} className="skills-particles" />;
};

export default SkillsParticles;