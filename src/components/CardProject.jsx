import { useState, useEffect } from "react";
import Dropdown from './Dropdown';
import "../css/experience.css";

export const CardProject = () => {

    const [contenedorVisible, setContenedorVisible] = useState(false);
    const [onCloseAnimation, setOnCloseAnimation] = useState(false);
    const [viaje, setViaje] = useState({});
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener el JSON en línea
        fetch('/api/project.json')
          .then(response => response.json())
          .then(data => {
            setProjectData(data); // Actualizar el estado con los datos del servicio
          })
          .catch(error => console.error('Error fetching service data:', error));  
      }, []);

    const toggleContenedor = () => {
        if (contenedorVisible) {
            setOnCloseAnimation(true)
            setTimeout(() => {
                setContenedorVisible(false);
                setOnCloseAnimation(false)
            }, 800);
        }
        if (!contenedorVisible) {
            setContenedorVisible(true)
        }
    };

    const getImagePaths = (folder, range) => {
        const imagePaths = [];
      
        for (let i = range.start; i <= range.end; i++) {
          const imagePath = `${folder}img (${i}).jpg`;
          imagePaths.push(imagePath);
        }
      
        return imagePaths;
      };

    return (
        <div>
            <div className="my-8 flex flex-wrap justify-center gap-8" >
                {projectData.map((destiny) => (
                    <div onClick={() => { toggleContenedor(), setViaje(destiny) }} key={destiny.id} className="ExperienceDetail relative cursor-pointer">
                        <div className="ExperienceDetailContainer w-full overflow-hidden hover:opacity-75">
                            <img className="w-full h-full object-cover object-center" src={destiny.imageSrc} alt={destiny.imageAlt} />
                            <p className="bottom-3/4 absolute left-0 w-full p-2 z-10 font-semibold tracking-normal text-center ExperienceDetailText lg:bottom-1/4 lg:text-start">{destiny.lugar}</p>
                            <p className="bottom-0 absolute left-0 w-full p-2 z-10 font-semibold tracking-normal text-center ExperienceDetailText ExperienceDetailTextProvince lg:text-start">{destiny.tipo}</p>
                        </div>
                    </div>
                ))}
            </div>
            {contenedorVisible && (
                <Dropdown contenedorVisible={contenedorVisible} toggleContenedor={toggleContenedor} imgs={getImagePaths(viaje.folder, viaje.imageRange)}  onCloseAnimation={onCloseAnimation} lugar={viaje.lugar} tipo={viaje.tipo} descripcion={viaje.descripcion}  ></Dropdown>
            )}
        </div>
    )
}
