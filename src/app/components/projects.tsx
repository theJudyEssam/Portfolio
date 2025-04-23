import Projectcard from "./project-card"
import { Grid } from "@radix-ui/themes"


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
    }
    , 
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
        title: "PMhub"  ,
        description: "An Express web-app that contains information on electrical machines, along with power efficiency and voltage regulation calculators",
        link : "https://github.com/theJudyEssam/Power-and-Machine-"
    },
    {
        title: "Thursday Thoughts"  ,
        description: "An Express web-app that contains A minimalistic Blog Website, showcasing the amazing works of Thursday's Thoughts",
        link : "https://github.com/theJudyEssam/Blog-Website"
    },
    {
        title: "Node Voltage Calculator"  ,
        description: "A web app that calculates the voltages in a DC circuit using the node analysis by inspection method.",
        link : "https://github.com/theJudyEssam/Node-Voltage-Calculator"
    },
    
];




export default function Projects(){

    return(
        <div>
            <h1 className=" text-[36px]  py-[2rem] text-Blue3 font-bold underline sm:p-[2rem]">My Projects</h1>


            <Grid columns="3" gap="4" rows="repeat(2, 200px)" width="auto" className="p-[1rem]">
                {projectsData.map((project) => (
                        <Projectcard
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
            </Grid>

        </div>
    )

}