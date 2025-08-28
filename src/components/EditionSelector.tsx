"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Edition = "straight" | "gay" | "sapphic";
type Language = "en" | "fr" | "es";

const editionData: {
  id: Edition;
  colorClass: string;
  labels: Record<Language, string>;
}[] = [
  {
    id: "straight",
    colorClass: "bg-edition-straight",
    labels: {
      en: "The Straight Edition",
      fr: "Édition hétéro",
      es: "Edición hetero",
    },
  },
  {
    id: "gay",
    colorClass: "bg-edition-gay",
    labels: {
      en: "The Gay Edition",
      fr: "Édition gay",
      es: "Edición gay",
    },
  },
  {
    id: "sapphic",
    colorClass: "bg-edition-sapphic",
    labels: {
      en: "The Sapphic Edition",
      fr: "Édition saphique",
      es: "Edición sáfica",
    },
  },
];

const languageData: { id: Language; label: string }[] = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
  { id: "es", label: "Español" },
];

export function EditionSelector() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>("straight");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");

  const selectedEditionColorClass =
    editionData.find((e) => e.id === selectedEdition)?.colorClass || "bg-gray-500";

  const buttonBaseClasses =
    "w-full uppercase font-jetbrains-mono font-normal text-white rounded-md p-4 text-center transition-opacity duration-300 ease-in-out focus:outline-none border-none";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <Card>
        <CardContent className="p-6 flex flex-row flex-wrap justify-center gap-4">
          {editionData.map((edition) => (
            <button
              key={edition.id}
              onClick={() => setSelectedEdition(edition.id)}
              className={cn(
                buttonBaseClasses,
                edition.colorClass,
                {
                  "opacity-50 hover:opacity-75": selectedEdition !== edition.id,
                  "opacity-100": selectedEdition === edition.id,
                }
              )}
            >
              {edition.labels[selectedLanguage]}
            </button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-row flex-wrap justify-center gap-4">
          {languageData.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(lang.id)}
              className={cn(
                buttonBaseClasses,
                selectedEditionColorClass,
                {
                  "opacity-50 hover:opacity-75": selectedLanguage !== lang.id,
                  "opacity-100": selectedLanguage === lang.id,
                }
              )}
            >
              {lang.label}
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}