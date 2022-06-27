import React, { useContext } from "react";

// Context
export const Context = React.createContext();

// Provider
export default function Provider({ children }) {
  // Variables
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [categoryOnView, setCategoryOnView] = React.useState(null);

  return (
    <Context.Provider
      value={{
        isAdmin,
        setIsAdmin,
        categories,
        setCategories,
        categoryOnView,
        setCategoryOnView,
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
