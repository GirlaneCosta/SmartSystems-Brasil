import { FaWhatsapp } from "react-icons/fa";

const Inicio = () => {
  return (
    <section>
    <div className="home">
      <h1>
        Soluções Inovadoras para <br /> segurança da sua família
      </h1>
      <p>
        Transformando negócios através da integração de tecnologia inteligente
      </p>
      <a
        className="botao-orcamento"
        href="https://api.whatsapp.com/send/?phone=5561993995630&text=Ol%C3%A1+gostaria+de+fazer+um+or%C3%A7amento+gratuito+agora%21&type=phone_number&app_absent=0"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Faça seu orçamento gratuito agora 
        <FaWhatsapp />
      </a>
      <h3>Somos autorizados Intelbras</h3>
    </div>
    </section>
  );
};

export default Inicio;
