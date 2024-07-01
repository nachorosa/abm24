import '../css/footer.css';

const Footer = () => {
  return (
    <footer>
      <h2>Arq. Alicia Beatriz Martin</h2>
      <div className="footer-main flex items-center justify-around h-full lg:justify-center lg:gap-16">
        <div className="footer-socials-container flex flex-col justify-between lg:flex-row lg:items-center lg:gap-44 lg:h-full">
          <div className="flex justify-center">
          <div className="socials-footer flex flex-col gap-4">
            <div className="flex justify-center socials-footer-item flex gap-2 items-center">
              <h2>Horario</h2>
            </div>
            <div className="flex justify-center socials-footer-item flex gap-2 items-center">
              <span>Lunes a Viernes</span>
            </div>
            <div className="flex justify-center socials-footer-item flex gap-2 items-center">
              <span>De 8 a. m. a 6 p. m.</span>
            </div>
          </div>
          </div>
          <div className="socials-footer flex flex-col gap-4">
            <div className="flex justify-center socials-footer-item flex gap-2 items-center">
              <h2>Contacto</h2>
            </div>
            <div className="flex justify-center socials-footer-item flex gap-2 items-center">
              <span>11 5651 - 7886</span>
            </div>
            <div className="flex justify-center socials-footer-item flex gap-2 items-center">
              <span>contacto@arqmartin.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;