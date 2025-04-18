import Projectcard from "./project-card"


export default function Projects(){

    return(
        <div>
            <h1 className="text-center text-[26px] p-5 text-green-900 font-bold underline sm:p-1">My Projects</h1>


            <div className="grid grid-cols-3 gap-3">
                <Projectcard title="Project 1" description="cool project" link="here" />
                <Projectcard title="Project 1" description="cool project" link="here" />
                <Projectcard title="Project 1" description="cool project" link="here" />
                <Projectcard title="Project 1" description="cool project" link="here" />
                <Projectcard title="Project 1" description="cool project" link="here" />

            </div>

        </div>
    )

}