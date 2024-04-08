import React from "react";
import { FaCar } from "react-icons/fa";
import CardDiferenciais from "./CardDiferenciais";
import { FaBed } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { RiTreeFill } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";

function Diferenciais() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4  my-12 justify-around mx-8">
      <CardDiferenciais icon={<FaCar />} title="2 vaga" />
      <CardDiferenciais icon={<FaBed />} title="2 Quartos" />
      <CardDiferenciais icon={<FaTrainSubway />} title="proximo a estaçao" />
      <CardDiferenciais icon={<FaRulerCombined />} title="125m" />
      <CardDiferenciais icon={<RiTreeFill />} title="Quintal" />
      <CardDiferenciais icon={<GiSchoolBag />} title="Proximo a 4 escolas" />
      <CardDiferenciais icon={<FaCar />} title="2 quartos" />
      <CardDiferenciais icon={<FaCar />} title="2 quartos" />
      <CardDiferenciais icon={<FaCar />} title="2 quartos" />
      <CardDiferenciais icon={<FaCar />} title="2 quartos" />
    </section>
  );
}

export default Diferenciais;
