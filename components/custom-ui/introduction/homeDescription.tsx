"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const HomeDescription = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const description = "SComo desarrollador de software, diseño y desarrollo soluciones de software innovadoras, resuelvo problemas complejos y me aseguro de que los sistemas sean escalables y fáciles de usar. Desde la creación de aplicaciones web hasta la optimización de sistemas backend, abarco la brecha entre la tecnología y las necesidades de los usuarios.";
    const { displayedText, isComplete } = useTypeWriter(description, 30);

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    return (
        <motion.p className="w-auto font-normal leading-7 mb-6 min-h-30 text-justify" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:0.5}}>
            {hasLoaded ? (
                displayedText.split('')
                .map((char, index) => <motion.span 
                                        key={index} 
                                        initial={{color:"rgb(156 163 175)"}} 
                                        animate={{color:isComplete? "rgb(225 225 225)":"rgb(156 163 175)"}}
                                        transition={{duration:0.5, delay: index * 0.03}}
                                        > 
                                            {char} 
                                        </motion.span>)
                ) : (<span> {description} </span>)
            }
        </motion.p>
    );
};

export default HomeDescription;