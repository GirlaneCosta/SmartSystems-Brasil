import { IoIosSettings, IoIosConstruct } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";

const produtosServicos = [
  {
    icon: <IoIosSettings />,
    titulo: "Instalação de Automatizadores de Portão Deslizante e Pivotante Intelbras",
    descricao: "Instalação profissional de automatizadores Intelbras para portões residenciais e comerciais. Nossa equipe é especializada na instalação e configuração de automatizadores Intelbras, garantindo um funcionamento ideal e uma integração que traz mais facilidade ao dia a dia dos nossos clientes.",
  },
  {
    icon: <FaShieldAlt />,
    titulo: "Sistemas de Segurança",
    descricao: "Instalação de Câmeras e Sistemas de Segurança Avançados: Alarmes, Cerca Elétrica e Concertina. Implementamos sistemas de vigilância com câmeras VHL, IP, WI-FI e analógicas, DVRs/NVRs, alarmes e sensores, proporcionando monitoramento remoto e soluções personalizadas para a segurança do seu negócio.",
  },
  {
    icon: <IoIosConstruct />,
    titulo: "Manutenção de Sistemas de Segurança em Geral",
    descricao: "Nossa equipe é especializada na manutenção de diversas áreas dos sistemas de segurança. Realizamos manutenção em automatizadores de portões, câmeras de segurança, cerca elétrica, alarmes e concertina. Devolvemos a vida para o seu sistema de segurança que parou de funcionar, trazendo de volta a segurança e a qualidade de vida que você merece.",
  },
];

const Servicos = () => {
  return (
    <section id="servicos" className="produtos">
      <div className="banner">
        <h2>Nossos Serviços</h2>
      </div>
      <div>
        <h3 className="h3">Tipos de Instalações</h3>
        <div className="cards">
          {produtosServicos.map((produto, index) => (
            <article className="card" key={index}>
              {produto.icon}
              <h4>{produto.titulo}</h4>
              <p>{produto.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos