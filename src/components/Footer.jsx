import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Smart Systems</h3>
        <p>
          Inovação para um futuro seguro <br /> e conectado com a tecnologia!
        </p>
      </div>
      <div>
        <h3>Informações de Contato</h3>
        <p>Email: smartsystems1999@gmail.com</p>
        <p>Telefone: (61) 99399-5630</p>
        <p>Cidade: DF e Entorno</p>
      </div>
      <div>
        <h3>Siga-nos</h3>
        <a
          href="https://www.facebook.com/profile.php?id=100087979317260"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/smart_cftv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="direitos">
        <p>&copy; 2025 Smart Systems. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
