import CustomParticlesBackground from './CustomParticlesBackground';

const LanguagesParticles = () => {
  const options = {
    background: {
      color: {
        value: "#101724",
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
        value: ["#FB7185", "#FACC15", "#34D399", "#38BDF8"],
      },
      shape: {
        type: "char",
        options: {
          char: {
            value: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            font: "Roboto",
            style: "",
            weight: "400",
          }
        }
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      size: {
        value: 12,
        random: true,
      },
      rotate: {
        value: 0,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      move: {
        enable: true,
        direction: "none",
        out_mode: "bounce",
        speed: 1,
        random: true,
        straight: false,
        bounce: true,
      },
      line_linked: {
        enable: false,
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
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 15,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
  };

  return <CustomParticlesBackground options={options} className="languages-particles" />;
};

export default LanguagesParticles;