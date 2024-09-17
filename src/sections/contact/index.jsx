import { Section } from "../../components/style";
//
import GithubIcon from "../../assets/git.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import TwitterIcon from "../../assets/twitter.svg";

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-5 justify-center items-center">
        <div className="md:mb-5">
          <h2 className="text-3xl font-secondary mt-10">What's Next?</h2>
        </div>
        <div className="tracking-wide text-center">
          <h2 className="my-8 text-6xl font-secondary">Get In Touch</h2>
          <p className="md:w-2/4 w-full mx-auto my-16 text-lg font-tetiary">
            While I’m not actively seeking new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a
            href="mailto:siyanbolafaruk@gmail.com"
            className="border-2 border-dashed hover:border-dotted p-5 rounded text-gray-100 border-gray-400"
            target="_blank"
          >
            Say Hello
          </a>
          <div className="md:mt-40 mt-72">
            <ul className="flex w-full align-middle justify-center space-x-7 my-4 md:hidden">
              <li className="">
                <a
                  href="https://www.x.com/iamsiyfa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={TwitterIcon} alt="github profile" />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/siyanbolafaruk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="github profile" />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.github.com/siyfa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubIcon} alt="github profile" />
                </a>
              </li>
            </ul>
            <a
              href="https://github.com/siyfa/v1"
              className="mb-5 block hover:underline font-tetiary"
            >
              Designed & Built by Siyanbola Faruk
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
