"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import du composant Button
import Link from "next/link"; // Import du composant Link
import React from "react";

export function MainContentCard() {
  return (
    <Card className="w-full bg-header shadow-custom-header">
      <CardContent className="p-6 font-wf-visual-sans text-lg">
        {/* Contenu principal de l'application */}
        <p>Ceci est le contenu principal de l'application.</p>
        <p>Il devrait utiliser la police WF Visual Sans.</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-6 text-center">
          <Link href="/fantasy/1" passHref>
            <Button className="font-inter font-bold text-lg px-8 py-4">
              Voir un exemple de fantasme
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}