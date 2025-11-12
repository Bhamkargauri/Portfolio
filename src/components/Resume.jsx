const Resume = () => {
  return (
    <div
      id="Resume"
      className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Resume
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        You can view or download my latest resume below.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="public/gauriB_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          View Resume
        </a>

        <a
          href="public/gauriB_resume.pdf"
          download
          className="text-white py-2 px-4 text-sm md:text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
