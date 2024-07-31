import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; 
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
 
const Main = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    const handleScroll = () => { 
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`h-screen`}>
      <div id="main">
        <Image src="/imgs/background.jpg" alt="image" width={100} height={100} className="h-screen w-full" />
      </div>  
      <div className="absolute flex h-screen items-center justify-center text-slate-400 animate" style={{ flexDirection: "column", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <motion.div
        ref={ref}
        initial={{ scale: 0.5 }}
        animate={{ scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} >
        <div className="text-center font-bold text-5xl md:text-6xl lg:text-8xl" style={{ textShadow: "1px 1px 1px gray", }}>Ali A. Ibrahim</div>
        <div className="text-center text-3xl md:text-4xl lg:text-5xl" style={{ textShadow: "1px 1px 1px gray", }}>Software Engineer/AI</div>
        <br></br>
        <div className="flex flex-wrap text-center justify-center gap-3 lg:gap-5 md:gap-5 text-lg md:text-xl lg:text-xl">
          <a style={{ textShadow: "1px 1px 1px white, 0 0 1em white, 0 0 0.1em black", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} href="https://github.com/AAlchi">View GitHub Repo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ width: "20px" }}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
          <Link style={{ textShadow: "1px 1px 1px white, 0 0 1em white, 0 0 0.1em black", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} href="/resume">View Resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ width: "20px" }}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </Link>
        </div>
      </motion.div>

      </div>
    </div>
  );
};

export default Main