import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Types pour les éditions (dupliqués ici pour l'autonomie de la fonction)
type Edition = "straight" | "gay" | "sapphic";

// Fonction utilitaire pour obtenir le nom de l'édition
export const getEditionName = (edition: Edition) => {
  switch (edition) {
    case "straight":
      return "Straight Edition";
    case "gay":
      return "Gay Edition";
    case "sapphic":
      return "Sapphic Edition";
    default:
      return "";
  }
};