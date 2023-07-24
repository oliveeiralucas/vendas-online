const FooterComponent = () => {
  return (
    <>
      <footer className="p-4 sm:p-6 bg-gray-800 rounded-lg">
        <div className="font-bold text-indigo-600 text-xl sm:text-2xl mb-4 sm:mb-0 text-center">
          Logo
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <a className="p-2 text-sm sm:text-lg" href="/sobre">
              Sobre Nós
            </a>
            <a className="p-2 text-sm sm:text-lg" href="/contato">
              Contato
            </a>
          </div>
          <div>
            <a className="p-2 text-sm sm:text-lg" href="/privacidade">
              Política de Privacidade
            </a>
            <a className="p-2 text-sm sm:text-lg" href="/termos">
              Termos e Condições
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
