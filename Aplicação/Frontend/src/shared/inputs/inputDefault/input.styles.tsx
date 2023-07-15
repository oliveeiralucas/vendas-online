import { InputHTMLAttributes } from 'react';

//Input Comum
interface MyProps extends InputHTMLAttributes<HTMLInputElement> {
  custom?: string;
}

const CustomInput = (props: MyProps) => {
  const { custom, ...restProps } = props;
  return <input className={`${custom}`} {...restProps} />;
};

export default CustomInput;

// Title
type MyPropsTittle = {
  tittle: string;
};

export const InputTitle = (props: MyPropsTittle) => {
  return <h1 className="text-md text-white mb-[10px]">{props.tittle}</h1>;
};
