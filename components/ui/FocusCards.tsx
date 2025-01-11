"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MdRemoveRedEye } from "react-icons/md";
import { IoCodeSlashSharp } from "react-icons/io5";

interface Projects {
    id: number,
    title: string,
    des: string,
    img: string,
    iconLists: string[],
    link: string,
    github: string,
}

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: Projects;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden sm:h-[41rem] h-[32rem] sm:w-[570px] w-[80vw] transition-all duration-300 ease-out flex flex-col items-center justify-center p-2 md:p-4 z-10",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <div className="relative flex items-center justify-center sm:w-[550px] w-[75vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10 rounded-xl mx-2 lg:mx-5">
                <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="z-10 absolute bottom-0"
                />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {card.title}
            </h1>

            <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                }}
            >
                {card.des}
            </p>

            <div className="flex items-center justify-center mt-7 mb-3 w-full">
                    {card.iconLists.map((icon: string, index: number | string) => (
                        <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            // style={{
                            //     transform: `translateX(-${5 * index + 2}px)`,
                            // }}
                            style={{
                                transform: typeof index === 'number'
                                  ? `translateX(-${5 * index + 2}px)`
                                  : 'none',
                              }}
                        >
                            <img src={icon} alt="icon5" className="p-2" />
                        </div>
                    ))}
            </div>

            {/* on Hover */}
            <div
                className={cn(
                    "absolute inset-0 bg-black/50 flex items-center justify-center gap-2 z-10 py-8 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <a href={card.link} target="_blank" className="text-5xl p-2 rounded-full border-2 cursor-pointer text-neutral-200 border-neutral-200 hover:text-white hover:border-white"><MdRemoveRedEye/></a>
                <a href={card.github} target="_blank" className="text-5xl p-2 rounded-full border-2 cursor-pointer text-neutral-200 border-neutral-200 hover:text-white hover:border-white"><IoCodeSlashSharp/></a>
            </div>
        </div>
    )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Projects[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
