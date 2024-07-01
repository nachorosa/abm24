import { useState, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import MetaTags from '../components/MetaTags';
import '../css/aboutUs.css';

export const AboutUs = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener el JSON en línea
    fetch('/api/service.json')
      .then(response => response.json())
      .then(data => {
        setServiceData(data); // Actualizar el estado con los datos del servicio
      })
      .catch(error => console.error('Error fetching service data:', error));  
  }, []);

  return (
    <div>
      <MetaTags
        title="Servicios de Arq. Alicia Beatriz Martin"
        description="Conoce los servicios de Arquitectura, Diseño y Construcción ofrecidos por Alicia Beatriz Martin en Argentina. Soluciones creativas y funcionales para tus proyectos."
        keywords="Servicios Arquitectónicos, Diseño, Construcción, Arquitecta, Alicia Beatriz Martin, Argentina, Obras, Planos, Llave en Mano, Direccion, Capital Federal, Escobar, Zona Norte, Tigre, Nordelta, Pilar, San Martin"
      />

      <div className="block w-full md:min-h-screen">
        <div className="titlePage-container">
          <div className="titlePage-img-container">
            <img className="titlePage-img" src="/src/img/home/inicio.jpg" alt="Imagen de inicio" />
            <div className="titlePage-text">
              <h2>SERVICIOS</h2>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row-reverse md-minHeight65rem">
          <div className='w-full'>
            <div className="flex flex-col py-10 px-10 md:py-16 md:px-80 ">
              <Accordion activeIndex={0}>
                {serviceData.map((item, index) => (
                  <AccordionTab key={index} className='rounded-2xl bg-btn' header={item.header}>
                    <p className="bg-white fontsize1-6rem font-normal lineHeight2-8rem tracking-normal text-left p-8">{item.content}</p>
                  </AccordionTab>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
