import React, { useContext } from "react";

// Context
export const Context = React.createContext();

// Provider
export default function Provider({ children }) {
  // Variables
  const [isAdmin, setIsAdmin] = React.useState(true);
  const [categories, setCategories] = React.useState([]);

  return (
    <Context.Provider
      value={{
        isAdmin,
        setIsAdmin,
        categories,
        setCategories,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// Use app context hook
export function useAppContext() {
  return useContext(Context);
}
