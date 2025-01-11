"use client"
import React from 'react'
import { projects } from "@/data";
import { FocusCards } from './ui/FocusCards';
import { motion } from 'framer-motion';

interface Projects {
    id: number,
    title: string,
    des: string,
    img: string,
    iconLists: string[],
    link: string,
    github: string,
}

const RecentProjects = () => {
    return (
        <motion.section id='projects' className="w-full py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-2xl font-bold lg:text-7xl">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <FocusCards cards={projects} />
        </motion.section>
    )
}

export default RecentProjects