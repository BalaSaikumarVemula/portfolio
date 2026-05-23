const Navbar = () => {
  return (

    <nav className="flex justify-between items-center px-8 py-5 bg-black text-white sticky top-0 z-50">

      <h1 className="text-2xl font-bold">
        Bala Sai Kumar
      </h1>

      <ul className="hidden md:flex gap-8 text-lg">

        <li>
          <a
            href="#home"
            className="hover:text-gray-400 transition"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-gray-400 transition"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-gray-400 transition"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-gray-400 transition"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-gray-400 transition"
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;