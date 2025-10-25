const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-500">M.Ramadanu</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
