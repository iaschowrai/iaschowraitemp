import logo from "../assets/images/IALogo.png"
import { FaDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import  resume  from "../assets/resume/Resume_IrshadAhmed_3.pdf"

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="https://www.iaschowrai.com"><img className="mx-2 w-10" src={logo} alt="logo" /></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <span className="flex flex-wrap gap-2 font-thin tracing-tight">Download Resume -&gt;</span>
            <a href={resume}
              // download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                title="Download Resume"
                className="text-cyan-400 hover:text-cyan-600 transition-colors">
              <FaDownload />
            </a>
            <a href="https://www.linkedin.com/in/irshadahmeds/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                // className="text-cyan-400 hover:text-cyan-600 transition-colors"
                >
            <FaLinkedin />
            </a>
            <a href="https://github.com/iaschowrai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Profile"
                title="Github Profile"
                // className="text-cyan-400 hover:text-cyan-600 transition-colors"
                >
              <FaGithub />
            </a>
        </div>
    </nav>
  )
};

export default Navbar