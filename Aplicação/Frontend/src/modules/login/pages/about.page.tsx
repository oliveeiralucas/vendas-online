import FooterComponent from '../components/homePage/footer.component';
import HeaderComponent from '../components/homePage/header.component';

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto justify-center items-center">
        <HeaderComponent />
        <div className="bg-gray-800 p-4 sm:p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md my-[50px]">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Sobre Nós</h1>
          <p className="mb-4">
            Pedrosa Software Inc. é uma empresa especializada em vendas online. Fundada em 2023, nós
            somos especialistas no que fazemos.
          </p>

          <p className="mb-4">
            A nossa missão é alcançar a quantidade máxima de clientes, com a qualidade de sempre.
          </p>

          <p className="mb-4">Acreditamos nisso e fazemos isso até o fim.</p>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default AboutPage;
