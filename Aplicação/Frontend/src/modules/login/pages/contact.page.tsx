import FooterComponent from '../components/homePage/footer.component';
import HeaderComponent from '../components/homePage/header.component';

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto justify-center items-center">
        <HeaderComponent />
        <div className="bg-gray-800 p-4 sm:p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md my-[50px]">
          <h1 className="text-3xl sm:text-5xl font-bold leading-9 text-indigo-600 mb-6 mt-4 text-center">
            Contato
          </h1>
          <p className="text-sm sm:text-lg font-medium leading-6 text-white mb-2">
            TEVE ALGUM PROBLEMA COM SEU PRODUTO OU QUER TIRAR ALGUMA DÚVIDA?
          </p>
          <p className="text-sm sm:text-lg font-medium leading-6 text-white mb-4">
            Entre em contato com a gente pelos nossos canais de atendimento 👇
          </p>
          <p className="text-sm sm:text-lg font-medium leading-6 text-white mb-1">
            Email: lucas.oliveira@edu.unifil.br
          </p>
          <p className="text-sm sm:text-lg font-medium leading-6 text-white mb-3">
            Whatsapp: +5543941331-3173
          </p>
          <p className="text-sm sm:text-lg font-medium leading-6 text-white mb-1">
            Ou se preferir mande uma mensagem em nossas redes sociais 👇
          </p>
          <p className="text-sm sm:text-lg font-medium lead text-white mb-3">
            Instagram: @oliveeira.lucas
          </p>
        </div>

        <FooterComponent />
      </div>
    </>
  );
};

export default ContactPage;
