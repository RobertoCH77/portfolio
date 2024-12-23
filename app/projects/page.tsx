"use client";

import PageLayout from "@/components/layout/pageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import portafolio2 from "@/images/portafolio2.png";
import portafolio from "@/images/portafolio.png";

const projects = [
    {
        id: "01",
        title: "E-commerce Platform",
        category: "Full Stack",
        description: "Moderna pagina para ventas online",
        stack: [ "Next.js", "TypeScript", "CSS", "JavaScript"],
        image: "", 
        liveUrl: "",
        githubUrl: "",
    },
    {
        id: "02",
        title: "Portafolio",
        category: "Frontend",
        description: "Portafolio personal didactivo",
        stack: [ "Next.js", "TypeScript", "CSS", "JavaScript"],
        image: portafolio2,
        liveUrl: "https://portafolio2-orcin-nu.vercel.app/",
        githubUrl: "https://github.com/RobertoCH77/portafolio2.git",

    },
    {
        id: "03",
        title: "Portafolio",
        category: "Frontend",
        description: "Portafolio personal con animaciones",
        stack: [ "HTML", "CSS", "JavaScript"],
        image: portafolio,
        liveUrl: "https://robertoch77.github.io/portafolio/",
        githubUrl: "https://github.com/RobertoCH77/portafolio.git",
    },
];

const ProjectsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const  handleSlideChange=(index:number) => {
        setCurrentIndex(index);
    }

    return (
        <div className="py-6 md:y-12">
            <PageLayout>
                <Carousel 
                    opts={{align: "start", loop: true}}
                    className="w-full"
                    onSelect={()=>{
                        const index= 0;
                        if (typeof index === 'number') {
                            handleSlideChange(index);
                        }
                    }}
                    >
                    <CarouselContent>
                        {
                            projects?.map((project) => (
                                <CarouselItem key={project.id}>
                                    <Card className="bg-bodyColor border-lightSky/20">
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                                                {/* descripcion */}
                                                <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                                                    <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                                                        <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                                                            {project.id}
                                                        </h2>
                                                        <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                                                            Proyecto {project?.category} 
                                                        </h3>
                                                        <p className="text-white/60 text-justify text-sm md:text-base leading-6 md:leading-normal">
                                                            {project?.description}
                                                        </p>
                                                        <ul className="flex flex-wrap md:flex-wrap gap-2 md:gap-4 items-center">
                                                            {project.stack.map((item, index) =>(
                                                                <li 
                                                                    key={index}
                                                                    className="text-xs md:text-base text-lightSky/80"
                                                                    >
                                                                    {item}
                                                                    {index !== project?.stack?.length - 1 && ","}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Separator className="bg-gray-700"/>
                                                        <div className="flex items-center space-x-4">
                                                            {/* ver proyecto */}
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <Button 
                                                                            variant="outline"
                                                                            size="icon"
                                                                            className="
                                                                                bg-lightSky/5 
                                                                                text-white/80 border 
                                                                                border-lightSky/20
                                                                                hover:bg-lightSky/20
                                                                                hover:border-lightSky 
                                                                                hover:text-hoverColor 
                                                                                hoverEffect"
                                                                                >
                                                                            <Link 
                                                                                href={project?.liveUrl}
                                                                                target="_blannk" 
                                                                                >
                                                                                <ArrowUpRight/>{" "}
                                                                                <span className="sr-only">Ver proyecto</span>
                                                                            </Link>
                                                                        </Button>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent className="bg-white text-black font-semibold p-1 rounded-md text-sm mb-2">
                                                                        <p>Ver proyecto</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>

                                                            {/* ver codigo */}
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <Button 
                                                                            variant="outline"
                                                                            size="icon"
                                                                            className="
                                                                                bg-lightSky/5 
                                                                                text-white/80 border 
                                                                                border-lightSky/20
                                                                                hover:bg-lightSky/20
                                                                                hover:border-lightSky 
                                                                                hover:text-hoverColor 
                                                                                hoverEffect"
                                                                                >
                                                                            <Link 
                                                                                href={project?.githubUrl}
                                                                                target="_blannk" 
                                                                                >
                                                                                <Github/>{" "}
                                                                                <span className="sr-only">Ver repositorio Github</span>
                                                                            </Link>
                                                                        </Button>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent className="bg-white text-black font-semibold p-1 rounded-md text-sm mb-2">
                                                                        <p>Ver repositorio Github</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/* imagen */}
                                                <div className="w-full md:w-1/2 order-1 md:order-2">
                                                    <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                                                        <Image 
                                                            src={project?.image} 
                                                            alt={project.title} 
                                                            fill 
                                                            className="object-cover"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>

                    {/* botones carrusel */}
                    <div className="absolute right-10 -bottom-8">
                        <CarouselPrevious 
                            className="
                                rounded-md 
                                bg-transparent 
                                border border-lightSky/20 
                                hover:bg-hoverColor/20 
                                hover:text-white 
                                hover:border-hoverColor 
                                p-5
                                hoverEffect"
                            />
                        <CarouselNext  
                                className="
                                rounded-md 
                                bg-transparent 
                                border border-lightSky/20 
                                hover:bg-hoverColor/20 
                                hover:text-white 
                                hover:border-hoverColor 
                                p-5
                                hoverEffect"
                            />
                    </div>
                </Carousel>
            </PageLayout>
        </div>
    );
}

export default ProjectsPage;