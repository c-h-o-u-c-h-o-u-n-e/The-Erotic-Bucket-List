"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Separator } from "@/components/ui/separator"; // Importation du composant Separator

type Language = "en" | "fr" | "es";

interface LanguageSelectorProps {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  selectedEditionColorClass: string; // Cette prop n'est plus utilisée pour la couleur des boutons, mais elle est toujours passée.
}

const languageData: { id: Language; label: string }[] = [
  { id: "en", label: "En" },
  { id: "fr", label: "Fr" },
  { id: "es", label: "Es" },
];

export function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  selectedEditionColorClass,
}: LanguageSelectorProps) {
  const buttonBaseClasses =
    "uppercase font-inter font-normal text-black rounded-md px-2 py-2 text-xs text-center transition-opacity duration-300 ease-in-out focus:outline-none border-none bg-transparent"; // Texte noir et arrière-plan transparent

  return (
    <Card className="w-fit bg-header shadow-custom-header">
      <CardContent className="p-3 flex flex-row items-center justify-center"> {/* Retrait de flex-wrap et gap-2 */}
        {languageData.map((lang, index) => (
          <React.Fragment key={lang.id}>
            <button
              onClick={() => setSelectedLanguage(lang.id)}
              className={cn(
                buttonBaseClasses,
                {
                  "opacity-40 hover:opacity-70": selectedLanguage !== lang.id, // Opacités ajustées
                  "opacity-100": selectedLanguage === lang.id,
                }
              )}
            >
              {lang.label}
            </button>
            {index < languageData.length - 1 && (
              <Separator orientation="vertical" className="h-6 w-[1px] bg-gray-300 mx-2" /> // Séparateur vertical
            )}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
}