import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils"; // Import de cn pour combiner les classes

type Edition = "straight" | "gay" | "sapphic";

interface EroticBucketListHeaderProps {
  selectedEdition: Edition;
}

export function EroticBucketListHeader({ selectedEdition }: EroticBucketListHeaderProps) {
  // Définir la classe de couleur de fond en fonction de l'édition sélectionnée
  const separatorColorClass = `bg-edition-${selectedEdition}`;

  return (
    <Card className="w-full max-w-2xl bg-header rounded-lg shadow-custom-header">
      <CardHeader className="text-center pb-0">
        <CardTitle className="font-inter font-black uppercase text-4xl md:text-5xl leading-tight">
          The Erotic Bucket List
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {/* Utilisation de cn pour appliquer la classe de couleur dynamique */}
        <Separator className={cn("my-4", separatorColorClass)} />
        <p className="font-inter font-black uppercase text-xl md:text-2xl text-center leading-tight">
          500 Things To Do Before You Cum
        </p>
      </CardContent>
    </Card>
  );
}