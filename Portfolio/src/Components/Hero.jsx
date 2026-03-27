import { motion } from "framer-motion";
 function Hero() {
  return (
    <section id="home" className="pt-24 px-6 py-16 flex justify-between items-center">
      <div>
        <h2 className="text-4xl font-bold">I'm <span className="text-purple-400">Akash</span></h2>
        <p className="text-slate-400">Frontend Developer</p>
      </div>
      <div className="w-40 h-40 border-4 border-purple-400 rounded-full flex items-center justify-center">👨‍💻</div>
    </section>
  );
}

export default Hero;