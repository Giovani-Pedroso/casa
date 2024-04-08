"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
type Props = {
  title: string;
  icon: any;
};
function CardDiferenciais(props: Props) {
  return (
    <motion.div
      className="flex flex-col  rounded-lg  p-4 items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-[60px]  mb-4 text-primary">{props.icon}</div>
      <div className="text-xl font-medium text-center">{props.title}</div>
    </motion.div>
  );
}

export default CardDiferenciais;
