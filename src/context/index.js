import React, { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext(null);

// Context Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("John Doe");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook for Context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};