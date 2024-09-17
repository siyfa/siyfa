import React, { useState, useEffect } from "react";
import { Hero } from "./sections/hero";
import { Splash } from "./components/splash";
import { About } from "./sections/about";
import { ParticleBackground } from "./components/particle";
import { Overlay } from "./components/style";
import { Experience } from "./sections/experience";
import { Works } from "./sections/works";
import { Contact } from "./sections/contact";
import { Socials } from "./components/socials";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <ParticleBackground />
          <Socials/>
          <Overlay>
            <Hero />
            <About />
            <Experience />
            <Works />
            <Contact/>
          </Overlay>
        </>
      )}
    </>
  );
}

export default App;
