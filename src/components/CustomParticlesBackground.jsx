import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './ParticlesBackground.css';

const CustomParticlesBackground = ({ options, className = "" }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id={`tsparticles-${Math.random().toString(36).substring(2, 9)}`}
      className={`particles-background ${className}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default CustomParticlesBackground;