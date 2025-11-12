import avatarImg from "../assets/homegirl.png";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-4xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-xl tracking-tight">
          I’m an enthusiastic and motivated fresher passionate about web
          development and programming. Skilled in HTML, CSS, Bootstrap,
          JavaScript, and familiar with Java and Python, I enjoy solving
          problems, learning new technologies, and building responsive,
          interactive web solutions. I’m eager to start my IT career, apply my
          skills, and grow in a dynamic environment.
        </p>
        <a href="#Contact">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="image" />
      </div>
    </div>
  );
};

export default Home;
