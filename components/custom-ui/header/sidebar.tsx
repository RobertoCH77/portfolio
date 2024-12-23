import { useOutsideClick } from '@/hooks/use-outside-click'; 
import { X } from 'lucide-react'; // boton para siderbar "movil"
import Logo from './logo';
import { navbarData } from '@/constants';
import Link from 'next/link';
import SocialLinks from './socialLinks';

interface Props {
    isOpen: boolean; // Indica si la barra lateral está abierta o cerrada
    onClose: () => void; // Función para cerrar la barra lateral
    pathname: string; // Ruta actual
}

const Sidebar: React.FC<Props> = ( { isOpen, onClose, pathname }) => {
    // desaparecer menú móvil cuando se da clic fuera del sidebar
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

    return (
        <div 
            ref={sidebarRef}
            className={`
                fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-l border-l-hoverColor/10 shadow-xl transform
                ${isOpen ? "translate-x-0":"translate-x-full"}
                transition-transform duration-300 ease-in-out
            `}
            >
            <div className='flex justify-end p-4'>
                <button 
                    onClick={onClose}
                    className='hover:text-red-600 hoverEffect' aria-label='Close sidebar'
                    >
                    <X />
                </button>
            </div>
            <nav className='flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2'>
                <Logo title='Roberto' subtitle='CH.'/>
                {navbarData?.map((item)=>(
                    <Link 
                        key={item?.title} 
                        href={item?.href} 
                        className={`hover:text-hoverColor hoverEffect ${pathname === item?.href && "text-hoverColor"}`}
                        onClick={onClose}
                        >
                        {item?.title}
                    </Link>
                ))}
                <Link 
                    href={'/contact'}
                    className='text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect'
                    onClick={onClose}
                    >
                    Contacto
                </Link>
                <SocialLinks/>
            </nav>
        </div>
    );
};

export default Sidebar;