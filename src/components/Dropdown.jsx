import PropTypes from 'prop-types';
import '../css/dropdown.css';


const Dropdown = ({ contenedorVisible, toggleContenedor, imgs, onCloseAnimation, lugar, tipo, descripcion }) => {
    return (
        <div className={`dropdown ${contenedorVisible && !onCloseAnimation ? "dropdown-visible" : "dropdown-hidden"}`}>
            <div className="dropdown-container">
                <div className="dropdown-title">
                    <div>
                        <h2>{lugar} - {tipo}</h2>
                        <p>{descripcion}</p>
                    </div>
                    <img className="dropdown-close-icon" onClick={toggleContenedor} src="./src/img/close.svg" alt="Cerrar" />
                </div>
                <div className="dropdown-content">
                    {imgs.map((img, index) => (
                        <img className="dropdown-img" key={index} src={img} alt={`imagen-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    contenedorVisible: PropTypes.bool.isRequired,
    toggleContenedor: PropTypes.func.isRequired,
    imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCloseAnimation: PropTypes.bool.isRequired,
    lugar: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};

export default Dropdown;