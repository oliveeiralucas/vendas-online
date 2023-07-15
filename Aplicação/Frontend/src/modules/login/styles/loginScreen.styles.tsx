import axios from 'axios';
import { useState } from 'react';

import CustomInput from '../../../shared/inputs/inputDefault/input.styles';

export const SecondLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert(`fez login ${result.data.accessToken}`);
        return result;
      })
      .catch(() => {
        alert('usuário ou senha inválidos');
      });

    console.log(`email: ${email}, password: ${password}`);
  };

  return (
    <>
      <div className="bg-gray-900 flex h-screen flex-1 flex-col items-center justify-center overflow-hidden">
        <div className="md:bg-gray-800 bg-gray-900 rounded-lg shadow-lg p-10 sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white mb-8">
            Faça login na sua conta
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white mb-2"
              >
                Usuário
              </label>
              <div className="mt-1">
                <CustomInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full rounded-lg border-0 py-2 text-gray-900 bg-gray-200 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleLogin();
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white mb-2"
              >
                Senha
              </label>
              <div className="mt-1">
                <CustomInput
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  className="block w-full rounded-lg border-0 py-2 text-gray-900 bg-gray-200 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleLogin();
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleLogin}
                className="w-full flex justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-sm text-gray-500">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Esqueceu sua senha?
            </a>
          </p>
          <p className="mt-5 text-center text-sm text-gray-500">
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
