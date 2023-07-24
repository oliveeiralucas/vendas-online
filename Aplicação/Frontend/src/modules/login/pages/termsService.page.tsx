import FooterComponent from '../components/homePage/footer.component';
import HeaderComponent from '../components/homePage/header.component';

const TermsServicePage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto justify-center items-center">
        <HeaderComponent />
        <div className="bg-gray-800 p-4 sm:p-10 rounded-xl shadow-lg sm:w-full sm:max-w-md my-[50px]">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Termos e Condições</h1>
          <p className="mb-4">
            Ao acessar ao site [Nome da sua empresa], concorda em cumprir estes termos de serviço,
            todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de
            todas as leis locais aplicáveis.
          </p>

          <p className="mb-4">
            Se você não concordar com algum desses termos, está proibido de usar ou acessar este
            site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e
            marcas comerciais aplicáveis.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-6 mb-4">Uso de Licença</h2>
          <p className="mb-4">
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações
            ou software) no site [Nome da sua empresa], apenas para visualização transitória pessoal
            e não comercial. Esta é a concessão de uma licença, não uma transferência de título e,
            sob esta licença, você não pode:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>modificar ou copiar os materiais;</li>
            <li>
              usar os materiais para qualquer finalidade comercial ou para exibição pública
              (comercial ou não comercial);
            </li>
            <li>
              tentar descompilar ou fazer engenharia reversa de qualquer software contido no site
              [Nome da sua empresa];
            </li>
            <li>
              remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;
              ou
            </li>
            <li>
              transferir os materiais para outra pessoa ou espelhe os materiais em qualquer outro
              servidor.
            </li>
          </ul>

          <p className="mb-4">
            Esta licença terminará automaticamente se você violar alguma dessas restrições e pode
            ser terminada por [Nome da sua empresa] a qualquer momento.
          </p>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default TermsServicePage;
