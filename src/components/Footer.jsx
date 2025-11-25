import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between bg-[#465697] text-white p-6 md:p-12 items-start md:items-center"
    >
      <div>
        <h1 className="text-3xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-base md:text-2xl font-normal">
          Feel Free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-3">
        <li className="flex gap-3 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:gauribhamkar09@gmail.com"
            className="hover:underline break-all"
          >
            gauribhamkar09@gmail.com
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://linkedin.com/in/gauri-bhamkar-a15253228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            linkedin.com/in/gauri-bhamkar-a15253228
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/Bhamkargauri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            github.com/Bhamkargauri
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
