import React from "react";
import { FaCar } from "react-icons/fa";
// import CardDiferenciais from "./CardDiferenciais";
import { FaBed } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa6";
import { RiTreeFill } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import CardDiferenciais from "../Differenciais/CardDiferenciais";
import { FaSchool } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

function FiveMin() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4  my-12 justify-around mx-8">
      <CardDiferenciais icon={<FaShoppingCart />} title="3 Atacadistas" />
      <CardDiferenciais icon={<FaSchool />} title="3 Escolas" />
      <CardDiferenciais
        icon={<FaHospital />}
        title="1 Centro Integradode Saúde (CIS)"
      />
      <CardDiferenciais icon={<FaBalanceScale />} title="Forum de Itapevi" />
    </section>
  );
}

export default FiveMin;

// <CardDiferenciais icon={<FaTrainSubway />} title="proximo a estaçao" />
