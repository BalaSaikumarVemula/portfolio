const ProjectCard = ({
  title,
  description,
  tech,
  image,
  githubLink,
  liveLink
}) => {

  return (

    <div className="bg-zinc-900 rounded-2xl p-6 hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover rounded-xl mb-5"
      />

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-7 mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mb-6">

        {tech.map((item, index) => (

          <span
            key={index}
            className="bg-black px-3 py-1 rounded-full text-sm border border-gray-700"
          >
            {item}
          </span>

        ))}

      </div>

      <div className="flex gap-4">

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-300 transition"
        >
          GitHub
        </a>

        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition"
        >
          Live Demo
        </a>

      </div>

    </div>

  );
};

export default ProjectCard;