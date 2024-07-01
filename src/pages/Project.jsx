import { CardProject } from "../components/CardProject"
import MetaTags from '../components/MetaTags';



export const Experience = () => {
  return (
    <div className="pb-16">
      <MetaTags
        title="Proyectos de Arq. Alicia Beatriz Martin"
        description="Explora los proyectos arquitectónicos de Alicia Beatriz Martin. Descubre su enfoque creativo y soluciones funcionales en diseño y construcción."
        keywords="Proyectos Arquitectónicos, Diseño Arquitectónico, Construcción, Arquitectura, Alicia Beatriz Martin, Argentina, Obras, Planos, Llave en Mano, Direccion, Capital Federal, Escobar, Zona Norte, Tigre, Nordelta, Pilar, San Martin"
      />

      <div className="md:min-h-screen" >
        <div className="titlePage-container">
          <div className="titlePage-img-container">
            <img className="titlePage-img" src="/src/img/home/inicio.jpg" alt="Imagen de inicio" />
            <div className="titlePage-text">
              <h2>PROYECTOS</h2>
            </div>
          </div>
        </div>
        <CardProject />
      </div>
    </div>
  );
};

export default Experience;