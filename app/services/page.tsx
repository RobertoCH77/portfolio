import PageLayout from "@/components/layout/pageLayout";
import Title from "@/components/layout/titles/title";
import { Separator } from "@/components/ui/separator";
import { servicesData } from "@/constants";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const ServicePage = () => {
    return (
        <section className="min-h-[80vh] flex flex-col h-full py-5 md:py-10">
            <PageLayout>
                <Title>Servicios que brindo</Title>
                <div className="grid grid-flow-col-1 md:grid-cols-2 gap-5 md:gap-12">
                    {servicesData?.map((item)=>(
                        <div key={item?.icon} className="flex flex-col p-6 bg-lightSky/5 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md group hover:shadow-lg gap-2.5 hoverEffect">
                            <div className="w-full flex items-center justify-between">
                                <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect">
                                    {item?.icon}
                                </p>
                                <Link href={item?.href} target="_blank">
                                    <ArrowUp className="rotate-45"/>
                                </Link>
                            </div>

                            <h2 className="font-semibold text-white">
                                {item?.title}
                            </h2>
                            <p className="text-justify text-sm md:text-base">
                                {item?.description}
                            </p>
                            <Separator className="bg-white/20"/>
                        </div>
                    ))}
                </div>
            </PageLayout>
        </section>
    );
}

export default ServicePage;