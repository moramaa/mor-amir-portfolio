import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'
import { items } from "../pro/data";
import Image from "next/image";

export function Item( id: any ) {
  const itemId = items.find(item => item.id === id);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link href="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <Image  className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{itemId?.category}</span>
            <h2>{itemId?.title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>

          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
