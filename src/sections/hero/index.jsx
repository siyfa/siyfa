import { Wrapper, HeroContent } from "../../components/style.js";
import "animate.css";
//
import NavBar from "../../components/nav/index.jsx";

export const Hero = () => {
  return (
    <Wrapper>
      <NavBar />
      <HeroContent className="animate__animated animate__backInUp" id="top">
        <div className="max-w-screen-xl flex flex-wrap flex-col md:h-[90vh] h-[100vh] md:justify-around justify-center mx-auto md:pt-40 pt-20 md:px-28 px-2 animate__animated animate__backInUp">
          <p className="md:text-xl font-tetiary font-bold tracking-wide">
            Hi, my name is
          </p>
          <div className="md:my-0 my-8">
            <h1 className="md:text-7xl text-4xl font-secondary font-semibold">
              Siyanbola Faruk.
            </h1>
            <h1 className="md:text-7xl text-4xl pt-2 font-secondary font-semibold text-gray-400">
              I build things for the web.
            </h1>
          </div>
          <p className="md:text-xl font-tetiary tracking-wide md:w-3/4 w-auto">
            I’m a software engineer specializing in building and designing
            exceptional digital experiences. Currently, I’m focused on building
            accessible, human-centered products at
            <a
              href="https://trusoftng.com"
              className="text-gray-100 font-bold hover:underline ml-1"
              target="_blank"
            >
              Trusoft
            </a>
          </p>
        </div>
      </HeroContent>
    </Wrapper>
  );
};
