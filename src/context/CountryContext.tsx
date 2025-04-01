"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// Define the context type
interface CountryContextType {
  selected: string;
  setSelected: (country: string) => void;
}

// Create the context
const CountryContext = createContext<CountryContextType | null>(null);

// Create Provider
export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<string>("");

  return (
    <CountryContext.Provider value={{ selected, setSelected }}>
      {children}
    </CountryContext.Provider>
  );
};

// Custom Hook
export const useCountry = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider!");
  }

  return context;
};
