import { motion } from "framer-motion";
function Hero() {
    return(
  <section className="h-screen flex flex-col justify-corner items-center">
    <motion.h1
      className="text-5xl font-bold"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      hi,I'm Akash
    </motion.h1>
    <motion.p className="mt-4 text-xl"
    initial={{opacity:0}}
    animation={{opacity:1}}
    transition={{delay:1}}
    >
        React Devloper
    </motion.p>

  </section>
    );
}
export default Hero;