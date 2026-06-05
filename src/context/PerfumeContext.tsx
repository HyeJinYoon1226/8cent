import { createContext, useContext, useEffect, useState } from "react";
import type { Perfume } from "../types/perfume";

type PerfumeContextType = {
  savedPerfumes: Perfume[];
  savePerfume: (perfume: Perfume) => void;
  removePerfume: (id: number) => void;
};

const PerfumeContext = createContext<PerfumeContextType | null>(null);

export function PerfumeProvider({ children }: { children: React.ReactNode }) {
  const [savedPerfumes, setSavedPerfumes] = useState<Perfume[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("savedPerfumes");
    if (data) {
      setSavedPerfumes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedPerfumes", JSON.stringify(savedPerfumes));
  }, [savedPerfumes]);

  const savePerfume = (perfume: Perfume) => {
    const exists = savedPerfumes.some((item) => item.id === perfume.id);
    if (!exists) {
      setSavedPerfumes([...savedPerfumes, perfume]);
      alert("향수가 저장되었습니다.");
    } else {
      alert("이미 저장된 향수입니다.");
    }
  };

  const removePerfume = (id: number) => {
    setSavedPerfumes(savedPerfumes.filter((item) => item.id !== id));
  };

  return (
    <PerfumeContext.Provider value={{ savedPerfumes, savePerfume, removePerfume }}>
      {children}
    </PerfumeContext.Provider>
  );
}

export function usePerfume() {
  const context = useContext(PerfumeContext);
  if (!context) {
    throw new Error("usePerfume must be used within PerfumeProvider");
  }
  return context;
}