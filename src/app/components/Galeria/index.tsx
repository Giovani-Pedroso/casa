"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import { motion } from "framer-motion";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

type PropsModal = {
  isOpen: boolean;
  closeModal: any;
  src: string;
};
const Modal = (props: PropsModal) => {
  if (!props.isOpen) return;

  return (
    <div
      onClick={props.closeModal}
      className="sticky z-50 p-[4%] md:p-[10%] flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#1a1a1aaa] "
    >
      <img className="rounded-lg" src={props.src} alt="Image fro the modal" />
    </div>
  );
};

export default function Galeria() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [srcModal, setSrcModal] = React.useState("");

  const openModal = (src: string) => {
    setIsModalOpen(true);
    setSrcModal(src);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal src={srcModal} isOpen={isModalOpen} closeModal={closeModal} />
      <h1 className="text-center mb-8 text-4xl font-medium text-secondary">
        Conheça mais sobre a casa
      </h1>
      <ImageList
        sx={{ width: "100%", height: "50%" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              onClick={() => {
                openModal(item.img);
              }}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "/raw/10.jpeg",
    title: "Breakfast",
    rows: 3,
    cols: 2,
  },
  {
    img: "/raw/05.jpeg",
    title: "Burger",
  },
  {
    img: "/raw/12.jpeg",
    title: "Camera",
  },
  {
    img: "/raw/16.jpeg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "/raw/18.jpeg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "/raw/20.jpeg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "/raw/21.jpeg",
    title: "Basketball",
  },
  {
    img: "/raw/27.jpeg",
    title: "Fern",
  },
  {
    img: "/raw/23.jpeg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "/raw/28.jpeg",
    title: "Tomato basil",
  },
  {
    img: "/raw/29.jpeg",
    title: "Sea star",
  },
  {
    img: "/raw/27.jpeg",
    title: "Bike",
    cols: 2,
    rows: 3,
  },
  {
    img: "/raw/31.jpeg",
    title: "Bike",
  },
  {
    img: "/raw/32.jpeg",
    title: "Bike",
  },
  {
    img: "/raw/43.jpeg",
    title: "Bike",
    cols: 2,
    rows: 3,
  },
  {
    img: "/raw/33.jpeg",
    title: "Bike",
  },
  {
    img: "/raw/37.jpeg",
    title: "Bike",
  },
];
