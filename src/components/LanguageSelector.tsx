"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type Language = "en" | "fr" | "es";

interface LanguageSelectorProps {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  selectedEditionColorClass: string;
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
    "uppercase font-inter font-bold text-white rounded-md px-2 py-2 text-xs text-center transition-opacity duration-300 ease-in-out focus:outline-none border-none";

  return (
    <Card className="w-fit">
      <CardContent className="p-3 flex flex-row flex-wrap justify-center gap-2">
        {languageData.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedLanguage(lang.id)}
            className={cn(
              buttonBaseClasses,
              selectedEditionColorClass,
              "flex-grow-0 flex-shrink-0 basis-[calc(33.33%-0.5rem)]", // For 3 buttons with gap-2
              {
                "opacity-30 hover:opacity-70": selectedLanguage !== lang.id,
                "opacity-100": selectedLanguage === lang.id,
              }
            )}
          >
            {lang.label}
          </button>
        ))}
      </CardContent>
    </Card>
  );
}