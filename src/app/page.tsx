import { MadeWithDyad } from "@/components/made-with-dyad";
import { EroticBucketListHeader } from "@/components/EroticBucketListHeader";
import { EditionSelector } from "@/components/EditionSelector";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8">
      <main className="flex flex-col gap-8 w-full max-w-2xl">
        <EroticBucketListHeader />
        <EditionSelector />
      </main>
    </div>
  );
}