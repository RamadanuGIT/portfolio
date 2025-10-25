import React from "react";

const HeroPage = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen flex flex-wrap w-full items-center bg-white"
      >
        <div className="w-1/2 h-screen max-lg:w-full max-lg:h-1/2 flex items-center justify-center">
          <div className="px-6 mx-auto">
            <h1
              data-aos="fade-up"
              className="text-shadow-cyan-500 text-shadow-2xs font-extrabold text-5xl mb-2 lg:text-5xl text-gray-500 max-lg:mt-10"
            >
              Hi, I’m M.Ramadanu 👋
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-shadow-2xs text-shadow-cyan-300 text-3xl mb-5 text-gray-500 font-bold"
            >
              Fullstack Developer & Tech Enthusiast
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="font-medium text-gray-600"
            >
              A <b className="text-cyan-500">curious mind</b> who enjoys
              <b className="text-cyan-500"> crafting digital solutions </b>
              that make life <b className="text-cyan-500">simpler</b> and
              <b className="text-cyan-500"> better</b> through
              <b className="text-cyan-500"> clean, functional code.</b>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="w-1/2 h-screen max-lg:w-full max-lg:h-1/2 flex items-center justify-center"
        >
          <img
            className="mx-auto rounded-full max-lg:w-[450px]"
            src="/portofolio.jpg"
            alt="avatar"
            width={550}
            height={450}
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
