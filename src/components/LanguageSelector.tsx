"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Separator } from "@/components/ui/separator";

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
    "font-inter font-normal rounded-md px-2 py-0.5 text-sm text-center transition-opacity duration-300 ease-in-out focus:outline-none border-none bg-transparent";

  const textColorClass = selectedEditionColorClass.replace('bg-', 'text-');

  return (
    <Card className="w-fit bg-header shadow-custom-header">
      <CardContent className="px-3 py-1 flex flex-row items-center justify-center"> {/* Changement de p-3 à px-3 py-1 */}
        {languageData.map((lang, index) => (
          <React.Fragment key={lang.id}>
            <button
              onClick={() => setSelectedLanguage(lang.id)}
              className={cn(
                buttonBaseClasses,
                textColorClass,
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