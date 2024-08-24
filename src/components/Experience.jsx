import { EXPERIENCES } from "../constants"


const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <h1 className="my-20 text-center text-4xl">Experiences</h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-m text-neutral-400">
                            {experience.year}
                        </p>
                    </div>
                    <div className="w-full max-w-2xl lg:w-4/5">
                        <h6 className="mb-2 text-m font-semibold">
                            {experience.role} - <span className="text-sm text-sky-600"> {experience.company}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="m-1 rounded bg-neutral-400 px-4 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                        ))}
                        </div>
                    </div>
                </div>
            ))}    
        </div>
    </div>
  )
}

export default Experience