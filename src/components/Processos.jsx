import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled } from "react-icons/tb";

const processosData = [
  {
    icon: <TbCircleNumber1Filled />,
    titulo: "Avaliação Inicial",
    descricao: "Análise detalhada das necessidades do cliente e do ambiente de instalação",
  },
  {
    icon: <TbCircleNumber2Filled />,
    titulo: "Planejamento",
    descricao: "Desenvolvimento de projeto técnico e cronograma de implementação",
  },
  {
    icon: <TbCircleNumber3Filled />,
    titulo: "Instalação",
    descricao: " Execução profissional seguindo as melhores práticas do mercado",
  },
  {
    icon: <TbCircleNumber4Filled />,
    titulo: "Testes e Validação",
    descricao: " Verificação completa de todos os componentes instalados",
  },
  {
    icon: <TbCircleNumber5Filled />,
    titulo: "Treinamento",
    descricao: "Capacitação da equipe do cliente para uso adequado dos sistemas",
  },
];

const Processos = () => {
   return (
    <section className="produtos">
      <div>
        <h3 className="h3">Nosso Processo de Instalação</h3>
        <div className="cards">
          {processosData.map((produto, index) => (
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

export default Processos