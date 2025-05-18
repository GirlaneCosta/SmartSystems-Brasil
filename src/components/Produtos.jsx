import { IoIosCamera, IoIosSettings } from "react-icons/io";
import { FaBell, FaSkullCrossbones } from "react-icons/fa";
import { MdElectricBolt, MdContactPhone } from "react-icons/md";

const produtosData = [
  {
    icon: <IoIosCamera />,
    titulo: "Câmeras de Vigilância",
    descricao: "Monitoramento em tempo real",
  },
  {
    icon: <IoIosSettings />,
    titulo: "Automatizador de portão",
    descricao: "Automatizador para portões",
  },
  {
    icon: <FaBell />,
    titulo: "Alarmes Inteligentes",
    descricao: "Detecção e notificação automática",
  },
  {
    icon: <MdElectricBolt />,
    titulo: "Cerca elétrica",
    descricao: "cerca elétrica para muros residenciais e comerciais",
  },
  {
    icon: <FaSkullCrossbones />,
    titulo: "Concertina",
    descricao: "concertina para muros residenciais e comerciais",
  },
  {
    icon: <MdContactPhone />,
    titulo: "Interfone",
    descricao: "Interfones para ambientes residenciais e comerciais",
  },
];

const Produtos = () => {
  return (
    <section id="produtos" className="produtos">
      <div className="banner">
        <h2>Nossos Produtos</h2>
        <h3>Descubra nossa linha completa de soluções inovadoras</h3>
      </div>
      <div>
        <h3 className="h3">Sistemas de Segurança</h3>
        <div className="cards">
          {produtosData.map((produto, index) => (
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
};

export default Produtos;
