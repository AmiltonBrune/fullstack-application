import {
  InputHTMLAttributes,
  ReactNode,
  useState,
  useEffect,
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
import useValidation, {
  DefineFieldProps,
  ValidationRules,
} from '../../hooks/useValidation';
import { FormValues } from '../../context/Form';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  icon?: ReactNode;
  iconRight?: boolean;
  validationRules: ValidationRules;
  validFields?: DefineFieldProps;
  value?: string;
  onChange?: (value: string) => void;
  name: keyof FormValues;
}

type IInputProps = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  type,
  placeholder,
  icon,
  iconRight = false,
  validationRules,
  validFields,
  value: propValue,
  onChange: propOnChange,
  name,
  ...rest
}: IInputProps) => {
  const [localValue, setLocalValue] = useState(propValue || '');
  const [inputType, setInputType] = useState(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    value: validatedValue,
    error,
    handleChange: handleValidationChange,
    validate,
  } = useValidation({
    name,
    rules: validationRules,
    validFields,
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (propOnChange) {
      propOnChange(value);
    } else {
      setLocalValue(value);
    }
    handleValidationChange(e);
  };

  useEffect(() => {
    if (typeof propValue === 'string') {
      setLocalValue(propValue);
    }
  }, [propValue]);

  const value = propValue !== undefined ? validatedValue : localValue;

  return (
    <InputContainer>
      <Label className='poppins-regular'>{label}</Label>
      <InputWrapper>
        {icon && <IconLeft>{icon}</IconLeft>}

        <StyledInput
          className='poppins-regular'
          data-lpignore='true'
          type={inputType}
          placeholder={placeholder}
          value={value}
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
