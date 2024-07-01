import PropTypes from 'prop-types';

const Dropdown = ({ contenedorVisible, toggleContenedor, imgs, onCloseAnimation, lugar, tipo , descripcion }) => {

    return (
        <div className={`fixed bottom-0	left-0 w-full bg-white z-50 overflow-auto dropdown ${contenedorVisible && !onCloseAnimation ? "visible" : "dropdown-hidden"}`}>
            <div className="flex flex-col">
                <div className="dropdown-title flex w-full justify-between items-center p-16">
                    <div>
                        <h2 className='font-semibold tracking-normal' > {lugar} - {tipo}</h2>
                        <p className='font-semibold tracking-normal' >{descripcion}</p>
                    </div>
                    <img className='cursor-pointer' onClick={toggleContenedor} src="./src/img/close.svg" alt="" />
                </div>
                <div className="flex flex-wrap w-full justify-around items-center">
                    {imgs.map((img, index) => (
                        <img className='dropdownImg' key={index} src={img} alt={`imagen-${index}`} />
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

export default Dropdown