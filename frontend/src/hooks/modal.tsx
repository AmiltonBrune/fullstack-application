import { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextProps {
  isShowing: boolean;
  toggle: () => void;
  isShowingEdit: boolean;
  toggleEdit: () => void;
  isShowingLoading: boolean;
  toggleLoading: () => void;
  setIsShowinLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingEdit, setIsShowingEdit] = useState(false);
  const [isShowingLoading, setIsShowinLoading] = useState(false);

  const toggle = () => setIsShowing(!isShowing);
  const toggleEdit = () => setIsShowingEdit(!isShowingEdit);

  const toggleLoading = () => setIsShowinLoading(!isShowingLoading);

  return (
    <ModalContext.Provider
      value={{
        isShowing,
        toggle,
        isShowingEdit,
        toggleEdit,
        isShowingLoading,
        toggleLoading,
        setIsShowinLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export { ModalProvider, useModal };
