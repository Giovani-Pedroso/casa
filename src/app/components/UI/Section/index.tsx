"use client";
import { reverse } from "dns";
import image from "next/image";
import react, { ReactNode } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

type props = {
  imgsrc: string;
  title: string;
  reverse?: boolean;
  children: ReactNode;
  animate?: "right" | "left" | "scale";
  headerlevel: 1 | 2 | 3 | 4;
};

const class_title = "text-primary text-[32px] md:text-[64px]";

const variants = {
  none: {},
  left: { x: "0%" },
  right: { x: "0%" },
  scale: { scale: 1.0 },
};

const variantsinit = {
  none: {},
  left: { x: "-30%" },
  right: { x: "30%" },
  scale: { scale: 0.6 },
};

function Section(props: props) {
  return (
    <motion.section
      variants={variants}
      initial={props.animate ? variantsinit[props.animate] : variants["none"]}
      whileInView={props.animate ? props.animate : "none"}
      // animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col my-4"
    >
      <Title headerLevel={props.headerlevel} title={props.title} invert="yes" />
      <div
        className={`flex flex-col md:flex-row ${props.reverse ? "md:flex-row-reverse" : ""} justify-between`}
      >
        <img src={props.imgsrc} alt="logo" className="w-full md:w-[40%]" />
        <div className="md:max-w-[40%]">
          <Title
            headerLevel={props.headerlevel}
            title={props.title}
            invert="no"
          />
          <p className="text-xl text-justify font-medium">{props.children}</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Section;
