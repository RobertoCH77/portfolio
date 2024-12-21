"use client";

import SocialLinks from "@/components/custom-ui/header/socialLinks";
import HomeDescription from "@/components/custom-ui/introduction/homeDescription";
import Photo from "@/components/custom-ui/introduction/photo";
import Statistics from "@/components/custom-ui/introduction/statistics";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import { TypeAnimation } from 'react-type-animation';
import CoverParticles from "@/components/layout/cover-particles";

export default function Home() {
    return (
        <div className="bg-bodyColor text-white/80">
            <CoverParticles />
            <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* photo */}
                <div className="order-1 md:order-2">
                    <Photo />
                </div>

                <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start order-2 md:order-1">
                    <h3 className="font-semibold tracking-wide mb-1">
                        Desarrollador de Software
                    </h3>
                    
                    <h1 className="text-lightSky text-4xl md:text-4xl lg:text-6xl tracking-normal">
                        Roberto Chacón
                    </h1>

                    <TypeAnimation
                        sequence={[
                            'Soy desarrollador Web Full-Stack',
                            1000,
                            'Soy diseñador UI/UX',
                            1000,
                            'Soy especialista en Frontend',
                            1000,
                            'Soy freelance creativo',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2"
                    />

                    <div className="w-full h-[170px] md:h-[140px] relative mb-12 md:mb-12 lg:mb-1">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <HomeDescription />
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row items-center gap-8 pt-12">
                        <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11">
                            Descargar cv <Download />
                        </Button>
                        <SocialLinks />
                    </div>

                </div>
            </Container>

            {/* Estadísticas */}
            <div className="pb-12">
                <Statistics />
            </div>

        </div>
    );
}