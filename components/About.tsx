
import React from 'react';
import { founderBase64 } from '../constants/assets';

const About: React.FC = () => {
    return (
        <section id="nosotros" className="py-20 bg-brand-bg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    <div className="w-full lg:w-1/3">
                        <div className="relative">
                            <div className="absolute -inset-2 border-4 border-brand-accent rounded-lg transform rotate-2"></div>
                             <img 
                                src={founderBase64} 
                                alt="Ruben Gama Carrillo" 
                                className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-brand-primary font-serif mb-4">Nuestro Enfoque</h2>
                        <h3 className="text-2xl font-semibold text-brand-accent mb-2">Fundador: Ruben Gama Carrillo</h3>
                        <p className="text-lg font-medium text-gray-700 mb-6">Técnico Profesional Criminalista</p>
                        <div className="text-gray-600 space-y-4 text-lg text-justify">
                            <p>
                                Con una sólida formación como Técnico Profesional Criminalista, Ruben Gama Carrillo funda Rugar's Servicios Periciales con la misión de aplicar un enfoque metódico y basado en la evidencia a la práctica del derecho civil y familiar.
                            </p>
                            <p>
                                Su experiencia única le permite analizar cada caso con una precisión excepcional, desentrañando complejidades y construyendo argumentos sólidos para la defensa de sus clientes. Esta perspectiva forense es la que nos diferencia, garantizando una representación legal rigurosa y orientada a resultados.
                            </p>
                            <p>
                                Además, para asegurar una defensa integral, contamos con la valiosa colaboración de un equipo de abogados con una vasta y reconocida experiencia en el campo. Esta sinergia entre la pericia forense y la veteranía legal nos permite ofrecer a nuestros clientes una representación completa y de primer nivel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;