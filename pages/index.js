import { useState } from "react";
import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiGmail, SiHackerrank } from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [toggle, setToggle] = useState(false);

  function menubar() {
    setToggle((prev) => !prev);
  }

  const condition = toggle
    ? "absolute top-0 bg-black w-full flex text-5xl flex-col justify-content-center origin-top animate-open-menu"
    : "hidden";

  function navigate() {
    setToggle((prev) => !prev);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Azzam Uddin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <header className="bg-teal-700 text-white w-screen fixed top-0 z-10">
          <section className="max-w-5xl mx-auto p-4 flex justify-between  items-center">
            <a className="text-3xl cursor-pointer" onClick={()=> setDarkMode(prevMode => !prevMode)}> 
              {darkMode ? <BsFillSunFill/> : <BsFillMoonStarsFill />}
            </a>
            <div>
              <button
                id="hamburger-button"
                onClick={menubar}
                className="text-3xl md:hidden cursor-pointer"
              >
                &#9776;
              </button>
              <nav
                className="hidden md:block space-x-5 text-xl"
                aria-label="main"
              >
                <a href="#" className="hover:opacity-90">
                  Home
                </a>
                <a href="#about" className="hover:opacity-90">
                  About
                </a>
                <a href="#project" className="hover:opacity-90">
                  Project
                </a>
                <a href="#education" className="hover:opacity-90">
                  Education
                </a>
                <a href="#skill" className="hover:opacity-80">
                  Skills
                </a>

                <a
                  href="https://drive.google.com/file/d/1hPap_TWeFVE1AYMOUMBamRKHGsV8rZKV/view?usp=sharing"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md mr-8 ml-8"
                >
                  Resume
                </a>
              </nav>
            </div>
          </section>
          <section id="mobile-menu" className={condition}>
            <button className="text-8xl self-end px-6" onClick={menubar}>
              &times;
            </button>
            <nav
              className="flex flex-col min-h-screen items-center py-4 transition-transform duration-300"
              aria-label="mobile"
              onClick={navigate}
            >
              <a
                href="#hero"
                className="w-full text-center py-6 hover:opacity-90"
              >
                Home
              </a>
              <a
                href="#about"
                className="w-full text-center py-6 hover:opacity-90"
              >
                About
              </a>
              <a
                href="#project"
                className="w-full text-center py-6 hover:opacity-90"
              >
                Project
              </a>
              <a
                href="#education"
                className="w-full text-center py-6 hover:opacity-90"
              >
                Education
              </a>
              <a
                href="#skill"
                className="w-full text-center py-6 hover:opacity-90"
              >
                Skills
              </a>
              <a
                href="https://drive.google.com/file/d/1hPap_TWeFVE1AYMOUMBamRKHGsV8rZKV/view?usp=sharing"
                className="w-full text-center py-6 hover:opacity-90"
              >
                Resume
              </a>
            </nav>
          </section>
        </header>

        <section className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse justify-center items-center sm:flex-row p-6 gap-8  min-h-screen">
            <article className="sm:w-1/2 sm:mt-20">
              <h2 className="max-w-md text-4xl font-bold sm:text-5xl text-center sm:text-left text-slate-900 dark:text-slate-50 font-burtons tracking-wide">
                AZZAM UDDIN
              </h2>
              <h3 className="max-w-md text-2xl mt-4 text-center sm:text-left dark:text-slate-50">
                Full Stack Developer, based in India
              </h3>
              <p className="max-w-md text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-200 ">
                Transforming requirements into intuitive and user-friendly
                interfaces
              </p>
              <p className="max-w-md text-xl mt-4 text center flex justify-center sm:justify-start gap-8 text-center sm:text-left text-slate-700 dark:text-slate-300">
                <a href="https://www.hackerrank.com/uazzam69" target="_blank">
                  <SiHackerrank />
                </a>
                <a
                  href="https://www.linkedin.com/in/azzam-uddin"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/azzam__uddin/"
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
                <a href="mailto:uazzam69@gmail.com">
                  <SiGmail />
                </a>
                <a href="https://github.com/Azzam1503" target="_blank">
                  <AiFillGithub />
                </a>
              </p>
            </article>
            <img
              src="/azzam.jpg "
              alt="Azzam"
              className="w-3/4 sm:w-1/2 rounded-full sm:mt-40 ml-4"
            />
          </div>
        </section>
        <hr className="mx-auto bg-slate-50 dark:bg-black w-1/2 dark:opacity-40" />
        <section
          id="about"
          className="px-6 py-20 sm:p-12 min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-8 sm:mb-24 text-slate-900 dark:text-white">
            ABOUT
          </h2>

          <div className="flex flex-col sm:grid grid-cols-2 text-center gap-8">
            <div>
              <h2 className="text-3xl dark:text-slate-200">Developer</h2>
              <p className="text-xl dark:text-slate-50">
                I am a full stack developer, proficient in MERN stack,<br/>
                always eager to learn and implement new tech.
              </p>
            </div>
            <div>
              <h2 className="text-3xl dark:text-slate-200">Programmer</h2>
              <p className="text-xl dark:text-slate-50">
                I like to solve Data structures and Algo. problems,<br/> 
                its quite fun seeing those green ticks when my code  <br/>pases all the test cases. 
              </p>
            </div>
            <div>
              <h2 className="text-3xl dark:text-slate-200">Content Writer</h2>
              <p className="text-xl dark:text-slate-50">
                I also like content writing when have some free time.
              </p>
            </div>
          </div>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2 dark:opacity-40" />

        <section
          id="project"
          className="px-6 py-20 sm:p-12 min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-20 text-slate-900 dark:text-white">
            PROJECT
          </h2>
          <div className="flex flex-col justify-center items-center gap-7 sm:gap-20 sm:flex-row">
            <a href="https://e-mage.vercel.app/" target="_blank">
              <img src="/e-mage.png/" className="w-96 rounded-2xl" />
            </a>
            <div className="text-center">
              <h3 className="text-teal-500 text-bold text-2xl mb-3 dark:text-teal-300">
                Mern App
              </h3>
              <h3 className="text-teal-700 text-bold text-2xl mb-3 dark:text-teal-300">E-mage</h3>
              <p className="mb-3 text-xl dark:text-slate-50">
                Magically generate images from text prompt!
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Azzam1503/Image_Generator"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md"
                >
                  Github
                </a>
                <a
                  href="https://e-mage.vercel.app//"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="mx-auto bg-black dark:bg-white w-1/2 dark:opacity-40" />

        <section
          id="education"
          className="px-6 py-20 sm:p-12 min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-12 text-slate-900 dark:text-white">
            EDUCATION
          </h2>
          <div className="flex flex-col sm:grid grid-cols-2 text-center gap-8">
            <span className="">
              <h5 className="text-2xl mb-4 dark:text-slate-200">Present</h5>
              <p className="dark:text-slate-50">IET, Rohilkhand University, Bareilly</p>
              <p className="dark:text-slate-50">Persuing pre-final year in B.Tech Computer Science</p>
            </span>
            <span className="mb-10">
              <h5 className="text-2xl mb-4 dark:text-slate-200">2017-2020</h5>
              <p className="dark:text-slate-50">
                Diploma in Mechanical Engineering from <br />
                Govt. Polytechinc Alapur, Budaun
              </p>
            </span>
            <span className="mb-10">
              <h5 className="text-2xl mb-4 dark:text-slate-200">2015-17</h5>
              <p className="dark:text-slate-50">High School from Blooming Dale School, Budaun</p>
            </span>
          </div>
          <hr className="mx-auto bg-black dark:bg-white dark:opacity-40 w-1/2 mt-32"/>
        </section>

        <section
          id="skill"
          className="px-6 py-20 sm:p-12 sm:pt-20 min-h-screen flex flex-col justify-center max-w-7xl mx-auto dark:text-slate-50"
        >
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            SkILLS
          </h2>
          <div className="mt-4">
            <h5 className="text-xl">HTML</h5>
            <div
              className="bg-gray-600  dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "100%" }}
            >
              {" "}
              100%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">CSS</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Tailwind</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">JavaScript</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Java</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Python</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">React.js</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "100%" }}
            >
              {" "}
              100%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Next.js</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "100%" }}
            >
              {" "}
              100%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Node.js</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Express.js</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Mongodb</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "100%" }}
            >
              {" "}
              100%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">SQL</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Git & Github</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "100%" }}
            >
              {" "}
              100%
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-xl">Figma</h5>
            <div
              className="bg-gray-600 dark:bg-teal-500 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full pt-2 pb-2"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
          </div>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2 dark:opacity-40" />
      </main>
      <footer className="flex justify-center p-2 text-[0.9rem] text-center dark:bg-slate-900 dark:text-gray-200">
        <p>© Copyright 2023 - Developed by Azzam Uddin. All rights reserved.</p>
      </footer>
    </div>
  );
}
