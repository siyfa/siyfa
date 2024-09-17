import { useState } from "react";
import { Section } from "../../components/style";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("trusoft");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <Section id="experience">
      <div className="max-w-screen-xl flex flex-wrap flex-col mx-auto pt-24 md:px-28 px-3">
        <div className="flex flex-wrap md:flex-row flex-col justify-left items-center mb-5">
          <h2 className="text-3xl font-primary">Where I've worked</h2>
          <span className="bg-gray-500 h-0.5 md:w-1/4 w-1/4 md:mt-0 mt-2 md:ml-5"></span>
        </div>

        <div className="mb-4 mt-2 border-b border-gray-900 dark:border-gray-700 w-fit">
          <ul
            className="flex flex-wrap -mb-px font-medium text-center tracking-wide md:text-xl  font-secondary"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "trusoft"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                id="trusoft-tab"
                data-tabs-target="#trusoft"
                type="button"
                role="tab"
                aria-controls="trusoft"
                aria-selected={activeTab === "trusoft"}
                onClick={() => handleTabClick("trusoft")}
              >
                Trusoft
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "foodtrain"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                id="foodtrain-tab"
                data-tabs-target="#foodtrain"
                type="button"
                role="tab"
                aria-controls="foodtrain"
                aria-selected={activeTab === "foodtrain"}
                onClick={() => handleTabClick("foodtrain")}
              >
                FoodTrain
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "proctorme"
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                id="proctorme-tab"
                data-tabs-target="#proctorme"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "proctorme"}
                onClick={() => handleTabClick("proctorme")}
              >
                ProctorMe
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className={`p-4 rounded-lg tracking-wide font-tetiary ${
              activeTab === "trusoft" ? "bg-transparent" : "hidden"
            }`}
            id="trusoft"
            role="tabpanel"
            aria-labelledby="trusoft-tab"
          >
            <h4 className="text-2xl">
              Lead Engineer -
              <a
                href="https://trusoftng.com"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                Trusoft
              </a>
            </h4>
            <p className="text-lg">May 2023 - Present</p>
            <h4 className="text-2xl">Backend Engineer -</h4>
            <p className="text-lg">July 2022 - March 2023</p>
            <p className="text-md tracking-widest"> - Fulltime</p>
            <ol className="mt-5 list-disc ml-5 text-lg md:w-3/4">
              <li className="mb-5">
                Actively engage in high-level meetings, leveraging technical
                expertise to influence technology-related discussions and offer
                valuable insights.
              </li>
              <li className="mb-5">
                Deliver high-quality, robust production code for diverse client
                projects, such as Cyberpay, Swiflink, Tos Funerals, Smart
                Deposit Scheme (SDS), and more.
              </li>
              <li className="mb-5">
                Oversee projects hosting and infrastructures, ensuring optimal
                server performance and reliability.
              </li>
              <li className="mb-5">
                Provide leadership within the engineering department by
                fostering collaboration, sharing knowledge, and mentoring team
                members.
              </li>
              <li className="mb-5">
                Collaborate with cross-functional teams, including designers,
                project managers, business analysts, and engineers, to translate
                creative concepts into real-world solutions for clients and
                stakeholders.
              </li>
            </ol>
          </div>
          <div
            className={`p-4 rounded-lg tracking-wide font-tetiary ${
              activeTab === "foodtrain" ? "bg-transparent" : "hidden"
            }`}
            id="foodtrain"
            role="tabpanel"
            aria-labelledby="foodtrain-tab"
          >
            <h4 className="text-2xl">
              MERN Stack Developer -
              <a
                href="https://foodtrain.co"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                FoodTrain
              </a>
            </h4>
            <p className="text-lg">May 2021 - June 2022</p>
            <p className="text-md tracking-widest"> - Fulltime</p>
            <ol className="mt-5 list-disc ml-5 text-lg md:w-3/4">
              <li className="mb-5">
                Designed and implemented a new UI interface for product
                software, accommodating additional features to target emerging
                markets.
              </li>
              <li className="mb-5">
                Sharpened debugging skills in collaborative sessions with senior
                developers and the CEO, expanding problem-solving approaches and
                expertise.
              </li>
              <li className="mb-5">
                Led the development of comprehensive technical documentation,
                incorporating Postman API blueprints and complex system
                architecture diagrams to boost team collaboration and streamline
                the development lifecycle.
              </li>
              <li className="mb-5">
                Actively pursued continuous professional growth through
                participation in webinars, conferences, and workshops, staying
                at the forefront of evolving technology trends.
              </li>
            </ol>
          </div>
          <div
            className={`p-4 rounded-lg tracking-wide font-tetiary ${
              activeTab === "proctorme" ? "bg-transparent" : "hidden"
            }`}
            id="proctorme"
            role="tabpanel"
            aria-labelledby="proctorme-tab"
          >
            <h4 className="text-2xl">
              Frontend Developer -
              <a
                href="https://proctorme.com/"
                className="text-gray-100 font-bold hover:underline ml-1"
                target="_blank"
              >
                ProctorMe
              </a>
            </h4>
            <p className="text-lg">April 2021 - October 2021</p>
            <p className="text-md"> - Contract</p>
            <ol className="mt-5 list-disc ml-5 text-lg md:w-3/4">
              <li className="mb-5">
                Leveraged React and Redux to meticulously design and construct
                reusable components, orchestrating efficient state management
                throughout the application.
              </li>
              <li className="mb-5">
                Fostered seamless collaboration with backend engineers to ensure
                smooth integration of frontend and backend components,
                optimizing overall system performance.
              </li>
              <li className="mb-5">
                Implemented responsive design principles to ensure optimal user
                experiences across various devices, enhancing accessibility and
                engagement.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
};
