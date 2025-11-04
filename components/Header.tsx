
import React, { useState, useEffect } from 'react';
import { logoBase64 } from '../constants/assets';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: '#inicio', text: 'Inicio' },
        { href: '#servicios', text: 'Servicios' },
        { href: '#nosotros', text: 'Sobre Nosotros' },
        { href: '#contacto', text: 'Contacto' },
    ];
    
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="flex items-center">
                    <img src={logoBase64} alt="Rugar's Logo" className={`h-12 md:h-16 w-auto transition-all ${scrolled ? 'animate-pulse-shrink' : ''}`} />
                </a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-brand-primary hover:text-brand-accent transition-colors duration-300 font-medium">
                            {link.text}
                        </a>
                    ))}
                </nav>

                <a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')} className="hidden md:block bg-brand-accent text-white px-6 py-2 rounded-full hover:bg-brand-accent-dark transition-all duration-300 shadow-sm">
                    Agendar Cita
                </a>
                
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-brand-primary focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 w-full shadow-lg`}>
                <nav className="flex flex-col items-center py-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-brand-primary hover:text-brand-accent py-3 w-full text-center transition-colors duration-300 font-medium">
                            {link.text}
                        </a>
                    ))}
                    <a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')} className="mt-4 bg-brand-accent text-white px-8 py-3 rounded-full hover:bg-brand-accent-dark transition-all duration-300 shadow-sm">
                        Agendar Cita
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;