import Image from 'next/image'
import Skill from './skill-column'
import { Separator } from '@radix-ui/themes';


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

<div className='pt-20 pb-12 px-4 md:px-8 lg:px-16'>
    
    <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/2">
            <p className="p-5 text-xl md:text-xl leading-relaxed text-gray-800">
                <span className="font-bold text-Blue3 text-2xl md:text-3xl">Ahlan! My name is Judy Essam. </span>  
                I am a software engineer and a third-year student at the Arab Academy for Science, Technology, and Maritime Transport.
                I am passionate about software and technology, with expertise primarily in full-stack development.
                However, in my free time, I enjoy exploring computer networks and robotics!
                Oh! And I am currently a member of the Autonomous Car division in my university's Formula team.
            </p>
            <Separator my="3" size="4" />

            <div>
                <h1>Follow Me!</h1>
            </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData.map((category, index) => (
                    <Skill key={index} category={category} />
                ))}
            </div>
        </div>
    </div>
</div>
      
    )
}