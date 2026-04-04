import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <ProjectCard
        title="Task Manager App"
        description="A productivity app to manage daily tasks efficiently with reminders and deadlines."
        image="https://via.placeholder.com/400x200"
        tech={["React", "Node.js", "MongoDB", "Tailwind"]}
        liveLink="https://example.com"
        githubLink="https://github.com/yourrepo"
        featured={true}
      />

      <ProjectCard
        title="Portfolio Website"
        description="My personal portfolio to showcase projects and skills."
        image="https://via.placeholder.com/400x200"
        tech={["React", "Tailwind", "Vite"]}
        liveLink="https://example.com"
        githubLink="https://github.com/yourrepo"
      />
    </div>
  );
}

export default Portfolio;