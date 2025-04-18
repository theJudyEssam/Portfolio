import Image from 'next/image'

const Backend = [
    {name: "Node.JS"}, 
    {name: "Express.JS"}, 
    {name: "PostgreSQL"}
]

const Frontend =[
    {name: "React"}, 
    {name: "TailwindCSS"},
    {name: "Next.JS"}
]

const Languages = [
    {name: "C++/C"}, 
    {name: "Javascript"}, 
    {name: "C#"}, 
    {name: "Python"}
]

const Hardware = [ 
    {name: "ROS"}, 
    {name : "VHDL"}
]

const Misc = [
    {name : "Git"}, 
    {name: "Three.JS"}
    
]

export default function AboutMe(){
    return(


        <div className='pt-[5rem]'> 
            <h1 className="text-center text-[36px] p-5 text-Blue3 font-bold underline sm:p-1">About Me.</h1>
             <div className='flex justify-center pt-[0.3rem]'> 

            <div className="text-left">

            <p className='text-[26px]'> <span className="font-bold text-Blue3">My name is Judy Essam.</span>  
            I am a software engineer 
            and a third-year student at the Arab Academy for Science, Technology, and Maritime Transport.
            I am passionate about software and technology, with expertise primarily in full-stack development.
            However, in my free time, I enjoy exploring computer networks and robotics!
            Oh! And I am currently a member of the Autonomous Car division in my university's Formula team.
            </p>

            <div id='tech-stacks'>

            </div>

</div>
            </div>
      
        </div>
      

      
    )
}