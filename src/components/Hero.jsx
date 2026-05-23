import profileImage from "../assets/heroLogo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-8"
    >

      {/* Left Content */}
      <div className="max-w-2xl">

        <p className="text-gray-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Bala Sai Kumar Vemula
        </h1>

        <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
          Java Full Stack Developer
        </h2>

        <p className="max-w-2xl text-gray-400 text-lg leading-8">
          Passionate Java Full Stack Developer skilled in
          building scalable web applications and solving
          real-world problems through clean and efficient code.
        </p>

        <div className="mt-8">

          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Download Resume
          </a>

        </div>

      </div>

      {/* Right Image */}
      <div className="w-64 h-72 md:w-80 md:h-96 overflow-hidden rounded-3xl">

  <img
    src={profileImage}
    alt="Bala Sai Kumar Vemula"
    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition duration-500"
  />

</div>

    </section>
  );
};

export default Hero;