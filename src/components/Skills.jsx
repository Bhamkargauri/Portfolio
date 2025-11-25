import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiGithub,
  SiMongodb,
  SiPostman,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import eclipseImg from "../assets/eclipse1.png";
import javaImg from "../assets/java.png";
import mySqlImg from "../assets/mysqlimg.png";
import pythonImg from "../assets/python.png";
import vscodeImg from "../assets/vscode.png";

const Skills = () => {
  return (
    // <div id="Skills" className="p-10 md:p-24">
    //   <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
    //   {/* Technologies */}
    //   <div className="flex flex-wrap items-center justify-around">
    //     <h1 className="text-xl text-white md:text-2xl font-semibold leading-normal">
    //       Technologies
    //     </h1>
    //     <div className="flex flex-wrap md:w-2/3 md:p-12 py-10 gap-2">
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <FaHtml5 color="#E34F26" size={50} />
    //         <p className="text-white text-sm">Html</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <FaCss3 color="#1572b6" size={50} />
    //         <p className="text-white text-sm ">Css</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <FaReact color="#61DAFB" size={50} />
    //         <p className="text-white text-sm">ReactJs</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <FaJs color="#F7DF1E" size={50} />
    //         <p className="text-white text-sm">JavaScript</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <FaBootstrap color="#8a00c2" size={50} />
    //         <p className="text-white text-sm">Bootstrap</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <SiTailwindcss color="#00BFFF" size={50} />
    //         <p className="text-white text-sm">Tailwind</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <img src={javaImg} style={{ width: "50px", height: "50px" }} />
    //         <p className="text-white text-sm">Java</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <img src={mySqlImg} style={{ width: "50px", height: "50px" }} />
    //         <p className="text-white text-sm">MySql</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <SiSpringboot color="#48E736" size={50} />
    //         <p className="text-white text-sm">Springboot</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <img src={pythonImg} style={{ width: "50px", height: "50px" }} />
    //         <p className="text-white text-sm">Python</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <SiMongodb color="#6BCC37" size={50} />
    //         <p className="text-white text-sm">MongoDB</p>
    //       </span>
    //     </div>
    //   </div>

    //   {/* Tools & Platforms */}
    //   <div className="flex flex-wrap items-center justify-around">
    //     <h1 className="text-xl text-white md:text-2xl font-semibold leading-normal">
    //       Tools & Platforms
    //     </h1>
    //     <div className="flex flex-wrap md:w-2/3 md:p-12 py-10 gap-2">
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <SiPostman color="#FC7A08" size={50} />
    //         <p className="text-white text-sm">Postman</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <img src={vscodeImg} style={{ width: "50px", height: "50px" }} />
    //         <p className="text-white text-sm">VS Code</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <SiGithub color="#FFF" size={50} />
    //         <p className="text-white text-sm">Github</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <img src={eclipseImg} style={{ width: "50px", height: "50px" }} />
    //         <p className="text-white text-sm">Eclipse</p>
    //       </span>
    //       <span className="p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center">
    //         <SiSpring color="#48E736" size={50} />
    //         <p className="text-white text-sm">SpringToolSuite</p>
    //       </span>
    //     </div>
    //   </div>
    // </div>

    <div id="Skills" className="p-6 md:p-20">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8">Skills</h1>

      {/* Technologies */}
      <div className="flex flex-wrap items-center justify-around mb-12">
        <h2 className="text-xl text-white md:text-2xl font-semibold leading-normal mb-6">
          Technologies
        </h2>
        <div className="flex flex-wrap justify-center md:w-2/3 gap-4 md:gap-6">
          {/* Common Style for Each Skill */}
          {[
            { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
            { icon: <FaCss3 color="#1572b6" />, label: "CSS" },
            { icon: <FaReact color="#61DAFB" />, label: "ReactJS" },
            { icon: <FaJs color="#F7DF1E" />, label: "JavaScript" },
            { icon: <FaBootstrap color="#8a00c2" />, label: "Bootstrap" },
            { icon: <SiTailwindcss color="#00BFFF" />, label: "Tailwind" },
          ].map((skill, i) => (
            <span
              key={i}
              className="p-3 sm:p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center w-20 sm:w-24 md:w-28"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl">
                {skill.icon}
              </div>
              <p className="text-white text-xs sm:text-sm mt-2">
                {skill.label}
              </p>
            </span>
          ))}

          {/* Image-based skills */}
          {[
            { img: javaImg, label: "Java" },
            { img: mySqlImg, label: "MySQL" },
            { icon: <SiSpringboot color="#48E736" />, label: "Spring Boot" },
            { img: pythonImg, label: "Python" },
            { icon: <SiMongodb color="#6BCC37" />, label: "MongoDB" },
          ].map((skill, i) => (
            <span
              key={i}
              className="p-3 sm:p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center w-20 sm:w-24 md:w-28"
            >
              {skill.img ? (
                <img
                  src={skill.img}
                  className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain"
                  alt={skill.label}
                />
              ) : (
                <div className="text-3xl sm:text-4xl md:text-5xl">
                  {skill.icon}
                </div>
              )}
              <p className="text-white text-xs sm:text-sm mt-2">
                {skill.label}
              </p>
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="flex flex-wrap items-center justify-around mb-12">
        <h2 className="leading-normal text-xl md:text-2xl text-white font-semibold mb-6">
          Tools & Platforms
        </h2>
        <div className="flex flex-wrap justify-center md:w-2/3 gap-4 md:gap-6">
          {[
            { icon: <SiPostman color="#FC7A08" />, label: "Postman" },
            { img: vscodeImg, label: "VS Code" },
            { icon: <SiGithub color="#FFF" />, label: "GitHub" },
            { img: eclipseImg, label: "Eclipse" },
            { icon: <SiSpring color="#48E736" />, label: "Spring Tool Suite" },
          ].map((tool, i) => (
            <span
              key={i}
              className="p-3 sm:p-4 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center text-center w-20 sm:w-24 md:w-28"
            >
              {tool.img ? (
                <img
                  src={tool.img}
                  className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain"
                  alt={tool.label}
                />
              ) : (
                <div className="text-3xl sm:text-4xl md:text-5xl">
                  {tool.icon}
                </div>
              )}
              <p className="text-white text-xs sm:text-sm mt-2">{tool.label}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
