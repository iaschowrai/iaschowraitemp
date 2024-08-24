import { RiReactjsLine } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si"
import { BiLogoPostgresql} from "react-icons/bi"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { SiDocker } from "react-icons/si"
// import { SiKafka } from "react-icons/si"
// import { SiAmazonaws } from "react-icons/si"
// import { SiMicrosoftazure } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-500 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaFill className="text-7xl text-orange-400" />
            </div>
             <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpring className="text-7xl text-green-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400" />
            </div>
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-400" />
            </div>
             <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDocker className="text-7xl text-blue-400" />
            </div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKafka className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAmazonaws className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMicrosoftazure className="text-7xl text-cyan-400" />
            </div> */}
        </div>
    </div>
  )
};

export default Technologies