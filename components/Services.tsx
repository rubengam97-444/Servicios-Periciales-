
import React from 'react';
import { BalanceScaleIcon, FamilyIcon } from './icons';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
}

const servicesData: Service[] = [
    {
        icon: <BalanceScaleIcon className="h-12 w-12 text-brand-accent mb-4" />,
        title: 'Derecho Civil',
        description: 'Resolvemos conflictos y protegemos sus intereses en todas las áreas del derecho civil, garantizando seguridad jurídica en sus relaciones personales y patrimoniales.',
        items: [
            'Elaboración y revisión de contratos',
            'Juicios hipotecarios y de arrendamiento',
            'Sucesiones, herencias y testamentos',
            'Responsabilidad civil y reclamación de daños',
        ],
    },
    {
        icon: <FamilyIcon className="h-12 w-12 text-brand-accent mb-4" />,
        title: 'Derecho Familiar',
        description: 'Ofrecemos un manejo sensible y profesional de los asuntos familiares, buscando siempre el bienestar de nuestros clientes y sus seres queridos en momentos delicados.',
        items: [
            'Divorcios (necesario y voluntario)',
            'Pensiones alimenticias',
            'Guardia, custodia y convivencia de menores',
            'Procesos de adopción y patria potestad',
        ],
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
        <div className="flex-shrink-0">{service.icon}</div>
        <h3 className="text-2xl font-bold font-serif text-brand-primary mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <ul className="space-y-3 text-gray-700">
            {service.items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-primary font-serif">Nuestros Servicios</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Brindamos soluciones legales efectivas y personalizadas para proteger lo que más le importa.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
