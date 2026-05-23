const Contact = () => {
  return (

    <section
      id="contact"
      className="bg-black text-white px-8 py-24"
    >

      <h2 className="text-4xl font-bold mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl">

        <p className="text-gray-400 text-lg leading-8 mb-10">
          I am open to internships, collaborations,
          and software development opportunities.
        </p>

        <div className="flex flex-col gap-6">

          <a
            href="mailto:vemulabalasai123@gmail.com"
            className="text-xl hover:text-gray-400 transition"
          >
            Email: vemulabalasai123@gmail.com
          </a>

          <a
            href="https://github.com/BalaSaiKumarVemula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bala-sai-kumar-vemula-821a49264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;