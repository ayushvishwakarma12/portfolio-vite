const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex justify-between items-center p-[10px] lg:p-10">
        <p>&copy; 2024 All Right Reserved</p>
        <div className="flex items-center gap-2 lg:gap-5 font-normal">
          <a
            className="hover:underline underline-offset-4 transition-all scale-100 hover:scale-105 duration-200 ease-in-out"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:underline underline-offset-4 transition-all scale-100 hover:scale-105 duration-200 ease-in-out"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:underline underline-offset-4 transition-all scale-100 hover:scale-105 duration-200 ease-in-out"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:underline underline-offset-4 transition-all scale-100 hover:scale-105 duration-200 ease-in-out"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
