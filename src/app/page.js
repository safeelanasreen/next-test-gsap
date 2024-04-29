"use client"
import Image from 'next/image';
import Assets from './Assets';
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import style from "./page.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const Home=()=> {
  const container = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  useGSAP(() => {
    // use selectors...
    gsap.to(".box", { rotation: "+=360", duration: 3 });

    // or refs...
  },
  { scope: container }
);
  return (
    <main className={style.main}>
      <section className={` ${isLoaded ? style.active : ''}`}>
        <figure className='mb-0 '>
          <Image src={Assets.banner} fill alt='img' objectFit='cover'/>
        </figure>
        <div className={style.mask}>

        </div>
   
      </section>
      <div className="container" ref={container}>
      <div className="box"></div>

      </div>

    </main>
  );
}
export default Home