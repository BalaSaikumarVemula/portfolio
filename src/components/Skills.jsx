import SkillCard from "./SkillCard";

const Skills = () => {

  const skills = [
    "Java",
    "Object-Oriented Programming",
    "Exception Handling",
    "Data Structures & Algorithms",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Context API",
    "JDBC",
    "Servlets",
    "Hibernate",
    "Spring Boot",
    "MySQL",
    "GitHub",
    "Git",
    "Linux",
    "Postman",
    "Maven",
    "VS code",
    "Apache Tomcat",
    "Problem Solving"
  ];

  return (
    <section id="skills" className="bg-black text-white px-8 py-24">

      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}

      </div>

    </section>
  );
};

export default Skills;