import { useEffect, useState } from "react";

 
const Header = () => {
  const [scrollSet, setScrollSet] = useState(false)

  function goTo(arg: String) { 
    const theScroll = document.getElementById(arg as string)  

    theScroll?.scrollIntoView({
      behavior: "smooth",
      block: `${arg == "contact" ? "end" : "start"}`
    })
  }

  useEffect(() => { 
    const scroll = () => {
      if (window.scrollY > 80) {
        setScrollSet(true)
      } else if (window.scrollY < 80) {
        setScrollSet(false)
      }  
    }

    window.addEventListener("scroll", scroll)
    
    return () => {
      window.addEventListener("scroll", scroll)
    }
  }, [])

  return (
    <div className={`${scrollSet ? "sticky" : "absolute"} w-full`} style={{top: "0", zIndex: "9"}}>
       <header 
        id="header"
        className="flex flex-wrap gap-3 items-center justify-between p-6 text-white font-bold"
        style={{
          top: "0",
          backgroundColor: "rgb(0, 0, 0, 0.7)",
          opacity: `${scrollSet ? 0.9 : 1}`
        }}
      >
        <h2 className="text-white text-2xl" style={{ opacity: "1" }}>
          Ali A. Ibrahim
        </h2>
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        > 
        </ul>
        <ul className="shouldWhatShow">
          <li onClick={() => goTo("main")}>Home</li>
          <li onClick={() => goTo("skills")}>Skills</li>
          <li onClick={() => goTo("projects")}>Projects</li>
          <li onClick={() => goTo("resume")}>Resume</li>
          <li onClick={() => goTo("contact")}>Contact</li>
         </ul>
      </header>
      </div>
   );
};

export default Header