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
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onDiv: {
            elementId: "repulse-div",
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: false,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
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
          connect: {
            distance: 80,
            lineLinked: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 400,
            lineLinked: {
              opacity: 1,
            },
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          slow: {
            active: false,
            radius: 0,
            factor: 1,
          },
        },
      },
      particles: {
        color: {
          value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
        },
        lineLinked: {
          blink: false,
          color: "random",
          consent: false,
          distance: 40,
          enable: true,
          opacity: 0.8,
          width: 1,
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
          random: false,
          speed: 1,
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
            minimumValue: 0.3,
            speed: 2,
            sync: false,
          },
          random: false,
          value: 0.8,
        },
        shape: {
          character: {
            fill: false,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400",
          },
          image: {
            height: 100,
            replaceColor: true,
            src: "https://particles.js.org/images/github.svg",
            width: 100,
          },
          polygon: {
            sides: 5,
          },
          stroke: {
            color: "#000000",
            width: 0,
          },
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
          enable: false,
          lineColor: "rgba(255,255,255,0.2)",
          lineWidth: 0.5,
        },
        enable: true,
        move: {
          radius: 5,
        },
        position: {
          x: 30,
          y: 10,
        },
        inlineArrangement: "equidistant",
        scale: 0.8,
        type: "inline",
        url: "https://particles.js.org/images/google.svg",
      },
      background: {
        // color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        // size: "cover",
      },
      fullScreen: {
        enable: true,
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
