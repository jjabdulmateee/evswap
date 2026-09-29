import { createContext, useContext, useState, ReactNode } from "react";

interface MapContextType {
  isOpen: boolean;
  openMap: () => void;
  closeMap: () => void;
}

const MapContext = createContext<MapContextType | null>(null);

export function MapProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MapContext.Provider value={{ isOpen, openMap: () => setIsOpen(true), closeMap: () => setIsOpen(false) }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMap must be used within MapProvider");
  return ctx;
}
