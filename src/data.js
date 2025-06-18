import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import achieve1 from "../public/acheive1.jpg";
import achieve3 from "../public/acheive3.png";
import achieve2 from "../public/acheive2.jpeg";
import achieve4 from "../public/acheive4.png";
import achieve5 from "../public/achieve5.png";
import achieve6 from "../public/acheive6.png";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiFlask,
  SiTensorflow,
} from "react-icons/si";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
export const cards = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Technology [C.S.E.]",
    subtitle: "M.I.T.S. College, Gwalior",
    details: "8.67 CGPA | 2023 - 2027",
  },
  {
    icon: <FaSchool />,
    title: "Board of Senior Secondary Education",
    subtitle: "Kendriya Vidyalaya, Morena",
    details: "88.7 % | 2021 - 2022",
  },
  {
    icon: <LuSchool />,
    title: "Board of  Secondary Education",
    subtitle: "Shri TekChand Jain H.S. School, Ambah",
    details: "81.5 % | 2019 - 2020",
  },
];

export const technologies = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3 /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Javascript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next js", icon: <RiNextjsFill /> },
  { name: "MY SQL", icon: <DiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C++", icon: <TbBrandCpp /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "VS Code", icon: <VscVscode /> },
];

export const Technologies = {
  ReactJs: { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
  NodeJS: { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
  MongoDB: { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
  DeepLearning: {
    icon: <SiTensorflow className="text-[#FF6F00]" />,
    name: "Deep Learning",
  },
  Express: { icon: <FaNodeJs className="text-[#FF6F00]" />, name: "Express" },
  Flask: { icon: <SiFlask className="text-[#000000]" />, name: "Flask" },
  Python: { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
  Tailwind: {
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    name: "Tailwind",
  },
  ML: {
    icon: <SiTensorflow className="text-[#FF6F00]" />,
    name: "Machine Learning",
  },
  HTML: { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML" },
  CSS: { icon: <FaCss3 className="text-[#1572B6]" />, name: "CSS" },
  JavaScript: {
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    name: "JavaScript",
  },
  EJS: { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "Ejs" },
  "Next Js": {
    icon: <RiNextjsFill className="text-[#E34F26]" />,
    name: "Next Js",
  },
  AI: {
    icon: <GiArtificialIntelligence className="text-[#06B6D4]" />,
    name: "AI",
  },
};
export const projects = [
  {
    title: "Wanderlust",
    description:
      "A full-stack Airbnb clone where users can discover, book, and review unique places with interactive maps, secure logins, and rich visuals.",
    technologies: ["EJS", "NodeJS", "MongoDB"],
    image: "/wanderlust.png",
    live: "https://github.com/Divyansh8843/Wanderlust-.git",
    github: "https://github.com/Divyansh8843/Wanderlust-.git",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts and interactive UI in React JS",
    technologies: ["ReactJs", "JavaScript", "Tailwind"],
    image: "/weatherimage.png",
    live: "https://temperature-detection.netlify.app/",
    github: "https://github.com/Divyansh8843/Weather-Application.git",
  },
  {
    title: "Eyecue-AI-Object-Detection",
    description:
      "EyeCue AI is a browser-based object detection platform built with Next.js and Tailwind CSS, delivering real-time AI-powered insights through a sleek, responsive interface.",
    technologies: ["Next Js", "Tailwind", "AI"],
    image:
      "https://www.visionplatform.ai/wp-content/uploads/2024/01/object-detection.png",
    live: "https://eyecue-object-detection.vercel.app/",
    github: "https://github.com/Divyansh8843/Eyecue-Object-Detection.git",
  },
  {
    title: "Zibby-Ride",
    description:
      "Built a full-stack Uber Clone using the MERN stack with real-time ride booking, Stripe payment integration, and role-based authentication. Implemented advanced security with JWT, protected routes, and Google Maps for live tracking.",
    technologies: ["ReactJs", "Tailwind", "NodeJS", "MongoDB", "Express"],
    image: "/Zibbyride.png",
    live: "",
    github: "https://github.com/Divyansh8843/ZippyRide.git",
  },
];

export const achievements = [
  {
    title: "Leetcode Badges",
    description:
      "Maintained a 50-day and 100-day streak on LeetCode by solving daily DSA challenges, demonstrating focus and dedication to continuous learning.",
    images: [achieve1, achieve2],
    badge: "/badge.png",
  },
  {
    title: "Certification Courses",
    description:
      "Completed certified courses in DSA and Web Development, sharpening problem-solving and coding skills. Blended logic with design to build efficient and responsive web solutions.",
    images: [achieve3, achieve4],
    badge: "https://cdn-icons-png.flaticon.com/512/1078/1078952.png",
  },
  {
    title: "Hackathons Certificate",
    description:
      "Participated in college-level hackathons, building creative tech solutions within tight deadlines. Gained hands-on experience in teamwork, innovation, and full-stack development",
    badge: "https://cdn-icons-png.flaticon.com/512/7238/7238706.png",
    images: [achieve5, achieve6],
  },
];
