import { useEffect, useState, ChangeEvent } from 'react';
import { FormValues, useFormContext } from '../context/Form';

interface ValidationRules {
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface DefineFieldProps {
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  name?: boolean;
}

interface UseValidationProps {
  name: keyof FormValues;
  rules: ValidationRules;
  validFields?: DefineFieldProps;
}

const useValidation = ({
  name,
  rules,
  validFields = {
    email: true,
    password: true,
    name: true,
    confirmPassword: true
  },
}: UseValidationProps) => {
  const { state, dispatch } = useFormContext();
  const [error, setError] = useState<string | null>(null);

  const value = state[name];
  const confirmPassword = state['confirmPassword'];
  const passwordValue = state['password'];
  let message: string | null = null;

  const fields: DefineFieldProps = validFields;

  const validate = (): boolean => {
    if (fields[name]) {
      if (rules.required && value.trim() === '') {
        message = 'Este campo é obrigatório';
      } else if (
        rules.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        message = 'Endereço de e-mail inválido';
      } else if (rules.password && value.length < 8) {
        message = 'A senha deve ter pelo menos 8 caracteres';
      } else if (rules.minLength && value.length < rules.minLength) {
        message = `Deve ter pelo menos ${rules.minLength} caracteres`;
      } else if (rules.maxLength && value.length > rules.maxLength) {
        message = `Deve ter menos de ${rules.maxLength} caracteres`;
      } else if (
        rules.confirmPassword &&
        confirmPassword !== undefined &&
        passwordValue !== confirmPassword
      ) {
        message = 'As senhas não coincidem';
      }
    }

    dispatch({ type: 'SET_VALIDATION', payload: { field: name, message } });
    setError(message);

    return message === null;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    isConfirmPassword: boolean = false
  ) => {
    const { value } = e.target;
    dispatch({ type: 'SET_VALUE', payload: { field: name, value } });

    if (isConfirmPassword) {
      dispatch({
        type: 'SET_VALUE',
        payload: { field: 'confirmPassword', value },
      });
    }

    validate();
  };

  useEffect(() => {
    validate();
  }, [value, confirmPassword]);

  return {
    value,
    error,
    handleChange,
    validate,
  };
};

export default useValidation;
export type { ValidationRules, DefineFieldProps };
