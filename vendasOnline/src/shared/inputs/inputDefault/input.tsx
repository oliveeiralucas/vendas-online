import { useState } from 'react';

import CustomInput from './input.styles';

export const InputPassword = () => {
  const [password, setPassword] = useState('');

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <CustomInput
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={handlePassword}
        value={password}
      />
    </div>
  );
};

export const InputEmail = () => {
  const [username, setUsername] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <CustomInput
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={handleUsername}
        value={username}
      />
    </div>
  );
};
