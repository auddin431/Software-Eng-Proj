//type rafce + tab to get basic structure
import React, { useState } from "react";
import NavBar from "../pages/NavBar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [test, setTest] = useState("");

  const call = async () => {
    try {
      const ret = await fetch("http://localhost:9000/testAPI/bruh");
      const text = await ret.text();
      setTest(text);
    } catch (err) {
      console.log(err);
    }
  };

  const pp = async () => {
    try {
      const postTest = await fetch("http://localhost:9000/testAPI/bruh69", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bruh: "moment" }),
      });
      //   const text = await ret.text();
      //   setTest(text);
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    call();
    pp();
  };

  return (
    <HeroContainer>
      <NavBar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Hotdog Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroP>{test}</HeroP>
          <HeroBtn onClick={toggle}>Open Menu</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
