const HeaderComponent = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between w-11/12 p-4 sm:p-6 items-center bg-gray-800 rounded-lg">
        <a href="/">
          <div className="font-bold text-indigo-600 text-xl sm:text-2xl mb-4 sm:mb-0">Logo</div>
        </a>
        <div className="flex justify-center mb-4 sm:mb-0 w-full px-[20px]">
          <input
            className="block w-full rounded-md p-[15px] my-[10px] border-none bg-gray-900 focus:outline-indigo-600 text-white"
            type="search"
            placeholder="Buscar produtos..."
          />
        </div>
        <nav className="flex justify-around sm:justify-start">
          <a className="p-2 text-lg font-semibold sm:text-lg text-white" href="/carrinho">
            Carrinho
          </a>
          <a className="p-2 text-lg sm:text-lg font-semibold text-white" href="/conta">
            Conta
          </a>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
