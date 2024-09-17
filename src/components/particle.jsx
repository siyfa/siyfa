import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 35,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#f9faee",
            },
            shape: {
              type: "star",
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: true,
              },
            },
            rotate: {
              value: 1,
              random: true,
              direction: "up",
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#414040",
              opacity: 0.4,
              width: 0.4,
            },
            move: {
              enable: true,
              speed: 0.1,
              direction: "up",
              random: false,
              straight: true,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["grab"],
              },
              onclick: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 4,
                duration: 3,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 50,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#0e0e0e",
            image: "",
            position: "0% 0%",
            repeat: "no-repeat",
            size: "fill",
          },
        }}
      />
    </div>
  );
};
