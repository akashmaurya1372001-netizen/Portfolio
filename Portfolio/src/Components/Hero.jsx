import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpeg"
function Hero() {
  return (
    <section
      id="home"
      className=" px-10 py-17 flex justify-between items-center rounded-bl-4xl bg-blue-300 rounded-e-full"
    >
      <div >
        <h2 className="text-4xl font-bold">
         <p>Hi</p>
          I'm <span className="text-purple-400">Akash</span>
        </h2>
        <br />
        <p className="text-black font-mono text-2xl"> I craft modern web applications with clean code, smooth UI, and powerful
  backend systems. Always learning, always building.</p>
      </div>
      <div className="flex justify-item-auto   mask-origin-content">
        <img src={Profile} alt="profile pic" className="  rounded-full  border-4 border-purple-500 shadow-black"/>
      </div>
      
    </section>
  );
}

export default Hero;
