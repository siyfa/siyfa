import React, { useState, useEffect } from "react";
import { Hero } from "./sections/hero";
import { Splash } from "./components/splash";
import { About } from "./sections/about";
import { ParticleBackground } from "./components/particle";
import { Overlay } from "./components/style";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <ParticleBackground />
          <Overlay>
            <Hero />
            <About />
          </Overlay>
        </>
      )}
    </>
  );
}

export default App;
