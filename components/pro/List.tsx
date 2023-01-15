import React from "react";
import { items } from "../pro/data";
import Link from 'next/link'
import { motion } from "framer-motion";
import Image from "next/image";

interface card { id?: String , title?: String, category?: String, theme?: String, isSelected?:boolean}

function Card ( card: card ) {
  return (
    <li className={`card ${card.theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${card.id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${card.id}`}
          >
            <Image  className="card-image" src={`images/${card.id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${card.id}`}
          >
            <span className="category">{card.category}</span>
            <h2>{card.title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link href={'${card.id}'} className={`card-open-link`} />
    </li>
  );
}

export function List( selectedId: any) {
  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
