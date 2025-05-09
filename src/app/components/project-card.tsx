'use client'

import { Button, Box, Link, Card, Text } from "@radix-ui/themes"
import { motion } from "framer-motion"

interface projectProps {
    title: string,
    description: string, 
    link: string 
}

export default function Projectcard(props: projectProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="h-full">
                
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="relative overflow-hidden group h-full">
                    <div className="relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
                        <h1 className="text-[20px] font-bold py-2 text-Blue3 group-hover:text-Blue3/80 transition-colors">
                            {props.title}
                        </h1>
                        <h2 className="py-2 text-gray-600 group-hover:text-gray-700 transition-colors flex-grow">
                            {props.description}
                        </h2>
                        <div className="flex items-center gap-2 mt-4">
                            <button className="bg-Blue3 text-white font-bold py-2 px-4 rounded-lg hover:bg-Blue3/90 transition-colors flex items-center gap-2 group-hover:scale-105 transform duration-200">
                                <span>View Project</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}