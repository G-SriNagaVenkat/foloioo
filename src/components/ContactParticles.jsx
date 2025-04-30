import CustomParticlesBackground from './CustomParticlesBackground';

const ContactParticles = () => {
  const options = {
    background: {
      color: {
        value: "#10101e",
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
        value: ["#6366F1", "#3B82F6", "#0EA5E9", "#06B6D4"],
      },
      shape: {
        type: ["circle", "triangle"],
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 0.3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
      },
      move: {
        enable: true,
        direction: "bottom",
        out_mode: "out",
        speed: 1.5,
        random: true,
        straight: false,
        bounce: false,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#3B82F6",
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
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
    fullScreen: false,
  };

  return <CustomParticlesBackground options={options} className="contact-particles" />;
};

export default ContactParticles;