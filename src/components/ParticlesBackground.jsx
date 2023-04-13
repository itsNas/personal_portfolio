import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesBackground = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      detectRetina: false,
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 6,
            speed: 3,
          },
        },
      },
      particles: {
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 20,
            sync: true,
          },
        },
        lineLinked: {
          blink: false,
          color: "random",
          consent: false,
          distance: 30,
          enable: true,
          opacity: 0.3,
          width: 0.5,
        },
        move: {
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: false,
            area: 2000,
          },
          limit: 0,
          value: 200,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 2,
            sync: false,
          },
          random: false,
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          animation: {
            enable: false,
            minimumValue: 0.1,
            speed: 40,
            sync: false,
          },
          random: true,
          value: 1,
        },
      },
      polygon: {
        draw: {
          enable: true,
          lineColor: "rgba(255,255,255,0.2)",
          lineWidth: 0.3,
        },
        move: {
          radius: 10,
        },
        inlineArrangement: "equidistant",
        scale: 0.5,
        type: "inline",
        url: "https://particles.js.org/images/smalldeer.svg",
      },
      fullScreen: {
        enable: false,
        zIndex: 10,
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    // loadSlim(engine);
    loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesBackground;
