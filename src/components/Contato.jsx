import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h4>Fale Conosco</h4>
      <div className="card-contato">
        <h5>
          <MdEmail />
          <span>E-mail:</span>
          <a href="mailto:smartsystems1999@gmail.com">
            smartsystems1999@gmail.com
          </a>
        </h5>
        <h5>
          <FaPhoneAlt />
          <span>Telefone:</span>
          <a href="tel:+5561993995630">(61) 99399-5630</a>
        </h5>
        <h5>
          <FaFacebookF />
          <span>Facebook:</span>
          <a
            href="https://www.facebook.com/profile.php?id=100087979317260"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smart Systems
          </a>
        </h5>
        <h5>
          <FaInstagram />
          <span>Instagram:</span>
          <a
            href="https://www.instagram.com/smart_cftv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @smart_cftv
          </a>
        </h5>
      </div>
      <a
        className="botao-orcamento"
        href="https://wa.me/5561993995630?text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento!"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Faça seu orçamento gratuito agora
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Contato;
