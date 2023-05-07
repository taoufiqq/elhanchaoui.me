import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b>, <b>React.js</b> and <b>Vue.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "handle database, server, api using <b>Express</b> & other popular frameworks",
    Icon: FaServer,
  },
  {
    title: "API Development",
    about: "I can develop REST API using <b>Node API</b>",
    Icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Leet Code</b>",
    Icon: MdDeveloperMode,
  },
  {
    title: "UI/UX designer",
    about: "stunning user interface designer using <b>Adobe XD</b>",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Whatever",
    about: "lorem ipsum...orem ipsum...orem ipsum...orem ipsum...orem ipsum...",
    Icon: RiComputerLine,
  },
];

export const languages: ISkill[] = [
  {
    name: "Java Script",
    level: "75%",
    Icon: BsCircleFill,
  },
  {
    name: "React js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Vue js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Next js",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Nuxt js",
    level: "40%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Adobe Xd",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Figma",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "40%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  // {
  //   name: "Tatbib.ma",
  //   description: "Online Appointment Scheduling web application",
  //   image_path: "",
  //   deployed_url: "",
  //   github_url: "",
  //   category: ["react","node","express","mongo"],
  //   key_techs: ["React", "Express.js", "Node.js", "MongoDB"],
  // },
  {
    id:1,
    name: "NodTrini1",
    description: "gym management website gym management website",
    image_path: "/images/NodTrini.jpg",
    deployed_url: "https://nod-trini.vercel.app/",
    github_url: "https://github.com/taoufiqq/NodTrini",
    category: ["mongo"],
    key_techs: ["React", "Bootstrap"],
  },
  {
    id:2,
    name: "NodTrin2",
    description: "gym management website gym management website",
    image_path: "/images/NodTrini.jpg",
    deployed_url: "https://nod-trini.vercel.app/",
    github_url: "https://github.com/taoufiqq/NodTrini",
    category: ["node"],
    key_techs: ["React", "Bootstrap"],
  },
  {
    id:3,
    name: "NodTrini3",
    description: "gym management website gym management website",
    image_path: "/images/NodTrini.jpg",
    deployed_url: "https://nod-trini.vercel.app/",
    github_url: "https://github.com/taoufiqq/NodTrini",
    category: ["react"],
    key_techs: ["React", "Bootstrap"],
  },
  {
    id:4,
    name: "NodTrini4",
    description: "gym management website gym management website",
    image_path: "/images/NodTrini.jpg",
    deployed_url: "https://nod-trini.vercel.app/",
    github_url: "https://github.com/taoufiqq/NodTrini",
    category: ["react"],
    key_techs: ["React", "Bootstrap"],
  },
  {
    id:5,
    name: "NodTrini5",
    description: "gym management website gym management website",
    image_path: "/images/NodTrini.jpg",
    deployed_url: "https://nod-trini.vercel.app/",
    github_url: "https://github.com/taoufiqq/NodTrini",
    category: ["react"],
    key_techs: ["React", "Bootstrap"],
  },
  { id:6,
    name: "NodTrini6",
    description: "gym management website gym management website",
    image_path: "/images/NodTrini.jpg",
    deployed_url: "https://nod-trini.vercel.app/",
    github_url: "https://github.com/taoufiqq/NodTrini",
    category: ["react"],
    key_techs: ["React", "Bootstrap"],
  },
];