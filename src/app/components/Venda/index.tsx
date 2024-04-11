"use client";
import React from "react";
import { motion } from "framer-motion";

function Venda() {
  return (
    <motion.section
      initial={{ x: "-30%" }}
      whileInView={{ x: 0 }}
      // animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col my-4"
    >
      <div className="px-2 md:px-6">
        <h1 className="text-center text-secondary text-[32px] md:text-[64px]">
          Como comprar
        </h1>

        <div>
          <p className="text-xl font-medium mt-2">
            <b>Valor do imóvel </b>-R$ 280.000 <br />
            <b>Condições: </b>15% de entrada para finalização do pagamento das
            taxas do Inventário, sendo o restante do pagamento em 35 dias para a
            entrega da documentação e da casa.
            <br />
            <br />
            Há possibilidade de financiamento bancário após o pagamento da
            entrada e da entrega da documentação do Inventário Extra Judicial
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Venda;
