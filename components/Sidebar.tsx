import Image from "next/legacy/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiDownload } from "react-icons/hi";
import { useTheme } from "next-themes";
import me from "../public/images/me.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={me}
        alt="me vatar"
        className="mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">EL HANCHAOUI</span>
        <br />
        Taoufiq
      </h3>
      <p
        className="flex justify-center w-9/12 px-2 py-2 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-200"
        style={{ marginLeft: "13%" }}
      >
        Web & Mobile Developer
      </p>
      <a
        className="flex items-center justify-center w-9/12 px-2 py-2 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-200"
        style={{ marginLeft: "13%" }}
        href="/images/ELHANCHAOUI_Taoufiq.pdf"
        download="ELHANCHAOUI_Taoufiq.pdf"
      >
        <HiDownload className="w-4 h-4 mr-2" />
        Download Resume
      </a>

      {/*==== SOCIALS ICONS==== */}
      <div className="flex justify-around w-9/12 mx-auto text-green md:w-full">
        <a href="https://github.com/taoufiqq">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/taoufiq-elhanchaoui/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://twitter.com/ElhanchaouiT">
          <AiFillTwitterSquare className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* ====Address==== */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 font-semibold">
          <GoLocation />
          <span>Casablanca,Morrocco</span>
        </div>
        <p className="my-2 font-semibold">t.elhanchaoui@gmail.com</p>
        <p className="my-2 font-semibold">0616774152</p>
      </div>
      {/* ====Email Button==== */}
      <button
        className="w-6/12 px-5 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open("mailto:t.elhanchaoui@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="flex justify-center w-6/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        style={{ marginLeft: "25%" }}
      >
        {theme === "light" ? (
          <MdDarkMode className="flex w-6 h-6 text-black" />
        ) : (
          <MdLightMode className="w-6 h-6 " />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
