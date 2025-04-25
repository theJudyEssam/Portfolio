
import {Button,Box, Link, Card, Text } from "@radix-ui/themes"


interface projectProps{
    title: string,
    description: string, 
    link: string 
}



export default function Projectcard(props: projectProps){


               return (
              

              <a href={props.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="p-6 border-Blue3 border-solid bg-blue-50 rounded-4xl hover:shadow-lg transition-shadow duration-200">
                  <h1 className="text-[20px] font-bold py-2">{props.title}</h1>
                  <h2 className="py-2">{props.description}</h2>
                  <button className="bg-Blue3 text-white font-bold py-1 px-3 rounded-lg">Github »</button>
                </div>
              </a>

             )


}