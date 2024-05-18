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
  title: string;
  description: string;
  url: string;
  catgegories: string;
  thumbnail: string;
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
    title: '',
    description: '',
    url: '',
    catgegories: '',
    thumbnail: '',
  },
  validation: {},
};

type FormAction =
  | {
      type: 'SET_VALUE';
      payload: {
        field: keyof FormValues;
        value:
          | string
          | ChangeEvent<HTMLInputElement>
          | ChangeEvent<HTMLTextAreaElement>;
      };
    }
  | {
      type: 'SET_INITIAL_VALUES';
      payload: {
        field: keyof FormValues;
        value:
          | string
          | ChangeEvent<HTMLInputElement>
          | ChangeEvent<HTMLTextAreaElement>;
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
    case 'SET_INITIAL_VALUES':
      return {
        ...state,
        state: {
          ...initialState.state,
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
