"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { EroticBucketListHeader } from "@/components/EroticBucketListHeader";
import { EditionSelector } from "@/components/EditionSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MainContentCard } from "@/components/MainContentCard";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

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
      {/* Language Selector and Breadcrumb */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <Card className="w-fit bg-header shadow-custom-header">
          <CardContent className="px-3 py-1">
            <Breadcrumb>
              <BreadcrumbList className="font-wf-visual-sans h-6"> {/* Ajout de la police et de la hauteur ici */}
                <BreadcrumbItem>
                  <BreadcrumbPage>Accueil</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>
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
        <MainContentCard />
      </main>
    </div>
  );
}