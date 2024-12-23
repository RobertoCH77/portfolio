"use client";

import PageLayout from "@/components/layout/pageLayout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, CodeXml, GraduationCap, User } from "lucide-react";
import { motion } from "motion/react";

const tabMenu = [
    { title: "Experiencia", value: "experience", icon: Briefcase},
    { title: "Educación", value: "education", icon: GraduationCap},
    { title: "Habilidades", value: "skills", icon: CodeXml},
    { title: "Acerca de mí", value: "about", icon: User},
];

const tabContent  = {
    experience: {
        title: "Experiencia laboral",
        items: [
            {
                role: "Desarrollador Frontend Junior",
                company: "DGIP EPN",
                period: "ene. 2022 - abr. 2022",
                description: "Corregí errores en la interfaz de usuario para que los usuarios tengan mayor accesibilidad y navegar sin dificultad en la aplicación web. Solucione problemas de “responsive” de la aplicación web para que se pueda adaptar en diversas pantallas: tabletas, smartphones, etc. ",
                highlights: ["Angular", "Tailwind", "Bootstrap", "TypeScript", "HTML", "CSS"],
            },
            {
                role: "Técnico en mantenimiento de computadoras",
                company: "GameHousepc",
                period: "oct.2022 - dic. 2022",
                description: "Corregir a tiempo posibles errores que tenga un ordenador para evitar a futuro daños en la máquina. Limpieza en hardware de equipos (PC). Mantenimiento de software en sistemas operativos (Windows,  Linux).",
                highlights: ["PC", "Laptos"],
            },
            {
                role: "Desarrollador Frontend  Junior",
                company: "Ministerio de Educación",
                period: "jun. 2023 - agto. 2023",
                description: "Desarrollo del captcha en Angular para ser usado en futuros proyectos del Ministerio de Educación. Desarrollo del programa de firmas digitales para sistemas y aplicativos que manejen documentos PDF y requieran firmas digitales en Java.",
                highlights: ["Angular", "Bootstrap", "TypeScript", "HTML", "CSS"],
            },
            {
                role: "Desarrollador Full Stack Junior",
                company: "Proyectos de TIC",
                period: "abr. 2023 - sept. 2024",
                description: "Desarrolle una aplicación web de gestión de inventarios en Laravel. Diseñe la base de datos con MySQL. Implemente la arquitectura MVC de la aplicación web (Back-end). Desarrolle las interfaces de usuario (Front-end). Realice pruebas de rendimiento, compatibilidad y de aceptación.",
                highlights: ["Laravel", "PHP", "MySQL",  "Tailwind", "Bootstrap", "HTML", "CSS", "JavaScript"],
            },
        ],
    },
    education: {
        title: "Educación",
        items: [
            {
                degree: "Escuela Politécnica Nacional",
                institution: "Tecnólogo superior en Desarrollo de Software",
                period: "2021 - 2024",
                description: "El desarrollo de Software ofrece soluciones relacionados al desarrollo, mantenimiento y soporte de aplicaciones software, altamente competentes, con responsabilidad social y espíritu emprendedor, basados en un currículo que permita un proceso de formación teórico práctico con herramientas actualizadas; que aporten en el planteamiento de soluciones innovadoras en el área de desarrollo de software.",
                achievements: ["Desarrollador Full-stack", "Aplicaciones web", "Aplicaciones móviles", "Bases de datos", "Sistemas operativos", "Inteligencia artificial", "Ciencias de datos"],
            },
        ],
    },
    skills: {
        title: "Habilidades Tecnológicas",
        categories: [
            {
                name: "Desarrollador Web",
                description: "Desarrollador web especializado en crear aplicaciones modernas y escalables utilizando frameworks. Enfocado en brindar soluciones eficientes y de alta calidad para la web.",
                skills: ["Angular", "Laravel", "React", "Next.js", "Spring Boot"],
            },
            {
                name: "Desarrollador Móvil",
                description: "Desarrollador móvil con experiencia en la creación de aplicaciones nativas y multiplataforma. Comprometido con ofrecer experiencias móviles optimizadas y funcionales para usuarios.",
                skills: ["Flutter dart", "Kotlin", "Java"],
            },
            {
                name: "Manejo de dase de datos SQL y NoSQL",
                description: "Especialista en manejo de bases de datos SQL y NoSQL, con experiencia en diseño, optimización y administración de sistemas, garantizando soluciones robustas y escalables para la gestión de datos.",
                skills: ["MySQL", "PostgreSQL", "SQLite", "SQL Server", "MongoDB", "CouchDB"],
            },
            {
                name: "Lenguajes de programación",
                description: "Programador versátil con dominio de lenguajes de programación más usados en el campo laboral, aplicando buenas prácticas de desarrollo para crear soluciones eficientes y de alto rendimiento en diversos entornos.",
                skills: [ "Java", "PHP", "Python", "TypeScript", "C++"],
            },
        ],
    },
    about: {
        title: "Acerca de mí",
        bio: "Soy un profesional apasionado por el desarrollo de soluciones tecnológicas innovadoras, he tenido la oportunidad de desarrollar software en diversos proyectos, entre los que destaca el diseño web y desarrollo de calidad de software. Además, he adquirido habilidades en lenguajes de programación como Java, Python, entre otros, así como en el diseño de bases de datos y metodologías de desarrollo de software.",
        interests: [
            "Desarrollador Web / Frontend Junior",
            "Desarrollador Web / Backend Junior",
            "Diseño UI/UX",
        ],
        languages: ["Nativo en español", "Inglés intermedio A2"],
    },
};

