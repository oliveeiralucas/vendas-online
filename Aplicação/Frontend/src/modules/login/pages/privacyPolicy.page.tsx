import FooterComponent from '../components/homePage/footer.component';
import HeaderComponent from '../components/homePage/header.component';

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto justify-center items-center">
        <HeaderComponent />
        <div className="bg-gray-800 p-4 sm:p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md my-[50px]">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Política de Privacidade</h1>
          <p className="mb-4">
            Sua privacidade é importante para nós. É política do [Nome da sua empresa] respeitar a
            sua privacidade em relação a qualquer informação sua que possamos coletar no site [Nome
            da sua empresa], e outros sites que possuímos e operamos.
          </p>

          <p className="mb-4">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
            fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e
            consentimento. Também informamos por que estamos coletando e como será usado.
          </p>

          <p className="mb-4">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
            solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente
            aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou
            modificação não autorizados.
          </p>

          <p className="mb-4">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
            exceto quando exigido por lei.
          </p>

          <p className="mb-4">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja
            ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos
            aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <p className="mb-4">
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que
            talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <p className="mb-4">
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em
            torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como
            lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-6 mb-4">Cookies</h2>
          <p className="mb-4">
            Utilizamos cookies para armazenar informações, como as suas preferências pessoais quando
            visita o nosso site. Isto poderá incluir um simples popup, ou uma ligação em vários
            serviços que providenciamos, tais como fóruns.
          </p>

          <p className="mb-4">
            Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando
            alterações nas ferramentas de programas Antivírus. No entanto, isso poderá alterar a
            forma como interage com o nosso site, ou outros sites.
          </p>
        </div>
        {/* Rodapé */}
        <FooterComponent />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
