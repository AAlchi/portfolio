"use client"
import { useEffect, useState } from "react";
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Quote from "./components/quote/Quote";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div id="main"></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Header />
        <Landing />
        <div className="flex flex-col">
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="resume">
            <Quote />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
