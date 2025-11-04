
import React from 'react';

const Hero: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-[#FDFBF9] to-[#F5F1ED] opacity-100"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNFQUVBRUQiLz4KPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNFQUVBRUQiLz4KPC9zdmc+')] opacity-5"></div>
            
            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-primary font-serif mb-4 leading-tight">
                    Asesoría Legal con Precisión y Confianza
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Soluciones expertas en materia Civil y Familiar. Defendemos sus derechos con la rigurosidad de un perito profesional.
                </p>
                <div className="space-x-4">
                    <a href="#contacto" onClick={scrollToContact} className="bg-brand-accent text-white px-8 py-4 rounded-full hover:bg-brand-accent-dark transition-all duration-300 shadow-lg text-lg font-medium">
                        Consulta Gratuita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
