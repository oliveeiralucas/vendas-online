import Button from '../../../shared/buttons/button/button';
import { InputEmail, InputPassword } from '../../../shared/inputs/inputDefault/input';

export const SecondLogin = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-21 w-auto" src="./logo.png" alt="Your Company" />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Faça login na sua conta
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block text-sm font-medium leading-6 text-gray-900"
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
