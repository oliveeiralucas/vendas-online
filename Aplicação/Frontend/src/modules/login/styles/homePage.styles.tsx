import FooterComponent from '../components/homePage/footer.component';
import HeaderComponent from '../components/homePage/header.component';

const HomePageStyles = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto justify-center items-center">
        <HeaderComponent />
        {/* Carrossel */}
        <section className="p-6">
          {/* Implemente seu carrossel aqui */}
          <div>Carrossel de Imagens</div>
        </section>

        {/* Produtos Populares */}
        <section className="p-6">
          <h2 className="text-center text-3xl font-bold leading-9 text-indigo-600 mb-12 mt-4">
            Produtos Populares
          </h2>
          {/* Implemente a lista de produtos populares aqui */}
        </section>

        {/* Categorias */}
        <section className="p-6">
          <h2 className="text-center text-3xl font-bold leading-9 text-indigo-600 mb-12 mt-4">
            Categorias
          </h2>
          {/* Implemente as categorias de produtos aqui */}
        </section>

        {/* Novidades */}
        <section className="p-6">
          <h2 className="text-center text-3xl font-bold leading-9 text-indigo-600 mb-12 mt-4">
            Novidades
          </h2>
          {/* Implemente a lista de novos produtos aqui */}
        </section>

        {/* Depoimentos */}
        <section className="p-6">
          <h2 className="text-center text-3xl font-bold leading-9 text-indigo-600 mb-12 mt-4">
            Depoimentos
          </h2>
          {/* Implemente os depoimentos de clientes aqui */}
        </section>

        {/* Rodapé */}
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePageStyles;
