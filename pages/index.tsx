"use client"
import { useEffect, useState } from "react"; 
import Header from "./components/Header"; 
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { useInView } from "react-intersection-observer"; 
import Main from "./components/Main";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false); 
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0 
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,  
    threshold: 0 
  });
  useEffect(() => { 
    if (inView) {
      setIsVisible(true);
    }
    if (inView2) {
      setIsVisible2(true);
    }
  }, [inView, inView2]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}> 
    <div id="main"></div> 
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Header />
        <Main />  

          <div id="skills" ref={ref} className={`${isVisible ? "animate" : ""}`} style={{opacity: 0}}>
            <Skills />
          </div>

          <div id="projects" ref={ref2} className={`${isVisible2 ? "animate" : ""}`} style={{opacity: 0}}>
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
  );
}
