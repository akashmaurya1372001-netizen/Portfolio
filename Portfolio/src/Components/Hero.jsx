import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg";
import hero from "../assets/hero.svg";

function Hero() {
  return (
    <section
      id={"#"}
      style={{ backgroundImage: `url(${hero}`,
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center"}}
      className="px-6 md:px-11 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8  rounded-bl-3xl md:rounded-bl-4xl md:rounded-e-full "
    >
      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="block">Hi</span>
          I'm <span className="text-blue-400 font-semibold font-mono">Akash maurya</span>
        </h2>

        <p className="mt-4 text-black font-mono text-lg md:text-2xl">
          Innovator | Full-Stack Developer | AI & Machine Learning Enthusiast
          B.Tech CS (AI) Student @ BBDU | Building Intelligent Web Solutions
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center hover:items-start">
        <img
          src={Profile}
          alt="profile pic"
          className=" w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-white hover:border-cyan-300"
        />
      </div>
    </section>
  );
}

export default Hero;
