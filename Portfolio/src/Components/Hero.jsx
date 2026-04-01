import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg";
import hero from "../assets/hero.svg";
function Hero() {
  return (
    <section
      id="home"
      className=" px-10 py-17 flex justify-between items-center rounded-bl-4xl bg-cyan-500 rounded-e-full"
    >
      
      <div>
        <img 
        src={hero}
        alt="background"
        className="w-full absolute inset-0 opacity-40  rounded-b-xl object-contain "
      />
        <h2 className="text-4xl font-bold">
          <p>Hi</p>
          I'm <span className="text-purple-400">Akash</span>
        </h2>
        <br />
        <p className="text-black font-mono text-2xl justify-center">
          {" "}
          I craft modern web applications with clean code, smooth UI, and
          powerful backend systems. Always learning, always building.
        </p>
      </div>
      <div >
        <img
          src={Profile}
          alt="profile pic"
          className=" rounded-full "
        />
      </div>
    </section>
  );
}

export default Hero;
