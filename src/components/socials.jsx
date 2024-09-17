import { SocialWrapper } from "./style";
import "animate.css";
//
import GithubIcon from "../assets/git.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";

export const Socials = () => {
  return (
    <SocialWrapper>
      <div className="animate__animated animate__zoomInDown md:block hidden">
        <div className="flex w-full justify-between">
          <ul className="font-tetiary tracking-wider flex flex-row align-middle rotate-90 ml-[-180px] space-x-8">
            <li className="-rotate-90">
              <a
                href="https://www.x.com/iamsiyfa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} alt="github profile" />
              </a>
            </li>
            <li className="-rotate-90">
              <a
                href="https://www.linkedin.com/in/siyanbolafaruk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="github profile" />
              </a>
            </li>
            <li className="-rotate-90">
              <a
                href="https://www.github.com/siyfa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="github profile" />
              </a>
            </li>
            <li className="h-[1px] w-[300px] bg-gray-500 mt-3 ml-2"></li>
          </ul>
          <ul className="font-tetiary tracking-wider flex flex-row align-middle rotate-90 mr-[-220px] space-x-5">
            <li className="">
              <a
                href="mailto:siyanbolafaruk@gmail.com"
                target="_blank"
              >
                siyanbolafaruk@gmail.com
              </a>
            </li>
            <li className="h-[1px] w-[350px] bg-gray-500 mt-3 ml-2"></li>
          </ul>
        </div>
      </div>
    </SocialWrapper>
  );
};
