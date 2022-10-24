import React, { createContext, useContext, useState } from "react";

export const ProgressContext = createContext();

export default function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(undefined);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    const { progress, setProgress } = context;
    return { progress, setProgress };
}
