import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomInput from '../../../shared/inputs/inputDefault/input.styles';

const RegisterScreenStyle = () => {
  const navigate = useNavigate();

  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegistration = async () => {
    try {
      const result = await axios({
        method: 'post',
        url: 'http://localhost:8080/user',
        data: {
          name: name,
          phone: telephone,
          email: email,
          cpf: CPF,
          password: password,
        },
      });

      setError(null);
      navigate('/');

      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        // Aqui você pode acessar as mensagens de erro lançadas pela exceção BadRequestException.
        // Por exemplo, se você estiver usando a biblioteca class-validator, as mensagens de erro estarão disponíveis em error.response.message.errors
        setError(error.response.message);
      } else {
        // Outros erros inesperados podem ser tratados aqui.
        setError('Erro desconhecido');
      }
      throw error;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#282828] flex-col">
        <div className="flex w-10/12 md:w-1/2 rounded-lg shadow-lg text-center">
          <div className="md:w-1/2 shadow-lg one items-center flex">
            <img src="/login.svg" alt="Imagem login" />
          </div>
          <div className="w-full h-full md:w-1/2 md:py-16 bg-[#1b1b1b] text-white flex flex-col justify-center rounded-md">
            <h2 className="text-2xl font-semibold md:text-3xl mb-8 md:mt-2 pt-[40px] md:pt-0">
              Cadastrar nova conta
            </h2>
            <div className="mx-5">
              <CustomInput
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                autoComplete="name"
                required
                onChange={(event) => setName(event.target.value)}
                className="block w-full rounded-md p-[15px] my-[10px] border-none bg-[#282828] text-white"
              />
            </div>
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
              />
            </div>
            <div className="mx-5">
              <CustomInput
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                autoComplete="new-password"
                required
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full rounded-md p-[15px] my-[10px] border-none bg-[#282828] text-white"
              />
            </div>
            <div className="mx-5">
              <CustomInput
                id="cpf"
                name="cpf"
                type="text"
                placeholder="CPF"
                autoComplete="off"
                required
                onChange={(event) => setCPF(event.target.value)}
                className="block w-full rounded-md p-[15px] my-[10px] border-none bg-[#282828] text-white"
              />
            </div>
            <div className="mx-5">
              <CustomInput
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="Telefone"
                autoComplete="tel"
                required
                onChange={(event) => setTelephone(event.target.value)}
                className="block w-full rounded-md p-[15px] my-[10px] border-none bg-[#282828] text-white"
              />
            </div>

            {error && <p className="text-red-500 mt-3 font-bold uppercase text-xs">{error}</p>}
            <div className="mx-5">
              <button
                type="button"
                onClick={handleRegistration}
                className="w-full py-3 rounded-lg text-white bg-indigo-600 cursor-pointer text-lg mt-8 mb-5"
              >
                Cadastrar
              </button>
            </div>
            <p className="text-sm mb-4 text-gray-500">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Esqueceu sua senha?
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Já possui conta?{' '}
              <a
                href="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Entrar
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreenStyle;
