import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
  <h1 className="my-20 text-center text-4xl">Projects</h1>
  <div>
    {PROJECTS.map((projects, index) => (
      <div key={index} className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center">
        
        {/* Project Image */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <img 
            className="w-3/4 max-h-[200px] max-w-[200px] rounded-md" 
            src={projects.image} 
            alt={projects.title} 
          />
        </div>

        {/* Project Description */}
        <div className="w-full max-w-2xl lg:w-4/5 lg:ml-8">
          <h6 className="mb-2 font-semibold">
            {projects.title} - 
            <span className="text-sm text-sky-600">
              <a href={projects.link}>Github link</a>
            </span>
          </h6>
          
          <p className="mb-4 text-neutral-400">{projects.description}</p>
          <div className="flex flex-wrap gap-2">
            {projects.technologies.map((tags, index) => (
              <span key={index}
                className="m-1 rounded bg-neutral-400 px-3 py-1 text-sm font-medium text-purple-800"
              >
                {tags}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Project;
