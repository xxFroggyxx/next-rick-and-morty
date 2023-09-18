import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <h1>Rick and Morty</h1>
      <Gallery />
    </main>
  );
}
