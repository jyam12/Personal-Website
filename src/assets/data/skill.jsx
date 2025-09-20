import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaJira,
  FaPuzzlePiece,
  FaComments,
  FaUsers,
  FaSyncAlt,
  FaVuejs,
  FaLanguage,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { CiMicrochip } from "react-icons/ci";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import {
  SiCplusplus,
  SiC,
  SiLibreofficemath,
  SiPostman,
  SiTerraform,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiTensorflow,
  SiSpringboot,
  SiDjango,
  SiFastapi,
  SiN8N,
} from "react-icons/si";

export const skillCategories = [
  {
    id: 1,
    name: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: <FaPython className="w-12 h-12" />,
      },
      {
        name: "C++",
        icon: <SiCplusplus className="w-12 h-12" />,
      },
      {
        name: "C",
        icon: <SiC className="w-12 h-12" />,
      },
      {
        name: "JavaScript (ES6+)",
        icon: <IoLogoJavascript className="w-12 h-12" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-12 h-12" />,
      },
      {
        name: "SQL & NoSQL",
        icon: <FaDatabase className="w-12 h-12" />,
      },
      {
        name: "Verilog",
        icon: <CiMicrochip className="w-12 h-12" />,
      },
      {
        name: "Matlab",
        icon: <SiLibreofficemath className="w-12 h-12" />,
      },
    ],
  },
  {
    id: 2,
    name: "Tools",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker className="w-12 h-12" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="w-12 h-12" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="w-12 h-12" />,
      },
      {
        name: "Jira",
        icon: <FaJira className="w-12 h-12" />,
      },
      {
        name: "Terraform",
        icon: <SiTerraform className="w-12 h-12" />,
      },
      {
        name: "Redis",
        icon: <SiRedis className="w-12 h-12" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-12 h-12" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-12 h-12" />,
      },
      {
        name: "Microsoft Office",
        icon: <PiMicrosoftExcelLogo className="w-12 h-12" />,
      },
    ],
  },
  {
    id: 3,
    name: "Frameworks",
    skills: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="w-12 h-12" />,
      },
      {
        name: "React.js",
        icon: <FaReact className="w-12 h-12" />,
      },
      {
        name: "Vue.js",
        icon: <FaVuejs className="w-12 h-12" />,
      },
      {
        name: "React Native",
        icon: <FaReact className="w-12 h-12" />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="w-12 h-12" />,
      },
      {
        name: "Django",
        icon: <SiDjango className="w-12 h-12" />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="w-12 h-12" />,
      },
      {
        name: "LangChain",
        icon: <SiN8N className="w-12 h-12" />,
      },
    ],
  },
  {
    id: 4,
    name: "Soft Skills",
    skills: [
      {
        name: "Problem Solving",
        icon: <FaPuzzlePiece className="w-12 h-12" />,
      },
      {
        name: "Communication",
        icon: <FaComments className="w-12 h-12" />,
      },
      {
        name: "Teamwork",
        icon: <FaUsers className="w-12 h-12" />,
      },
      {
        name: "Adaptability",
        icon: <FaSyncAlt className="w-12 h-12" />,
      },
    ],
  },
  {
    id: 5,
    name: "Languages",
    skills: [
      {
        name: "Chinese (Cantonese & Mandarin)",
        icon: <FaLanguage className="w-12 h-12" />,
        description: "Native Proficiency",
      },
      {
        name: "English",
        icon: <FaLanguage className="w-12 h-12" />,
        description: "Professional Working Proficiency",
      },
      {
        name: "Japanese",
        icon: <FaLanguage className="w-12 h-12" />,
        description: "Beginner",
      },
    ],
  },
];
