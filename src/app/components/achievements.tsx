export default function Achievements(){
    return (
        <div className="w-full text-left px-4 sm:px-8 py-16">
            <h1 className="text-[36px] py-[2rem] text-Blue3 font-bold underline sm:p-[2rem] text-center">My Shenanigans</h1>
            <p className=" text-gray-600 text-center pb-5">Here are some of the things I have done in my life so far (★‿★)</p>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 p-5">  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022 - February 2024</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 ">IEEE AAST Volunter and Executive Secretary</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">For the first two years in university, I was part of the IEEE AAST ALEX Student Branch. Where I got to meet many amazing people and 
                        help in a community of engineers and tech enthusiasts. I was also the executive secretary of the branch in my second year! Where I maintained organized documentation and communication across committees for events execution. Cool Beans! </p>
                </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2024</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 ">Nasa Space Apps Contestant</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I participated in the NASA Space Apps Challenge 2024, where I worked with my amazing friends to develop a solution for a global challenge. It was an amazing experience that allowed me to apply my skills in a real-world context and collaborate with like-minded individuals! 🚀🚀</p>
                    </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 ">ECPC'24 Contestant</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">I competed in 2024 Egyptian Collegiate Programming Contest! It was a fun experience where we got to solve coding problems within a timeframe. </p>
                </li>

                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2024 - Present</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 ">AAST Formula Student Team Member</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">I am currently part of the Driverless subteam in AAST's Formula team. Where I get to work on path planning for the driverless cars!</p>
                </li>

              
            </ol>
        </div>
    )
}