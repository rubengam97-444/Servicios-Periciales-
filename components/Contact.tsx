import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from './icons';

const Contact: React.FC = () => {
    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-primary font-serif">Póngase en Contacto</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        ¿Tiene alguna pregunta o desea agendar una consulta? Estamos aquí para ayudarle.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Contact Form */}
                    <div className="w-full lg:w-2/3 bg-gray-50 p-8 rounded-lg shadow-md">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all duration-300 ease-in-out" 
                                        placeholder="Ej. Juan Pérez"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all duration-300 ease-in-out" 
                                        placeholder="Ej. juan.perez@correo.com"
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all duration-300 ease-in-out" 
                                    placeholder="Ej. Consulta sobre Derecho Familiar"
                                    required 
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all duration-300 ease-in-out" 
                                    placeholder="Describa brevemente su caso o consulta aquí..."
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-brand-accent-dark hover:-translate-y-1 hover:shadow-2xl hover:scale-105 active:scale-100 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                             <h3 className="text-2xl font-bold font-serif text-brand-primary mb-4">Información de Contacto</h3>
                             <div className="space-y-4">
                                <div className="flex items-center">
                                    <PhoneIcon className="w-6 h-6 text-brand-accent mr-3"/>
                                    <a href="tel:+525637367042" className="text-gray-700 hover:text-brand-accent">+52 56 3736 7042</a>
                                </div>
                                <div className="flex items-center">
                                    <MailIcon className="w-6 h-6 text-brand-accent mr-3"/>
                                    <a href="mailto:contacto@rugars-periciales.com" className="text-gray-700 hover:text-brand-accent">contacto@rugars-periciales.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                             <h3 className="text-xl font-bold font-serif text-brand-primary mb-3">Contacto Directo con el Fundador</h3>
                             <div className="flex items-center">
                                <MailIcon className="w-6 h-6 text-brand-accent mr-3"/>
                                <a href="mailto:r.gama@rugars-periciales.com" className="text-gray-700 hover:text-brand-accent">r.gama@rugars-periciales.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;