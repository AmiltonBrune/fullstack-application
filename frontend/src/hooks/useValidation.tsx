import { useState } from 'react';

interface ValidationRules {
  email?: boolean;
  password?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

const useValidation = (initialValue: string, rules: ValidationRules) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string): boolean => {
    if (rules.required && value.trim() === '') {
      setError('Este campo é obrigatório');
      return false;
    }

    if (
      rules.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      setError('Endereço de e-mail inválido');
      return false;
    }

    if (rules.password && value.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres');
      return false;
    }

    if (rules.minLength && value.length < rules.minLength) {
      setError(`Deve ter pelo menos ${rules.minLength} caracteres`);
      return false;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      setError(`Deve ter menos de ${rules.maxLength} caracteres`);
      return false;
    }

    setError(null);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    validate(value);
  };

  return {
    value,
    error,
    handleChange,
    setValue,
    validate: () => validate(value),
  };
};

export default useValidation;
export type { ValidationRules };
