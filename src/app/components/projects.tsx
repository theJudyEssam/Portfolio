'use client'

import Projectcard from "./project-card"
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const projectsData = [
    {
        title: "Cinephile", 
        description: "A Movie Reviewing application built using tools like Express.JS, PostgresSQL, and TailwindCSS", 
        link: "https://github.com/theJudyEssam/CinePhile"
    }, 
    {
        title: "EduPortal", 
        description: "An interactive Educational Desktop app, built using .NET Windows Forms and SQL-Server. EduPortal helps teachers, students, and administrators in their day-to-day educational needs.",
        link : "https://github.com/theJudyEssam/Edu-Portal"
    }, 
    {
        title: "URL Shortening and Analytics API"  ,
        description: "A URL shortening service built using Express.JS, PostgresSQL, and Redis",
        link : "https://github.com/theJudyEssam/URL-shortening-and-analytics"
    },
    {
        title: "To-do App"  ,
        description: "A Todo Application built using React.JS",
        link : "https://github.com/theJudyEssam/React-Todo"
    },
    {
        title: "Power and Machine Hub"  ,
        description: "An Express web-app that contains information on electrical machines, along with power efficiency and voltage regulation calculators",
        link : "https://github.com/theJudyEssam/Power-and-Machine-"
    },
    {
        title: "Thursday Thoughts"  ,
        description: "An Express web-app that contains A minimalistic Blog Website, showcasing the amazing works of Thursday's Thoughts",
        link : "https://github.com/theJudyEssam/Blog-Website"
    }
];

export default function Projects() {
    return (
        <div className="bg-white">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12">


                <h1 className="text-[36px] py-[2rem] text-Blue3 font-bold underline sm:p-[2rem] text-center">Projects</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Here are some of my passion projects. Each one represents a unique challenge and learning experience.
                </p>
            </motion.div>

            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
                {projectsData.map((project) => (
                    <motion.div key={project.title} variants={item}>
                        <Projectcard
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}