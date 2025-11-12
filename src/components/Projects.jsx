import carease from "../assets/carease.png";
import crud from "../assets/crud.png";
import dailyPlanner from "../assets/dailyplanner.png";
import foodImg from "../assets/foodapp.png";
import monsoonImg from "../assets/monsoon.png";
import vehicleLog from "../assets/vehicleLog.png";
const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    img: foodImg,
    content:
      "Fetched restaurant data from API with search, cuisine filter, veg/non-veg toggle, and top-rated view.",
    url: "https://food-delivery-app-phi-inky.vercel.app/",
    github: "https://github.com/Bhamkargauri/foodDeliveryApp",
  },
  {
    id: 2,
    title: "Daily Planner",
    img: dailyPlanner,
    content:
      "A Daily Planner app built with React and Bootstrap to add, edit, and delete tasks efficiently.",
    url: "https://daily-planner-app-beta.vercel.app/",
    github: "https://github.com/Bhamkargauri/dailyPlannerApp",
  },
  {
    id: 3,
    title: "Crud Operation",
    img: crud,
    content:
      "Developed a responsive CRUD application with HTML, CSS, Bootstrap, and JS.",
    url: " https://bhamkargauri.github.io/CRUD-Javascript/",
    github: "https://github.com/Bhamkargauri/CRUD-Javascript",
  },
  {
    id: 4,
    title: "Vehicle Maintenance Log",
    content:
      "Built using HTML, Tailwind, and JavaScript with add/view/delete features and localStorage data persistence.",
    img: vehicleLog,
    url: "https://bhamkargauri.github.io/Vehicle-Maintenance/",
    github: "https://github.com/Bhamkargauri/Vehicle-Maintenance",
  },
  {
    id: 5,
    title: "Monsoon Recipe App",
    img: monsoonImg,
    content:
      "Created a responsive recipe web app using React JS and Bootstrap.",
    url: "https://new-monsoon-chi.vercel.app/",
    github: "https://github.com/Bhamkargauri/New-Monsoon",
  },
  {
    id: 6,
    title: "Car Rent App",
    img: carease,
    content:
      "Developed a car rental platform with React and JSON Server, featuring car listings and booking functionality.",
    url: "https://car-ease.vercel.app/",
    github: "https://github.com/Bhamkargauri/CarEase",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-1 flex flex-wrap justify-center gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-4 md:p-6 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl 
                 w-full sm:w-[80%] lg:w-[30%] transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-56 object-cover rounded-md mb-4"
              src={p.img}
              alt={p.title}
            />
            <h3 className="px-2 text-xl md:text-2xl font-bold text-white leading-normal">
              {p.title}
            </h3>
            <p className="px-2 text-sm md:text-md text-gray-300 leading-tight py-2">
              {p.content || "Content"}
            </p>
            <div className="mt-auto p-2 flex gap-3 justify-center">
              <a href={p.url} target="_blank">
                <button className="text-white py-2 px-4 text-sm md:text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                  Demo
                </button>
              </a>
              <a href={p.github} target="_blank">
                <button className="text-white py-2 px-4 text-sm md:text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
