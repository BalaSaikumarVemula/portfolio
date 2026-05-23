import ProjectCard from "./ProjectCard";

import knightBiteLogo from "../assets/knightBiteLogo.webp";
import  weatherLogo from "../assets/weatherLogo.jpg";
import calculatorLogo from "../assets/calculatorPic.jpg";
import toDoListLogo from "../assets/toDoListLogo.webp";

const Projects = () => {

  const projects = [

    {
      title: "Knight Bite Clone App",

      description:
        "A responsive frontend clone of the Knight Bite website built using HTML and CSS, featuring modern UI design, responsive layouts, navigation sections, and visually appealing styling to practice real-world web development concepts.",

      tech: ["HTML", "CSS"],

      image: knightBiteLogo,

      githubLink:
        "https://github.com/BalaSaiKumarVemula/knight-bite",

      liveLink:
        "https://balasaikumarvemula.github.io/knight-bite/knight-bite"
    },

    {
      title: "Weather App",

      description:
        "A responsive weather application built with React that fetches real-time weather data from the OpenWeather API, displaying temperature, humidity, wind speed, and weather conditions with a clean and interactive user interface.",

      tech: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "OpenWeather API"
      ],

      image: weatherLogo,

      githubLink:
        "https://github.com/BalaSaikumarVemula/weather-app",

      liveLink:
        "https://balasaikumarvemula.github.io/weather-app/"
    },

    {
      title: "Calculator",

      description:
        "A responsive calculator application built using HTML, CSS, and JavaScript that performs basic arithmetic operations with a clean user interface, interactive buttons, and real-time expression evaluation.",

      tech: ["HTML", "CSS", "JavaScript"],

      image: calculatorLogo,

      githubLink:
        "https://github.com/BalaSaikumarVemula/responsive-calculator",

      liveLink:
        "https://balasaikumarvemula.github.io/responsive-calculator/"
    },

    {
      title: "To-Do-List",

      description:
        "A responsive and interactive To-Do List application built using HTML, CSS, and JavaScript that allows users to add, edit, delete, and manage daily tasks efficiently with a clean and user-friendly interface.",

      tech: ["HTML", "CSS", "JavaScript"],

      image: toDoListLogo,

      githubLink:
        "https://github.com/BalaSaikumarVemula/To-Do-List",

      liveLink:
        "https://balasaikumarvemula.github.io/To-Do-List/"
    }

  ];

  return (

    <section id="projects" className="bg-black text-white px-8 py-24">

      <h2 className="text-4xl font-bold mb-14">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (

          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            image={project.image}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />

        ))}

      </div>

    </section>
  );
};

export default Projects;