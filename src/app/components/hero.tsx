import Button from "./button"
import Image from 'next/image'

export default function Hero(){
    return(
        <section className="w-screen h-screen bg-Blue1 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-7xl font-bold">
            Hello, I’m <span className="text-Blue3">Judy!</span>
          </h1>
          <p className="mt-4 text-lg text-Blue3">
            Software Developer, Engineer, and Tech Enthusiast
          </p>

          <div className="p-[2rem]">
            <button className="m-3 px-7 py-3 bg-white text-Blue3 hover:bg-gray-200 font-bold rounded">
                Contact Me!
            </button>
            <button className="m-3 px-7 py-3 bg-white text-Blue3 hover:bg-gray-200 font-bold rounded">
                My Resume
            </button>

          </div>
         


        </div>
        
             <div className='p-[6rem]  hidden sm:block'>
                            <Image
                            src="/me.jpg"
                            alt="Judy Essam"
                            width={350}
                            height={300}
                            className="rounded-full border-8 border-s-Blue3"
                            />
                        </div>
        
      </section>

   
    )}