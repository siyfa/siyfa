import { useState } from "react";
import { Section } from "../../components/style";
// icons
import GithubIcon from "../../assets/github.svg";
import LinkIcon from "../../assets/url.svg";

// data
import { works } from "../../data";

export const Works = () => {
  const [showWorks, setShowWorks] = useState(3);

  const handleShowWorks = () => {
    setShowWorks((prevShowWorks) => prevShowWorks + 3);
  };

  return (
    <Section id="work">
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-5">
        <div className="flex flex-wrap md:flex-row flex-col justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Some Things I've Built</h2>
          <span className="bg-gray-500 h-0.5 md:w-1/4 w-2/4 md:mt-0 mt-2 md:ml-5"></span>
        </div>
        {works.slice(0, showWorks).map((work, i) => {
          if (i % 2 === 0) {
            return (
              <div
                className="flex flex-wrap flex-col justify-between mt-10 mb-16 "
                key={i}
              >
                <div className="flex flex-wrap md:flex-row relative">
                  <a
                    href={work.url ? work.url : "#"}
                    target={work.url && "_blank"}
                    rel="noopener noreferrer"
                    className="md:h-96 h-[350px] md:w-2/3 w-full"
                  >
                    <img
                      src={work.image}
                      className="w-full h-full md:hover:grayscale-0 md:grayscale relative hover:z-10"
                    />
                  </a>
                  <div className="md:w-1/3 w-full md:h-0 h-[350px] md:relative absolute top-0">
                    <div className="md:text-right text-left text-xl tracking-wide font-medium font-secondary md:relative absolute md:top-0 top-2 md:left-0 left-2 md:z-0 z-20">
                      {work.featured && (
                        <p className="mb-2 text-sm font-tetiary md:block hidden">
                          Feature Project -
                        </p>
                      )}
                      <a
                        href={work.url ? work.url : "#"}
                        target={work.url && "_blank"}
                        className="font-tetiary font-bold hover:underline"
                      >
                        {work.name}
                      </a>
                    </div>
                    <div className="">
                      <div className="md:bg-[#f0f0f0] bg-[rgba(10,10,10,0.8)] md:h-56 w-full absolute md:top-20 top-0 bottom-0 md:right-1/4 ">
                        <p className="p-2 md:text-lg md:text-black text-white font-semibold md:font-bold font-tetiary md:tracking-wide tracking-widest md:mt-0 mt-10 md:ml-0 ml-2">
                          {work.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 md:top-[320px]">
                      <ul className="flex flex-wrap text-sm space-x-4">
                        {work.tools.map((tool) => (
                          <li>{tool}</li>
                        ))}
                      </ul>
                      <ul className="flex flex-wrap text-sm space-x-4">
                        {work.github && (
                          <li className="hover:bg-black p-1 rounded">
                            <a href={work.github} className="" target="_blank">
                              <img src={GithubIcon} alt="" className="" />
                            </a>
                          </li>
                        )}
                        {work.url && (
                          <li className="hover:bg-black p-1 rounded">
                            <a href={work.url} className="" target="_blank">
                              <img src={LinkIcon} alt="" className="" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="flex flex-wrap flex-col justify-between md:my-24"
                key={i}
              >
                <div className="flex flex-wrap md:flex-row relative">
                  <div className="md:w-1/3 w-full md:h-0 h-[350px] md:relative absolute top-0 z-[2]">
                    <div className="text-right text-xl tracking-wide font-medium font-secondary">
                      {work.featured && (
                        <p className="mb-2 text-sm font-tetiary text-left md:block hidden">
                          Feature Project -
                        </p>
                      )}
                      <a
                        href={work.url ? work.url : "#"}
                        target={work.url && "_blank"}
                        className="font-tetiary font-bold hover:underline text-left flex md:ml-0 ml-2 md:mt-0 mt-2 md:relative absolute z-20"
                      >
                        {work.name}
                      </a>
                    </div>
                    <div className="md:bg-[#f0f0f0] bg-[rgba(10,10,10,0.8)] md:h-56 h-[350px] w-full absolute md:top-20 md:left-1/4 top-0 bottom-0 left-0">
                      <p className="p-2 md:text-lg md:text-black text-white font-semibold md:font-bold font-tetiary md:tracking-wide tracking-widest md:mt-0 mt-10 md:ml-0 ml-2">
                        {work.description}
                      </p>
                    </div>
                    <div className="absolute bottom-2 left-2 md:left-auto md:right-2 md:top-[320px]">
                      <ul className="flex flex-wrap text-sm space-x-4">
                        {work.tools.map((tool) => (
                          <li>{tool}</li>
                        ))}
                      </ul>
                      <ul className="flex flex-wrap text-sm space-x-4">
                        {work.github && (
                          <li className="hover:bg-black p-1 rounded">
                            <a href={work.github} className="" target="_blank">
                              <img src={GithubIcon} alt="" className="" />
                            </a>
                          </li>
                        )}
                        {work.url && (
                          <li className="hover:bg-black p-1 rounded">
                            <a href={work.url} className="" target="_blank">
                              <img src={LinkIcon} alt="" className="" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <a
                    href={work.url ? work.url : "#"}
                    target={work.url && "_blank"}
                    rel="noopener noreferrer"
                    className="md:h-96 h-[350px] md:w-2/3 w-full"
                  >
                    <img
                      src={work.image}
                      className="w-full h-full md:hover:grayscale-0 md:grayscale relative hover:z-10 z-0"
                    />
                  </a>
                </div>
              </div>
            );
          }
        })}
        {showWorks < works.length && (
          <button
            className="my-8 tracking-wide font-secondary text-md w-fit p-2 border-2 border-gray-400 border-dotted hover:border-dashed rounded mx-auto text-gray-100"
            onClick={handleShowWorks}
          >
            Show More
          </button>
        )}
      </div>
    </Section>
  );
};
