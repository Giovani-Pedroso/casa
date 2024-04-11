import React from "react";
import { FaCar } from "react-icons/fa";
import CardDiferenciais from "./CardDiferenciais";
import { FaBed } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { RiTreeFill } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";
import { PiNumberCircleTwoFill } from "react-icons/pi";

function Diferenciais() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4  my-12 justify-around mx-8">
      <CardDiferenciais icon={<FaCar />} title="2 vaga" />
      <CardDiferenciais icon={<FaBed />} title="2 Quartos" />
      <CardDiferenciais
        icon={<FaRulerCombined />}
        title="125 metros quadrados"
      />
      <CardDiferenciais icon={<RiTreeFill />} title="Quintal" />
      <CardDiferenciais icon={<PiNumberCircleTwoFill />} title="2 Andares" />
    </section>
  );
}

export default Diferenciais;

// <CardDiferenciais icon={<FaTrainSubway />} title="proximo a estaçao" />
