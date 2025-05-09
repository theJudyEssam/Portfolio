export default function Achievements(){
    return (
        <div className="w-full text-left px-4 sm:px-8 py-16">
            <h1 className="text-[36px] py-[2rem] text-Blue3 font-bold underline sm:p-[2rem]">My Shenanigans</h1>
            
            <ol className="relative border-s border-gray-200 dark:border-gray-700 p-5">  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022 - February 2024</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 dark:text-white">IEEE AAST Volunter and Executive Secretary</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 dark:text-white">ECPC'24 Contestant</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>

                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2024 - Present</time>
                    <h3 className="text-[26px] font-semibold text-gray-900 dark:text-white">AAST Formula Student Team Member</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </div>
    )
}