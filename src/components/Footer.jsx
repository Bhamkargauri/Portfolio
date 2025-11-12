import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free to reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-lg">
        <li className="flex gap-3 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:gauribhamkar09@gmail.com" className="hover:underline">
            gauribhamkar09@gmail.com
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://linkedin.com/in/gauri-bhamkar-a15253228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
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
            className="hover:underline"
          >
            github.com/Bhamkargauri
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
