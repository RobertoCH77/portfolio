import Link from 'next/link';
import { Facebook, Github, Linkedin, Phone} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

const socialData = [
    {
        title: "Github", 
        icon:<Github/>, 
        href:'https://github.com/RobertoCH77/',
        },
    {
        title: "Whatsapp", 
        icon:<Phone/>, 
        href:'https://wa.me/5930999779340',
    },
    {
        title: "Facebook", 
        icon:<Facebook/>, 
        href:'https://facebook.com/profile.php?id=61550661464177',
    },
    {
        title: "Linkedin", 
        icon:<Linkedin/>, 
        href:'https://www.linkedin.com/feed/',
    },
]

const SocialLinks = () => {
    return (
        <TooltipProvider>
            <div className='flex items-center gap-3'>
                {socialData?.map((item)=> (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <div className='text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect'>
                                <Link href={item?.href} target='_blank'>
                                    <span>
                                        {item?.icon}
                                    </span>
                                </Link>
                            </div>
                        </TooltipTrigger>
                        
                        <TooltipContent className='bg-white text-black font-semibold p-1 rounded-md text-sm mb-2'>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialLinks;