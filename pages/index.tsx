"use client"
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Quote from "./components/quote/Quote";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali A Ibrahim | Software Engineer/AI</title>
      </Head>
      <div className="flex flex-col w-full"> 
        <Header />
        <Landing />
        <div className="w-full h-2"/>
         
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
    </>
  );
}
