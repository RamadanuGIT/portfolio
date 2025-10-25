const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-50 py-20 px-6 md:px-16 text-center flex flex-col lg:justify-center"
      >
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-700"
        >
          Get in <span className="text-cyan-500">Touch</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-600 mb-10 md:w-2/3 mx-auto"
        >
          Interested in collaborating or just want to say hi? Feel free to reach
          out — I’m always open to new opportunities and projects.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="max-w-md mx-auto bg-gray-50 shadow-lg rounded-2xl p-8"
        >
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Footer Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 text-center"
        >
          <p className="text-gray-600 mb-3">Or find me on</p>
          <div className="flex gap-5 justify-center text-cyan-500 text-2xl">
            <a
              href="https://github.com/RamadanuGIT"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github hover:text-cyan-600 transition-colors"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin hover:text-cyan-600 transition-colors"></i>
            </a>
            <a href="mailto:ramadanu.dev@gmail.com">
              <i className="fas fa-envelope hover:text-cyan-600 transition-colors"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
