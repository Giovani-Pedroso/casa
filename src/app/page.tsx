import Image from "next/image";
import Hero from "./components/Hero";
import Diferenciais from "./components/Differenciais";
import Galeria from "./components/Galeria";

export default function Home() {
  return (
    <main>
      <Hero />
      <Diferenciais />
      <Galeria />
    </main>
  );
}
