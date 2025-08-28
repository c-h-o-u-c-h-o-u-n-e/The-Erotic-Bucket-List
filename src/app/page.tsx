"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { EroticBucketListHeader } from "@/components/EroticBucketListHeader";
import { EditionSelector } from "@/components/EditionSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MainContentCard } from "@/components/MainContentCard"; // Import du nouveau composant
import { useState } from "react";

type Edition = "straight" | "gay" | "sapphic";
type Language = "en" | "fr" | "es";

const editionDataForColor: {
  id: Edition;
  colorClass: string;
}[] = [
  { id: "straight", colorClass: "bg-edition-straight" },
  { id: "gay", colorClass: "bg-edition-gay" },
  { id: "sapphic", colorClass: "bg-edition-sapphic" },
];

export default function Home() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>("straight");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8">
      {/* Language Selector above header, aligned right */}
      <div className="w-full max-w-2xl flex justify-end mb-4">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedEdition={selectedEdition}
        />
      </div>

      <main className="flex flex-col gap-4 w-full max-w-2xl">
        <EroticBucketListHeader selectedEdition={selectedEdition} />
        <EditionSelector
          selectedEdition={selectedEdition}
          setSelectedEdition={setSelectedEdition}
          selectedLanguage={selectedLanguage}
        />
        <MainContentCard /> {/* Ajout de la nouvelle carte ici */}
      </main>
    </div>
  );
}