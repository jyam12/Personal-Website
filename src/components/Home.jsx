import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Type() {
  return (
    <div className="underline decoration-accent decoration-2 underline-offset-8">
      <Typewriter
        options={{
          strings: [
            "AI Engineer",
            "Technical Consultant",
            "Full-Stack Developer",
            "Software Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: "natural",
        }}
      />
    </div>
  );
}

const Home = () => {
  return (
    <section className="min-h-screen w-full pt-20 pb-16">
      <div className="mx-auto max-w-9/10 space-y-16 px-4 sm:px-20">
        {/* --- Greeting Section --- */}
        <div>
          <h1 className="mb-4 text-4xl font-bold">
            Hi, I'm <strong className="text-accent-text">Johnny Yam</strong>
            <span
              className="animate-wave ml-2 inline-block origin-[70%_70%]"
              role="img"
              aria-labelledby="wave"
            >
              👋🏻
            </span>
          </h1>
          <div className="flex items-center gap-3 text-4xl font-bold text-accent-text">
            <h2 className="mb-0 text-3xl font-bold text-text">I'm</h2>
            <Type />
          </div>
        </div>

        {/* --- Introduction Section --- */}
        <div className="space-y-3">
          <h2 className="pb-2 text-5xl font-semibold underline decoration-accent decoration-2 underline-offset-8">
            A BRIEF <strong className="text-accent-text">INTRODUCTION</strong>
          </h2>
          <p className="leading-relaxed text-text text-md">
            I'm a{" "}
            <strong className="text-accent-text text-md">
              solutions-driven
            </strong>{" "}
            Software Engineer specializing in{" "}
            <strong className="text-accent-text text-md">
              full-stack development
            </strong>{" "}
            and
            <strong className="text-accent-text text-md"> AI/ML</strong>. My
            experience includes{" "}
            <strong className="text-accent-text text-md">
              building LLM-powered applications
            </strong>
            , responsive user interfaces, and scalable database systems. As a
            <strong className="text-accent-text text-md"> collaborative</strong>{" "}
            and{" "}
            <strong className="text-accent-text text-md">quick-learning</strong>{" "}
            team player, I enjoy using machine learning to{" "}
            <strong className="text-accent-text text-md">
              solve complex data challenges
            </strong>{" "}
            and thrive in{" "}
            <strong className="text-accent-text text-md">
              fast-paced environments
            </strong>
            .
          </p>
          {/* --- Call to Action Button --- */}
          <div>
            <Link
              to="/Personal-Website/about"
              className="inline-block rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-text button"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
