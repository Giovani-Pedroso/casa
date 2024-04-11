import Image from "next/image";
import Hero from "./components/Hero";
import Diferenciais from "./components/Differenciais";
import Galeria from "./components/Galeria";
import Mapa from "./components/Mapa";
import Venda from "./components/Venda";
import Section from "./components/UI/Section";
import FiveMin from "./components/5Min";

export default function Home() {
  return (
    <main>
      <Hero />
      <Diferenciais />

      <div className="px-2 md:px-6">
        <h1 className="text-center text-secondary text-[32px] md:text-[64px]">
          Conheça mais sobre o imóvel
        </h1>
        <Section animate="left" imgsrc="/webp/39.webp" headerlevel={1} title="">
          Localizada na Rua Principal do bairro, esta residencia está
          estrategicamente posicionada para oferecer acesso rápido e conveniente
          ao Fórum de Itapevi, situado a menos de 10 minutos de distância pela
          Rodovia Renê Benedito de Silva. Além disso, sua localização
          privilegiada proporciona acesso facilitado às cidades de São Roque,
          Cotia e Jandira. A proximidade com importantes estabelecimentos
          comerciais é um destaque, com o Atacadão, Assaí e Paraná a apenas 5
          minutos de distância. A segurança pública também é uma prioridade, com
          a Guarda Civil de Itapevi e a Delegacia da Mulher nas proximidades.
          Esta residência está convenientemente localizada a apenas 5 minutos a
          pé da Escola do Futuro do Jardim Santa Rita, e também próxima de
          outras escolas de Ensino Fundamental e Médio.
        </Section>

        <h1 className="text-secondary text-center  mt-12 text-xl md:text-4xl">
          Em 5 minutos você pode ir para:
        </h1>
        <FiveMin />
      </div>
      <Mapa />
      <Venda />
      <Galeria />
    </main>
  );
}
