import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const FondoFuego = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#ff4500", "#ff0000", "#ffaa00", "#5c0000"],
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: { min: 1, max: 4 }, 
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, 
            },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {

              value: { min: 1, max: 8 }, 
              random: true, 
            },
          },
          detectRetina: true,
        }}
      />
    );
  }

  return <></>;
};

export default FondoFuego;