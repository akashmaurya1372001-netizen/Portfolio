import project from "./data/project";

function Projects(){
return (
    <section id="project" className="p-20">
        <h2 className="text-3xl font-bold text-center mb-10">Project</h2>
        <div className="grid md:grid-cols-2 gap-2">
            {project.map((project,index)=>(
                <div key={index}
                className="bg-grey-800 p-6 rounded-lg">
                    <h3 className="text-xl"> 
                        {project.title}
                    </h3>
                    <p>{project.tech}</p>
                    <a href={project.github} className="text-blue-400">Github</a>
                </div>
            ))}
        </div>
    </section>
);
}