const AboutMePage = () => {
    return (
        <div className="flex flex-col justify-center py-10">
            <PageLayout>
                <Tabs 
                    defaultValue="experience" 
                    className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
                    >
                    <TabsList 
                        // flex md:flex-col h-full bg-transparent md:w-64 gap-4
                        className="grid grid-cols-2 md:flex md:flex-col h-full bg-transparent md:w-64 gap-4">
                        {tabMenu?.map((item)=> (
                            <TabsTrigger 
                                key={item?.value} 
                                value={item?.value}
                                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                                >
                                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                                    {/* w-4 h-4 md:h-5 md:w-5   */}
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"/>
                                    {item?.title}
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="flex-1 min-h-[400px]">
                        {/* experiencia laboral */}
                        <TabsContent value="experience">
                            <motion.h2 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                                >
                                {tabContent.experience.title}
                            </motion.h2>
                            <div className="space-y-6">
                                {tabContent?.experience?.items.map((item, index) => (
                                    <motion.div 
                                        key={index} 
                                        initial={{opacity:0, y:20}} 
                                        animate={{opacity:1, y:0}}
                                        transition={{delay:index*0.1}}
                                        className="border rounded-lg border-lightSky/20 p-6 bg-lightSky/5"
                                        >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold">{item?.role}</h3>
                                                <p className="text-muted-foreground">{item?.company}</p>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <Calendar className="w-4 h-4 mr-2"/>
                                                {item?.period}
                                            </div>
                                        </div>
                                        <p className="mb-4 text-white text-justify">
                                            {item?.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.highlights.map((highlight, i) => (
                                                <Badge key={i} variant="secondary">
                                                    {highlight}
                                                </Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* educacion */}
                        <TabsContent value="education">
                            <motion.h2 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                                >
                                {tabContent.education.title}
                            </motion.h2>
                            <div className="space-y-6">
                                {tabContent?.education?.items.map((item, index) => (
                                    <motion.div 
                                        key={index} 
                                        initial={{opacity:0, y:20}} 
                                        animate={{opacity:1, y:0}}
                                        transition={{delay:index*0.1}}
                                        className="border rounded-lg border-lightSky/20 p-6 bg-lightSky/5"
                                        >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold">{item?.degree}</h3>
                                                <p className="text-muted-foreground">{item?.institution}</p>
                                            </div>
                                            <div className="flex items-center text-muted-foreground">
                                                <Calendar className="w-4 h-4 mr-2"/>
                                                {item?.period}
                                            </div>
                                        </div>
                                        <p className="mb-4 text-white text-justify">
                                            {item?.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.achievements.map((achievements, i) => (
                                                <Badge key={i} variant="secondary">
                                                    {achievements}
                                                </Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* habilidades */}
                        <TabsContent value="skills">
                            <motion.h2 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                                >
                                {tabContent.skills.title}
                            </motion.h2>
                            <div className="space-y-6">
                                {tabContent?.skills?.categories.map((item, index) => (
                                    <motion.div 
                                        key={index} 
                                        initial={{opacity:0, y:20}} 
                                        animate={{opacity:1, y:0}}
                                        transition={{delay:index*0.1}}
                                        className="border rounded-lg border-lightSky/20 p-6 bg-lightSky/5"
                                        >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold">{item?.name}</h3>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-white text-justify">
                                            {item?.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skills, i) => (
                                                <Badge key={i} variant="secondary">
                                                    {skills}
                                                </Badge>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Acerca de mí */}
                        <TabsContent value="about">
                            <motion.h2 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                className="text-2xl font-bold mb-6 text-lightSky"
                                >
                                {tabContent.about.title}
                            </motion.h2>
                            <div className="space-y-6">
                                <motion.div 
                                    initial={{opacity:0, y:20}} 
                                    animate={{opacity:1, y:0}}
                                    transition={{delay:0.1}}
                                    className="border rounded-lg border-lightSky/20 p-6 bg-lightSky/5"
                                    >
                                    <p className="text-white/90 mb-6 text-lg text-justify">{tabContent.about.bio}</p>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                Estoy interesado en:
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {tabContent.about.interests.map((interest, i) => (
                                                <Badge key={i} variant="secondary">
                                                    {interest}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">
                                                Idiomas:
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {tabContent.about.languages.map((languages, i) => (
                                                <Badge key={i} variant="secondary">
                                                    {languages}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </PageLayout>
        </div>
    );
}

export default AboutMePage;