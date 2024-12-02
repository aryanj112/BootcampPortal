import { createContext, useState, useContext, ReactNode } from 'react';

// Create a context with default value as empty string
const GlobalNameContext = createContext<{
  globalName: string;
  setGlobalName: (name: string) => void;
} | undefined>(undefined);

// Create a provider component to wrap around your app
export const GlobalNameProvider = ({ children }: { children: ReactNode }) => {
  const [globalName, setGlobalName] = useState<string>('');  // Initial value can be empty or set to a default name

  return (
    <GlobalNameContext.Provider value={{ globalName, setGlobalName }}>
      {children}
    </GlobalNameContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalName = () => {
  const context = useContext(GlobalNameContext);
  if (!context) {
    throw new Error('useGlobalName must be used within a GlobalNameProvider');
  }
  return context;
};