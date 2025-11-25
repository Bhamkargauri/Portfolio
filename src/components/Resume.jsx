const Resume = () => {
  return (
    <div
      id="Resume"
      className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg 
      p-6 sm:p-8 md:p-12 mx-4 md:mx-20 mb-20 mt-0 flex flex-col"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Resume</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-sm md:text-md max-w-xl">
          You can view or download my Resume.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="public/gauriBhamkar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-6 text-sm hover:opacity-85 
            hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697] text-center"
          >
            View Resume
          </a>

          <a
            href="public/gauriBhamkar_resume.pdf"
            download
            className="text-white py-2 px-6 text-sm hover:opacity-85 
            hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697] text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
