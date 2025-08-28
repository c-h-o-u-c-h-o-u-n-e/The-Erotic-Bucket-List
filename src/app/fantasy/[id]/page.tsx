"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { EroticBucketListHeader } from "@/components/EroticBucketListHeader";
import { LanguageSelector } from "@/components/LanguageSelector";

// Interface pour définir la structure d'un élément de fantasme
interface FantasyItem {
  id: string;
  title: string;
  description: string;
  category: string;
  preparation: string;
  duration: string;
  difficulty: string;
}

// Types pour les éditions et les langues (dupliqués de page.tsx pour l'autonomie du composant)
type Edition = "straight" | "gay" | "sapphic";
type Language = "en" | "fr" | "es";

// Données de remplacement pour le modèle
const placeholderFantasyItem: FantasyItem = {
  id: "1",
  title: "Explorer les profondeurs du désir",
  description: "Plongez dans un voyage sensoriel inoubliable, où chaque sensation est amplifiée et chaque fantasme prend vie. Laissez-vous guider par vos instincts les plus primaires et découvrez des plaisirs insoupçonnés. Ce fantasme vous invite à explorer les limites de votre imagination et à vous abandonner entièrement à l'expérience.",
  category: "Exploration Sensorielle",
  preparation: "30 minutes",
  duration: "2 heures",
  difficulty: "Modérée",
};

export default function FantasyPage({ params, searchParams }: { params: { id: string }, searchParams?: { [key: string]: string | string[] | undefined } }) {
  // Dans une application réelle, vous récupéreriez les données en fonction de params.id
  // Pour ce modèle, nous utilisons les données de remplacement.
  const item = placeholderFantasyItem;

  // États pour le sélecteur de langue et l'édition, comme sur la page d'accueil
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
        <Card className="w-full bg-header shadow-custom-header">
          <CardHeader className="text-center pb-0">
            <CardTitle className="font-inter font-black uppercase text-3xl md:text-4xl leading-tight">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="font-wf-visual-sans text-lg mb-4">
              {item.description}
            </p>

            <Separator className="my-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-jetbrains-mono text-sm text-muted-foreground">Catégorie:</p>
                <p className="font-wf-visual-sans text-base">{item.category}</p>
              </div>
              <div>
                <p className="font-jetbrains-mono text-sm text-muted-foreground">Préparation:</p>
                <p className="font-wf-visual-sans text-base">{item.preparation}</p>
              </div>
              <div>
                <p className="font-jetbrains-mono text-sm text-muted-foreground">Durée:</p>
                <p className="font-wf-visual-sans text-base">{item.duration}</p>
              </div>
              <div>
                <p className="font-jetbrains-mono text-sm text-muted-foreground">Difficulté:</p>
                <p className="font-wf-visual-sans text-base">{item.difficulty}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}