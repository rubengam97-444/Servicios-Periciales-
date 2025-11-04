import React from 'react';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 max-h-[90vh] flex flex-col"
                onClick={e => e.stopPropagation()} // Prevent click inside modal from closing it
            >
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-brand-primary font-serif">Política de Privacidad</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-gray-800"
                        aria-label="Cerrar modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto text-gray-700 space-y-4">
                    <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    
                    <h3 className="text-lg font-semibold text-brand-primary pt-2">1. Introducción</h3>
                    <p>Rugar's Servicios Periciales ("nosotros", "nuestro") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web.</p>

                    <h3 className="text-lg font-semibold text-brand-primary pt-2">2. Recopilación de su información</h3>
                    <p>Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Datos Personales:</strong> Información de identificación personal, como su nombre, dirección de correo electrónico y número de teléfono, que usted nos proporciona voluntariamente al completar el formulario de contacto.</li>
                        <li><strong>Datos de Uso:</strong> Información que su navegador envía automáticamente cada vez que visita el Sitio, como su dirección IP, tipo de navegador, y las páginas que visita.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-brand-primary pt-2">3. Uso de su información</h3>
                    <p>Tener información precisa sobre usted nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través del Sitio para:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Responder a sus solicitudes y preguntas.</li>
                        <li>Enviarle correos electrónicos administrativos.</li>
                        <li>Mejorar la operación y el contenido del sitio web.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-brand-primary pt-2">4. Divulgación de su información</h3>
                    <p>No venderemos, distribuiremos ni alquilaremos su información personal a terceros a menos que tengamos su permiso o la ley nos exija hacerlo.</p>

                    <h3 className="text-lg font-semibold text-brand-primary pt-2">5. Seguridad de su información</h3>
                    <p>Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que, a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable.</p>

                    <h3 className="text-lg font-semibold text-brand-primary pt-2">6. Contacto</h3>
                    <p>Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en <a href="mailto:contacto@rugars-periciales.com" className="text-brand-accent hover:underline">contacto@rugars-periciales.com</a>.</p>
                </div>
                <div className="flex justify-end p-4 border-t">
                     <button 
                        onClick={onClose} 
                        className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;