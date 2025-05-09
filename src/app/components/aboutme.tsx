import Image from 'next/image'
import Skill from './skill-column'
import { Separator, Blockquote } from '@radix-ui/themes';
import Socialmedias from './social-media';


const skillsData = [
    {
        type: "Frontend",
        items: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "TypeScript" }
        ]
    },
    {
        type: "Backend",
        items: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "MongoDB" }, 
            {name : "PostgresSQL"}
        ]
    },
    {
        type: "Languages",
        items: [
            { name: "C++/C" },
            { name: "Python" }, 
            {name:  "Java"}, 
            {name: "Javascript"}, 
            {name: "C#"}
        ]
    },
    {
        type: "Other",
        items: [
            { name: "Git" },
            { name: "ROS" },
            { name: "VHDL" }
        ]
    }
];

export default function AboutMe(){
    return(



        <section className="py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column - About Text */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-Blue3">
                                About Me
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                                <span className="font-bold text-Blue3 text-2xl md:text-3xl">Ahlan! My name is Judy Essam. </span>  
                                I am a software engineer and a third-year student at the Arab Academy for Science, Technology, and Maritime Transport.
                                I am passionate about software and technology, with expertise primarily in full-stack development.
                                However, in my free time, I enjoy exploring computer networks and robotics!
                                Oh! And I am currently a member of the Autonomous Car division in my university's Formula team.
                            </p>
                        </div>

                        <Separator my="3" size="4" className="bg-Blue3/20" />
                        
                        <div className="bg-Blue3/5 p-6 rounded-xl border border-Blue3/10">
                            <Blockquote className="text-lg text-gray-700 italic">
                                In my free time, I enjoy pottery, reading, and watching video essays on random topics!
                            </Blockquote>
                        </div>
                    </div>
                    
                    {/* Right Column - Skills Grid */}
                    <div className="lg:w-1/2 w-full">
                        <h3 className="text-2xl font-bold text-Blue3 mb-8">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillsData.map((category, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <Skill category={category} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}