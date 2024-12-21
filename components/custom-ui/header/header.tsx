"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/container";

import Logo from "./logo";
import { navbarData } from "@/constants";
import { AlignRight } from 'lucide-react'; // boton para el siderbar "movil"
import Sidebar from "./sidebar";

const Header = () => {
    // enlaces
    const pathname = usePathname();

    // sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return (
        <header className='border-b border-b-hoverColor/10 bg-bodyColor text-white sticky top-0 z-50'>
            <Container className='py-5 flex items-center justify-between'>
                
                <Logo title="Roberto" subtitle="CH."/>
                
                <div className='hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium'>
                    {navbarData?.map((item) => (
                        <Link 
                            key={item?.title} 
                            href={item?.href} 
                            className={`hover:text-hoverColor hoverEffect relative group overflow-hidden ${pathname === item?.href && 'text-hoverColor'}`}>
                                {item?.title}
                                <span className={`
                                    w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect
                                    ${pathname === item.href ? "translate-x-0":"-translate-x-[105%]"}`} 
                                />
                        </Link>
                    ))}
                    <Link 
                        href={'../cv/Roberto_Chacon_CV.pdf'} target='_blank' rel='noopener noreferrer'
                        className='text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect'
                    >
                        Hoja de vida
                    </Link>
                </div>
                {/* boton para movil */}
                <button 
                    aria-label='Toggle menu' 
                    className='inline-flex md:hidden relative hover:text-hoverColor hoverEffect'
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                {/* de lucide-react */}
                <AlignRight />
                </button>
            </Container>

            {/* sidebar para movil */}
            <div className='md:hidden'>
                <Sidebar 
                    isOpen={isSidebarOpen} 
                    onClose={() => setIsSidebarOpen(false)}
                    pathname={pathname}
                />
            </div>
        </header>
    );
}

export default Header;