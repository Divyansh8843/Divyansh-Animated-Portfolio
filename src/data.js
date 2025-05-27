import { FaGraduationCap,  FaSchool } from 'react-icons/fa'
import { LuSchool } from "react-icons/lu";
import achieve1 from "../public/acheive1.jpg"
import achieve2 from "../public/acheive2.jpeg"
import { SiMongodb, SiTailwindcss, SiJavascript, SiPython, SiFlask, SiTensorflow } from 'react-icons/si'
import {  FaPython, FaReact, FaNodeJs, FaGitAlt, FaFigma , FaCss3,FaHtml5} from 'react-icons/fa'
import { RiNextjsFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
export const cards = [
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor of Technology [C.S.E.]',
      subtitle: 'M.I.T.S. College, Gwalior',
      details: '8.67 CGPA | 2023 - 2027',
    },
    {
      icon: <FaSchool />,
      title: 'Board of Senior Secondary Education',
      subtitle: 'Kendriya Vidyalaya, Morena',
      details: '88.7 % | 2021 - 2022',
    },
    {
      icon: <LuSchool />,
      title: 'Board of  Secondary Education',
      subtitle: 'Shri TekChand Jain H.S. School, Ambah',
      details: '81.5 % | 2019 - 2020',
    },
  ]

export const technologies = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { name: 'Javascript', icon: <IoLogoJavascript/> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next js', icon: <RiNextjsFill/> },
  { name: 'MY SQL', icon: <DiMysql/> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <TbBrandCpp /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'VS Code', icon: <VscVscode /> },
]

export const Technologies = {
    'ReactJs': { icon: <FaReact className="text-[#61DAFB]" />, name: 'React' },
    'NodeJS': { icon: <FaNodeJs className="text-[#339933]" />, name: 'Node.js' },
    'MongoDB': { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
    'Deep Learning': { icon: <SiTensorflow className="text-[#FF6F00]" />, name: 'Deep Learning' },
    'Flask': { icon: <SiFlask className="text-[#000000]" />, name: 'Flask' },
    'Python': { icon: <SiPython className="text-[#3776AB]" />, name: 'Python' },
    'Tailwind': { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
    'ML': { icon: <SiTensorflow className="text-[#FF6F00]" />, name: 'Machine Learning' },
    'HTML': { icon: <FaHtml5 className="text-[#E34F26]" />, name: 'HTML' },
    'CSS': { icon: <FaCss3 className="text-[#1572B6]" />, name: 'CSS' },
    'JavaScript': { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
    'EJS':  { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'Ejs' }
}

export const projects = [
    {
      title: 'Wanderlust',
      description: 'A full-stack Airbnb clone where users can discover, book, and review unique places with interactive maps, secure logins, and rich visuals.',
      technologies: ['EJS', 'NodeJS', 'MongoDB'],
      image: '/wanderlust.png',
      live: 'https://github.com/Divyansh8843/Wanderlust-.git',
      github: 'https://github.com/Divyansh8843/Wanderlust-.git',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and interactive UI in React JS',
      technologies: ['ReactJs', 'JavaScript', 'Tailwind'],
      image: '/weatherimage.png',
      live: 'https://temperature-detection.netlify.app/',
      github: 'https://github.com/Divyansh8843/Weather-Application.git',
    },
  ]

  export const achievements = [
    {
      title: "50 days Leetcode Badge",
      description: "Maintained a 50-day streak on LeetCode by solving daily DSA challenges, demonstrating focus and dedication to continuous learning.",
      images: [achieve1,achieve2],
    },
    // Add more achievements if you want!
  ]