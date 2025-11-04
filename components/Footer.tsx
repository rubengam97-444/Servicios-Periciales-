import React, { useState } from 'react';
import { logoBase64 } from '../constants/assets';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const openModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <footer className="bg-brand-primary text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')}>
                                <img src={logoBase64} alt="Rugar's Logo" className="h-20 w-auto bg-white p-2 rounded-md"/>
                            </a>
                            <p className="mt-4 max-w-md text-gray-300">
                               Defensa legal con la precisión de un experto. Rugar's Servicios Periciales, su aliado en la búsqueda de justicia.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-lg mb-4">Navegación</h4>
                            <ul className="space-y-2">
                                <li><a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="hover:text-brand-accent transition-colors">Inicio</a></li>
                                <li><a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="hover:text-brand-accent transition-colors">Servicios</a></li>
                                <li><a href="#nosotros" onClick={(e) => scrollToSection(e, '#nosotros')} className="hover:text-brand-accent transition-colors">Sobre Nosotros</a></li>
                                <li><a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')} className="hover:text-brand-accent transition-colors">Contacto</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-lg mb-4">Contacto</h4>
                            <ul className="space-y-2 text-gray-300">
                                 <li><a href="mailto:contacto@rugars-periciales.com" className="hover:text-brand-accent transition-colors">contacto@rugars-periciales.com</a></li>
                                 <li><a href="tel:+525637367042" className="hover:text-brand-accent transition-colors">+52 56 3736 7042</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Rugar's Servicios Periciales. Todos los derechos reservados.</p>
                        <a href="#" onClick={openModal} className="mt-2 inline-block text-sm text-gray-400 hover:text-brand-accent underline transition-colors">
                            Política de Privacidad
                        </a>
                    </div>
                </div>
            </footer>
            <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Footer;