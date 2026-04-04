import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiAppwrite } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500 " },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Appwrite", icon: <SiAppwrite />, color: "text-pink-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 justify-center">
        My Skills 
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-white">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-6  rounded-xl border border-gray-700 hover:border-purple-500 transition"
          >
            <div className={`text-5xl  mb-4 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="text- font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;