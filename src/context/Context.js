import React from "react";

// Context
export const Context = React.createContext();

// Provider
export default function Proider({ children }) {
  // Data
  const [isAdmin, setIsAdmin] = React.useState(true);
  const [categories, setCategories] = React.useState([]);

  return (
    <Context.Provider
      value={{ isAdmin, setIsAdmin, categories, setCategories }}
    >
      {children}
    </Context.Provider>
  );
}
