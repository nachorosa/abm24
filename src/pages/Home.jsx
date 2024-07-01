import { useEffect, useState } from "react"
import LoadingOval from "../components/LoadingOval"
import { GridGalery } from "../components/GridGalery"
import MetaTags from '../components/MetaTags';

export const Home = () => {
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    isLoading(false)
  }, []);

  return (
    <div>
      <MetaTags
        title="Arq. Alicia Beatriz Martin - Arquitectura, Diseño y Construcción"
        description="Como arquitecta, Alicia Beatriz Martin se dedica a convertir ideas en realidades tangibles. Descubre su enfoque creativo y soluciones funcionales."
        keywords="Arquitecta, Alicia Beatriz Martin, Arquitectura, Diseño, Construcción, Obras, Planos, Llave en Mano, Direccion, Capital Federal, Escobar, Zona Norte, Tigre, Nordelta, Pilar, San Martin"
      />

      {loading ? (
        <LoadingOval />
      ) : (
        <div className="pb-16">
          <div className="titlePage-container">
            <div className="titlePage-img-container">
              <img className="titlePage-img" src="/src/img/home/inicio.jpg" alt="Imagen de inicio" />
              <div className="titlePage-text">
                <h1 className="color-text2" >Arq. Alicia Beatriz Martin</h1>
                <h2 className="color-subtitle">ARQUITECTURA - DISEÑO - CONSTRUCCIÓN</h2>
              </div>
            </div>
          </div>

          <div className="text-container">
            <div className="text-block">
              <p>Como arquitecta, he dedicado mi trayectoria a convertir ideas en realidades tangibles. Desde mi graduación en el año 1993, en la Universidad Nacional De Buenos Aires (UBA), mi compromiso ha sido la creacion de soluciones arquitectonicas creativas y funcionales, con un caracter propio, satisfaciendo las necesidades unicas de mis clientes.</p>
            </div>
            <div className="text-block">
              <p>Con tres décadas de experiencia, mi enfoque se basa en brindar una conexion respetuosa y consciente con el entorno en cada proyecto, dar soluciones que se adapten a las particularidades de cada proyecto. Con una perspectiva contemporánea arraigada en la identidad propia de cada lugar, busco establecer una conexión armoniosa con el entorno en cada obra.</p>
            </div>
          </div>

          <GridGalery />
        </div>
      )}
    </div>
  );
};

export default Home;