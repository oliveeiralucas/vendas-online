import Button from '../../../shared/buttons/button/button';
import { InputEmail, InputPassword } from '../../../shared/inputs/inputDefault/input';

export const SecondLogin = () => {
  return (
    <>
      <div className="bg-gray-900 flex h-screen flex-1 flex-col justify-center overflow-hidden">
        <div className="md:bg-gray-800 bg-gray-900 rounded-xl p-[20px] sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-[200px] w-auto" src="./logo.png" alt="Logo da nossa marca" />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white mb-[40px]">
            Faça login na sua conta
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Usuário
              </label>
              <div className="mt-2">
                <InputEmail />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6  text-white"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <InputPassword />
              </div>
            </div>

            <div>
              <Button />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não possui conta?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
