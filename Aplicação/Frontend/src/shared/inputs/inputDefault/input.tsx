import CustomInput from './input.styles';

interface inputPasswordProps {
  onChangePassword: (newPassword: string) => void;
}

export const InputPassword: React.FC<inputPasswordProps> = ({ onChangePassword }) => {
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangePassword(event.target.value);
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
      />
    </div>
  );
};

interface InputEmailProps {
  onChangeEmail: (newUsername: string) => void;
}

export const InputEmail: React.FC<InputEmailProps> = ({ onChangeEmail }) => {
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEmail(event.target.value);
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
        onChange={handleEmail}
      />
    </div>
  );
};
