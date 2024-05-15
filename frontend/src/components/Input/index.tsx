import {
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
  ChangeEvent,
} from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

import {
  ErrorText,
  IconLeft,
  IconRight,
  InputContainer,
  InputWrapper,
  Label,
  StyledInput,
} from './styles';
import useValidation, { ValidationRules } from '../../hooks/useValidation';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  icon: ReactNode;
  iconRight?: ReactNode;
  validationRules: ValidationRules;
  value: string;
  onChange: (value: string) => void;
  name: string;
}

type IInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  type,
  placeholder,
  icon,
  iconRight,
  validationRules,
  value,
  onChange,
  name,
  ...rest
}: IInputProps) => {
  const {
    value: internalValue,
    setValue,
    error,
    handleChange,
    validate,
  } = useValidation('', validationRules);

  const [inputType, setInputType] = useState(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    onChange(e.target.value);
  };

  useEffect(() => {
    setValue(value);
  }, [value, setValue]);

  return (
    <InputContainer>
      <Label className='poppins-regular'>{label}</Label>
      <InputWrapper>
        <IconLeft>{icon}</IconLeft>
        <StyledInput
          className='poppins-regular'
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleInputChange}
          onBlur={validate}
          name={name}
          {...rest}
        />
        {iconRight && (
          <IconRight onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <LuEyeOff size={30} /> : <LuEye size={30} />}
          </IconRight>
        )}
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
