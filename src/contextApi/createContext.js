// context/AppContext.js
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidePenalOpen, setIsSidePenalOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{
      // State values
      isSidebarOpen, setSidebarOpen,
      isSidePenalOpen, setIsSidePenalOpen,
      theme, setTheme,
      user, setUser
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use anywhere
export const useApp = () => useContext(AppContext);
