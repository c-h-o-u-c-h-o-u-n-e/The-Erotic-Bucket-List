"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type Edition = "straight" | "gay" | "sapphic";
type Language = "en" | "fr" | "es";

interface EditionSelectorProps {
  selectedEdition: Edition;
  setSelectedEdition: (edition: Edition) => void;
  selectedLanguage: Language;
}

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

export function EditionSelector({
  selectedEdition,
  setSelectedEdition,
  selectedLanguage,
}: EditionSelectorProps) {
  const buttonBaseClasses =
    "uppercase font-jetbrains-mono font-light text-[14px] text-black rounded-md px-2 text-center transition-opacity duration-300 ease-in-out focus:outline-none border-none";

  return (
    <Card>
      <CardContent className="p-4 flex flex-row flex-wrap justify-center gap-0">
        {editionData.map((edition) => (
          <button
            key={edition.id}
            onClick={() => setSelectedEdition(edition.id)}
            className={cn(
              buttonBaseClasses,
              edition.colorClass,
              "flex-grow-0 flex-shrink-0 basis-[calc(33.33%-1rem)] max-md:basis-full", // For 3 buttons with gap-4, full width on small screens
              {
                "opacity-30 hover:opacity-70": selectedEdition !== edition.id,
                "opacity-100": selectedEdition === edition.id,
              }
            )}
          >
            {edition.labels[selectedLanguage]}
          </button>
        ))}
      </CardContent>
    </Card>
  );
}