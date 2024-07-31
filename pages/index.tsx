"use client"
import { useEffect, useState } from "react"; 
import Header from "./components/Header"; 
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Footer from "./components/Footer"; 
import Main from "./components/Main";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}> 
    <div id="main"></div> 
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Header />
        <Main />  
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
