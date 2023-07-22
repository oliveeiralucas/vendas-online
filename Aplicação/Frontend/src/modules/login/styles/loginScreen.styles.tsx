import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setItemStorage } from '../../../shared/functions/connection/storageProxy';
import { useGlobalContext } from '../../../shared/hooks/userGlobalContext';
import CustomInput from '../../../shared/inputs/inputDefault/input.styles';

export const SecondLogin = () => {
  const navigate = useNavigate();

  const { accessToken, setAccessToken } = useGlobalContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

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
        setItemStorage('accessToken', result.data.accessToken);

        setAccessToken(result.data.accessToken);
        setError(null);
        navigate('/');
        console.log(accessToken);
        return result;
      })
      .catch((error) => {
        setError('Verifique email ou senha inseridos');
        throw error;
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#282828] flex-col">
        <div className="flex w-10/12 md:w-1/2 h-4/5 rounded-lg shadow-lg text-center">
          <div className="md:w-1/2 shadow-lg one">
            <img src="/login.svg" alt="Imagem login" />
          </div>
          <div className="w-full h-full md:w-1/2 py-16 bg-[#1b1b1b] text-white flex flex-col justify-center rounded-md">
            <h2 className="text-2xl font-semibold md:text-3xl mb-8 md:mt-2 pt-[40px] md:pt-0">
              Entrar na sua conta
            </h2>
            <div className="mx-5">
              <CustomInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                required
                onChange={(event) => setEmail(event.target.value)}
                className="block w-full rounded-md p-[15px] my-[10px] border-none bg-[#282828] text-white"
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
            </div>
            <div className="mx-5">
              <CustomInput
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                autoComplete="current-password"
                required
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full rounded-md p-[15px] my-[10px] border-none bg-[#282828] text-white"
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
            </div>
            {error && <p className="text-red-500 mt-3 font-bold uppercase text-xs">{error}</p>}
            <div className="mx-5">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full py-3 rounded-lg text-white bg-indigo-600 cursor-pointer text-lg mt-8 mb-5"
              >
                Entrar
              </button>
            </div>
            <p className="text-sm mb-4 text-gray-500">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Esqueceu sua senha?
              </a>
            </p>
            <p className="text-sm md:mb-4 text-gray-500 mb-[40px]">
              Não possui conta?{' '}
              <a
                href="/registro"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Registre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
