import { ButtonHTMLAttributes } from 'react';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  custom?: string;
  content?: string;
}

export const MyButtonLogin = (props: MyButtonProps) => {
  const { custom, content, ...otherProps } = props;
  return (
    <button className={`${custom}`} {...otherProps}>
      {content}
    </button>
  );
};
