 function Skills() {
  const skills = [
    { name: "React", level: "90%" },
    { name: "JavaScript", level: "85%" }
  ];

  return (
    <section id="skills" className="px-6 py-16">
      <h2 className="text-3xl text-purple-400">Skills</h2>
      {skills.map(skill => (
        <div key={skill.name} className="mb-4">
          <p>{skill.name}</p>
          <div className="w-full h-2 bg-slate-300 dark:bg-slate-700">
            <div className="h-2 bg-purple-400" style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Skills