import Contato from "./Contato";
import Inicio from "./Inicio";
import InstalacoesGaleria from "./InstalacoesGaleria";
import Processos from "./Processos";
import Produtos from "./Produtos";
import Servicos from "./Servicos";

const Home = () => {
  return (
    <main>
      <div>
        <Inicio />
        <Produtos />
        <Servicos />
        <InstalacoesGaleria />
        <Processos />
        <Contato />
      </div>
    </main>
  );
};

export default Home;
