import { MadeWithDyad } from "@/components/made-with-dyad";
import { EroticBucketListHeader } from "@/components/EroticBucketListHeader";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-4 pb-4 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <EroticBucketListHeader />
      </main>
      <MadeWithDyad />
    </div>
  );
}