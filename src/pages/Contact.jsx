import ContactForm from '../components/ContactForm'
import MetaTags from '../components/MetaTags';
import '../css/contact.css'

const Contact = () => {
    return (
        <div>
            <MetaTags
                title="Contacto con Arq. Alicia Beatriz Martin"
                description="Contacta a Arq. Alicia Beatriz Martin para consultas, proyectos y servicios de arquitectura en Argentina. Datos de contacto y ubicación."
                keywords="Contacto, Arquitecta, Alicia Beatriz Martin, Email, Celular, Ubicación, Argentina, Obras, Planos, Llave en Mano, Direccion, Capital Federal, Escobar, Zona Norte, Tigre, Nordelta, Pilar, San Martin"
            />

            <div className="titlePage-container">
                <div className="titlePage-img-container">
                    <img className="titlePage-img" src="/src/img/home/inicio.jpg" alt="Imagen de inicio" />
                    <div className="titlePage-text">
                        <h2>CONTACTO</h2>
                    </div>
                </div>
            </div>
            <div className='contact-container flex flex-col md:flex-row mb-16 p-10 md:min-h-screen'>
                <div className='w-full lg:w-1/2  py-10 md:py-0 '>
                    <div className='contact-title w-full lg:px-10'>
                        <h2>Datos:</h2>
                        <p>- Email: contacto@arqmartin.com</p>
                        <p>- Celular: 11 5651 - 7886</p>
                        <p>- Ubicacion: Gral San Martin</p>
                    </div>
                    <iframe className='p-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13140.454197973408!2d-58.54774550033106!3d-34.57599329961313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77160243783%3A0x5e21a2d3c0a65957!2sSan%20Mart%C3%ADn%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1710354400862!5m2!1ses-419!2sar" width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact