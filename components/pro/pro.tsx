
import { useRouter } from 'next/router'
// const router = useRouter()
import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Link from 'next/link';
type Props = {}

const Pro = (props: Props) => {
  
  function Store() {
    const { id } = useParams();
    console.log(id);
    const imageHasLoaded = true;
  
    return (
      <>
      <List selectedId = {id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
      </>
    );
  }
  return (
    <div className="container">
    <AnimateSharedLayout key={'crossfade'}>
          <Link href={`/a`} > {Store()} </Link>
      </AnimateSharedLayout>   
       </div>
    )
}
export default Pro