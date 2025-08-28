"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Separator } from "@/components/ui/separator";

type Language = "en" | "fr" | "es";
type Edition = "straight" | "gay" | "sapphic";

interface LanguageSelectorProps {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  selectedEdition: Edition; // La prop selectedEdition est maintenant utilisée directement
}

const languageData: { id: Language; label: string }[] = [
  { id: "en", label: "En" },
  { id: "fr", label: "Fr" },
  { id: "es", label: "Es" },
];

export function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  selectedEdition, // Récupération de la prop selectedEdition
}: LanguageSelectorProps) {
  const buttonBaseClasses =
    "font-inter font-normal rounded-md px-2 py-0.5 text-sm text-center transition-opacity duration-300 ease-in-out focus:outline-none border-none bg-transparent";

  // Construction de la classe de couleur de texte directement à partir de l'édition sélectionnée
  const textColorClass = `text-edition-${selectedEdition}`;

  return (
    <Card className="w-fit bg-header shadow-custom-header">
      <CardContent className="px-3 py-1 flex flex-row items-center justify-center">
        {languageData.map((lang, index) => (
          <React.Fragment key={lang.id}>
            <button
              onClick={() => setSelectedLanguage(lang.id)}
              className={cn(
                buttonBaseClasses,
                textColorClass, // Application de la classe de couleur Tailwind nommée
                {
                  "opacity-40 hover:opacity-70": selectedLanguage !== lang.id,
                  "opacity-100": selectedLanguage === lang.id,
                }
              )}
            >
              {lang.label}
            </button>
            {index < languageData.length - 1 && (
              <Separator orientation="vertical" className="h-6 w-[1px] bg-gray-300 mx-2" />
            )}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}