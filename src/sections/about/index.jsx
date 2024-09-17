import { Section } from "../../components/style";
import Me from "../../assets/images/me.jpg";

export const About = () => {
  return (
    <Section id="about">
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-5">
        <div className="flex flex-wrap justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">About Me</h2>
          <span className="bg-gray-500 h-0.5 w-1/4 ml-5"></span>
        </div>
        <div className="flex h-auto md:flex-row flex-col-reverse items-center justify-bewteen w-ful">
          <div className="text-lg font-tetiary tracking-wider md:w-1/2 w-full">
            <p className="mb-5">
              Hello! My name is Faruk and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to build a blog for a friend with just HTML & CSS —
              turns out there are more in web development than just HTML & CSS!
            </p>
            <p className="mb-5">
              Today, thanks to the opportunities I've had to work in the
              financial, logistics, e-commerce, and education sectors. I've
              worked in a remote setting, with a variety of teams, and at
              start-ups. My main focus these days is building accessible,
              inclusive products and digital experiences at
              <a
                href="https://trusoftng.com"
                className="text-gray-100 font-bold hover:underline mx-1"
                target="_blank"
              >
                Trusoft
              </a>
              for a variety of clients.
            </p>
            <p className="mb-5">
              I also deep dived into Cloud DevOps Engineering. I have few
              years of experience in managing servers and infastructures. I
              recently got certified as a Cloud DevOps Engineer at ALX/Udacity
              after going through several learning and testing phases.
            </p>
            <div className="">
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="flex flex-wrap list-disc ml-5">
                <li>Node</li>
                <li className="ml-14">JavaScript (ES6+)</li>
              </ul>
              <ul className="flex flex-wrap list-disc ml-5">
                <li>React</li>
                <li className="ml-14">TypeScript</li>
              </ul>
              <ul className="flex flex-wrap list-disc ml-5">
                <li>AWS</li>
                <li className="ml-14">Docker</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:ml-5 ml-0 md-mb-0 mb-8">
            <div className="md:h-96 md:w-96 h-[50vh] w-full bg-gray-300 relative rounded">
              <img
                src={Me}
                alt="siyanbola faruk"
                className="object-cover md:h-full h-[50vh] w-full absolute md:left-3 left-1 hover:left-0 md:bottom-3 bottom-1 hover:bottom-0 mix-blend-multiply brightness-50 hover:brightness-100 rounded transition-all ease-in-out delay-150"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
