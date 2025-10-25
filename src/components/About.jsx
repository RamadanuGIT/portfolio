import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, []);

  const skills = [
    { name: "React.js", color: "bg-cyan-100 text-cyan-600", aos: "fade-up" },
    { name: "Node.js", color: "bg-green-100 text-green-600", aos: "fade-up" },
    { name: "Express.js", color: "bg-gray-100 text-gray-600", aos: "fade-up" },
    {
      name: "MongoDB",
      color: "bg-emerald-100 text-emerald-600",
      aos: "fade-up",
    },
    {
      name: "JavaScript (ES6+)",
      color: "bg-yellow-100 text-yellow-600",
      aos: "fade-up",
    },
    {
      name: "Tailwind CSS",
      color: "bg-blue-100 text-blue-600",
      aos: "fade-up",
    },
    {
      name: "JWT Auth",
      color: "bg-purple-100 text-purple-600",
      aos: "fade-up",
    },
    {
      name: "Git & GitHub",
      color: "bg-orange-100 text-orange-600",
      aos: "fade-up",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-50 py-20 px-6 md:px-16 text-center flex flex-col lg:justify-center"
      >
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-700"
        >
          About <span className="text-cyan-500">Me</span>
        </h2>

        <p
          data-aos="fade-up"
          className="text-gray-600 text-lg md:w-2/3 mx-auto mb-10"
        >
          I’m a <b className="text-cyan-500">Fullstack Developer</b> who loves
          building functional and visually appealing web apps. I enjoy turning
          ideas into real, working digital experiences that focus on simplicity,
          speed, and great user experience.
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              data-aos={skill.aos}
              data-aos-delay={i * 100}
              className={`rounded-xl shadow-sm hover:shadow-md p-4 font-semibold ${skill.color} transition-transform transform hover:-translate-y-1`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
