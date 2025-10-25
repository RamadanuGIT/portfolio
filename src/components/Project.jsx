import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, []);

  const projects = [
    {
      title: "Coffe Shop APP",
      desc: "A simple coffe shop app built with React and Node.js.",
      tech: "React, Express, MongoDB",
      image: "/coffeshop.png",
      demo: "https://your-todo-demo-link.com",
      code: "https://github.com/RamadanuGIT/coffe-shop.git",
    },
    {
      title: "RentCar",
      desc: "A digital top-up platform with internal balance system.",
      tech: "NextJs, PostgreSQL, Prisma",
      image: "/rentcar.png",
      demo: "https://your-topuphub-demo.com",
      code: "https://github.com/username/topuphub",
    },
    {
      title: "Portfolio Website",
      desc: "A responsive personal portfolio showcasing my projects and skills.",
      tech: "React, Tailwind CSS, AOS",
      image: "/images/portfolio.png",
      demo: "https://yourportfolio.com",
      code: "https://github.com/username/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-20 px-6 md:px-16 text-center flex flex-col lg:justify-center"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-700"
      >
        My <span className="text-cyan-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            data-aos-delay={i * 150}
            className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3">{project.desc}</p>
              <span className="text-sm text-cyan-600 font-medium block mb-4">
                {project.tech}
              </span>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition"
                >
                  View Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500 text-cyan-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-50 transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
