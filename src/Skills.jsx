import { FaJava, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {} from "react-icons/ri";
import {
  SiSelenium,
  SiTestcafe,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiExpress,
  SiPython,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const techStack = [
    {
      id: 1,
      icon: <SiHtml5 size={80} className="text-red-500" />,
      title: "HTML",
      style: "shadow-red-900",
    },
    {
      id: 2,
      icon: <SiCss3 size={80} className="text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-900",
    },
    {
      id: 3,
      icon: <SiJavascript size={80} className="text-yellow-500" />,
      title: "JS",
      style: "shadow-yellow-900",
    },
    {
      id: 4,
      icon: <SiReact size={80} className="text-blue-500" />,
      title: "REACT",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      icon: <SiBootstrap size={80} className="text-[#8912FC]" />,
      title: "Bootstrap",
      style: "shadow-[#0073E6]",
    },
    {
      id: 6,
      icon: <SiTailwindcss size={80} className="text-[#38BDF8]" />,
      title: "TAILWIND",
      style: "shadow-[#38BDF8]",
    },
    {
      id: 7,
      icon: <FaNodeJs size={80} className="text-[#417E38]" />,
      title: "Node.js",
      style: "shadow-[#3178C6]",
    },
    {
      id: 8,
      icon: <SiRedux size={80} className="text-[#764ABC]" />,
      title: "REDUX",
      style: "shadow-[#764ABC]",
    },
    {
      id: 9,
      icon: <SiExpress size={80} className="text-orange-500" />,
      title: "Express",
      style: "shadow-orange-800",
    },
    {
      id: 10,
      icon: <SiPython size={80} className="text-[#1E415D]" />,
      title: "Python",
      style: "shadow-green-800",
    },
    {
      id: 11,
      icon: <SiMongodb size={80} className="text-[#00ED64]" />,
      title: "mongodb",
      style: "shadow-[#3093b8]",
    },
    {
      id: 12,
      icon: <FaGitAlt size={80} className="text-orange-600" />,
      title: "git",
      style: "shadow-orange-700",
    },
  ];

  const techStackDiv = techStack.map(({ id, icon, title, style }) => (
    <div
      key={id}
      className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <div className="w-20 mx-auto ">{icon}</div>
      <p className="mt-2">{title}</p>
    </div>
  ));
  return (
    <div
      id="Skills"
      className="md:h-screen w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-12">
          {techStackDiv}
        </div>
      </div>
    </div>
  );
}
