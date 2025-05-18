import Img1 from '../assets/instala1.jpg'
import Img2 from '../assets/instala2.jpg'
import Img3 from '../assets/instala3.jpg'
import Img4 from '../assets/instala4.jpg'
import Img5 from '../assets/instala5.jpg'
import Img6 from '../assets/instala6.jpg'
import Img7 from '../assets/instala7.jpg'
import Img8 from '../assets/instala8.jpg'
import Img9 from '../assets/instala9.jpg'
import Img10 from '../assets/instala10.jpg'
import Img11 from '../assets/instala11.jpg'
import Img12 from '../assets/instala12.jpg'
import Img13 from '../assets/instala13.jpg'
import Img14 from '../assets/instala14.jpg'
import Img15 from '../assets/instala15.jpg'
import Img16 from '../assets/instala16.jpg'
import Img17 from '../assets/instala17.jpg'
import Img18 from '../assets/instala18.jpg'
import Img19 from '../assets/instala19.jpg'
import Img20 from '../assets/instala20.jpg'
import Img21 from '../assets/instala21.jpg'
import Img22 from '../assets/instala22.jpg'
import Img23 from '../assets/instala23.jpg'
import Img24 from '../assets/instala24.jpg'
import Img25 from '../assets/instala25.jpg'
import Img26 from '../assets/instala26.jpg'
import Img27 from '../assets/instala27.jpg'
import Img28 from '../assets/instala28.jpg'
import Img29 from '../assets/instala29.jpeg'
import Img30 from '../assets/instala30.jpeg'
import Img31 from '../assets/instala31.jpeg'
import Img32 from '../assets/instala32.jpeg'
import Img33 from '../assets/instala33.jpeg'
import Img34 from '../assets/instala34.jpeg'
import Img35 from '../assets/instala35.jpeg'
import Img36 from '../assets/instala36.jpeg'

const instalacoesGaleria = [
  {
    foto: Img1, titulo: "Câmeras de Vigilância",
  },
  {
    foto: Img2, titulo: "Monitoramento Multiambiente",
  },
  {
    foto: Img3, titulo: "Sistema Quad View Noturno",
  },
  {
    foto: Img4, titulo: "Automação de Portões",
  },
  {
    foto: Img5, titulo: "Câmera Interna com Fonte",
  },
  {
    foto: Img6, titulo: "Câmera Dome Intelbras",
  },
  {
    foto: Img7, titulo: "Monitoramento Comercial",
  },
  {
    foto: Img8, titulo: "Câmera Noturna Residencial",
  },
  {
    foto: Img9, titulo: "Sistema Infravermelho",
  },
  {
    foto: Img10, titulo: "Sistema de câmera wi-fi Residencial",
  },
  {
    foto: Img11, titulo: "Câmera com Proteção Anti-vandalismo",
  },
  {
    foto: Img12, titulo: "Monitoramento de Estacionamento",
  },
  {
    foto: Img13, titulo: "Sistema Perimetral",
  },
  {
    foto: Img14, titulo: "Integração Monitor e Smartphone",
  },
  {
    foto: Img15, titulo: "Central de Monitoramento",
  },
  {
    foto: Img16, titulo: "Sistema de Alertas Móveis",
  },
  {
    foto: Img17, titulo: "Automação de Portão Residencial",
  },
  {
    foto: Img18, titulo: "Monitoramento Multi-Câmeras",
  },
  {
    foto: Img19, titulo: "Central de Monitoramento Intelbras",
  },
  {
    foto: Img20, titulo: "Motor para Portão Deslizante",
  },
  {
    foto: Img21, titulo: "Portão Automatizado Residencial",
  },
  {
    foto: Img22, titulo: "Sistema de Abertura para Portão Grande",
  },
  {
    foto: Img23, titulo: "Sistema de Segurança Residencial",
  },
  {
    foto: Img24, titulo: "Câmera de Segurança Residencial Interna",
  },
  {
    foto: Img25, titulo: "Instalação de Automatizador de Portão",
  },
  {
    foto: Img26, titulo: "Câmera bullet Intelbras Teto",
  },
  {
    foto: Img27, titulo: "Monitoramento de Área de Lazer",
  },
  {
    foto: Img28, titulo: "Sistema de Segurança para Áreas Amplas",
  },
  {
    foto: Img29, titulo: "Câmera na porta da sua casa",
  },
  {
    foto: Img30, titulo: "Câmera na sua sala",
  },
  {
    foto: Img31, titulo: "Quarto com Câmera",
  },
  {
    foto: Img32, titulo: "Câmera na sua cozinha",
  },
  {
    foto: Img33, titulo: "Câmera na sua Despença",
  },
  {
    foto: Img34, titulo: "Câmera na varanda",
  },
  {
    foto: Img35, titulo: "Câmera na saída",
  },
  {
    foto: Img36, titulo: "Câmera na entrada de casa",
  },
];

const InstalacoesGaleria = () => {
  return (
    <section id="instalacoesgaleria" className="produtos">
      <div className="banner">
        <h2>Nossas Instalações</h2>
        <h3>Serviços Profissionais de Alta Qualidade</h3>
      </div>
      <div>
        <h3 className="h3">Galeria de Instalações</h3>
        <div className="cards">
          {instalacoesGaleria.map((produto, index) => (
            <article className="card" key={index}>
              <img src={produto.foto} alt={produto.titulo} className='imagem-galeria' />
              <h4>{produto.titulo}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstalacoesGaleria