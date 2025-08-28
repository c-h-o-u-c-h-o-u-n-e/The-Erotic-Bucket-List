import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function EroticBucketListHeader() {
  return (
    <Card className="w-full max-w-2xl bg-header rounded-lg shadow-custom-header">
      <CardHeader className="text-center">
        <CardTitle className="font-inter font-black uppercase text-4xl md:text-5xl leading-tight">
          The Erotic Bucket List
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-2">
        <Separator className="my-2 bg-gray-300" />
        <p className="font-inter font-black uppercase text-xl md:text-2xl text-center leading-tight">
          500 Things To Do Before You Cum
        </p>
      </CardContent>
    </Card>
  );
}