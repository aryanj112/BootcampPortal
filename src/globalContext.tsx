import { createContext, useState, useContext, ReactNode } from 'react';

const GlobalNameContext = createContext<{
  globalName: string;
  setGlobalName: (name: string) => void;
} | undefined>(undefined);

export const GlobalNameProvider = ({ children }: { children: ReactNode }) => {
  const [globalName, setGlobalName] = useState<string>('');  // Initial value can be empty or set to a default name

  return (
    <GlobalNameContext.Provider value={{ globalName, setGlobalName }}>
      {children}
    </GlobalNameContext.Provider>
  );
};

export const useGlobalName = () => {
  const context = useContext(GlobalNameContext);
  if (!context) {
    throw new Error('useGlobalName must be used within a GlobalNameProvider');
  }
  return context;
};