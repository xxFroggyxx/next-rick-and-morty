import { Gallery } from "@/components/Gallery";
import Logo from "../../public/Rick-And-Morty-Logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-6 lg:p-4">
      <Image
        src={Logo}
        alt="Official logo of Rick and Morty"
        height={225}
        priority
      />
      <Gallery />
    </main>
  );
}
