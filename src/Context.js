import React from "react";

// Context
export const Context = React.createContext();

// Provider
export default function Proider({ children }) {
  const [isAdmin, setIsAdmin] = React.useState(true);

  return (
    <Context.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </Context.Provider>
  );
}
