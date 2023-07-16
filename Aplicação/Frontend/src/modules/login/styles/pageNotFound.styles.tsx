export const Error404 = () => {
  return (
    <div className="bg-gray-900 flex h-screen flex-1 flex-col items-center justify-center overflow-hidden">
      <div className="md:bg-gray-800 bg-gray-900 rounded-3xl shadow-lg p-10 sm:w-full sm:max-w-md">
        <h2 className="text-center text-5xl font-bold leading-9 text-indigo-600 mb-12 mt-4">404</h2>
        <p className="text-center text-lg font-medium leading-6 text-white mb-12">
          Desculpe, a página que você está procurando não foi encontrada.
        </p>
        <div className="w-full flex justify-center">
          <a
            href="/"
            className="w-full flex justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
};
