import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  ChangeEvent,
} from 'react';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

interface FormState {
  state: FormValues;
  validation: ValidationResult;
}

const initialState: FormState = {
  state: {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  },
  validation: {},
};

type FormAction =
  | {
      type: 'SET_VALUE';
      payload: {
        field: keyof FormValues;
        value: string | ChangeEvent<HTMLInputElement>;
      };
    }
  | {
      type: 'SET_VALIDATION';
      payload: { field: keyof FormValues; message: string | null };
    };

interface ValidationResult {
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  name?: string | null;
}

interface FormContextType extends FormState {
  dispatch: Dispatch<FormAction>;
}

const FormContext = createContext<FormContextType>({
  ...initialState,
  dispatch: () => undefined,
});
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        state: {
          ...state.state,
          [action.payload.field]: action.payload.value,
        },
      };
    case 'SET_VALIDATION':
      return {
        ...state,
        validation: {
          ...state.validation,
          [action.payload.field]: action.payload.message,
        },
      };
    default:
      return state;
  }
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ ...formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => useContext(FormContext);

export type { FormValues, ValidationResult };
