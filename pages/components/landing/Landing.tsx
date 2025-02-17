import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react"; 
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";

interface AnimatedDivProps {
  children: ReactNode;
  transitionTime: number;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, transitionTime }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5 }}
      animate={{ scale: inView ? 1 : 0.5 }}
      transition={{ duration: transitionTime, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
 
const Landing = () => {   
  return (
    <div className={`h-screen`}>
      <div id="main">
        <Image src="/imgs/background.jpg" alt="image" width={100} height={100} className="h-screen w-full" />
      </div>  
      <div className="absolute flex h-screen items-center justify-center text-slate-400 animate" style={{ flexDirection: "column", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

        <AnimatedDiv transitionTime={0.5}>
          <div className="text-center font-bold text-5xl md:text-6xl lg:text-8xl" style={{ textShadow: "1px 1px 1px gray" }}>
            Ali A. Ibrahim
          </div>
        </AnimatedDiv>

        <AnimatedDiv transitionTime={0.7}>
          <div className="text-center text-3xl md:text-4xl lg:text-5xl" style={{ textShadow: "1px 1px 1px gray" }}>
            Software Engineer/AI
          </div>
        </AnimatedDiv>
        <br></br>
        <AnimatedDiv transitionTime={0.8}>
          <div className="flex flex-wrap text-center justify-center gap-3 lg:gap-5 md:gap-5 text-lg md:text-xl lg:text-xl">
            <Link target="_blank" className="flex items-center gap-2 cursor-pointer" style={{ textShadow: "1px 1px 1px white, 0 0 1em white, 0 0 0.1em black" }} href="https://github.com/AAlchi">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            <Link target="_blank" className="flex items-center gap-2 cursor-pointer" style={{ textShadow: "1px 1px 1px white, 0 0 1em white, 0 0 0.1em black" }} href="/resume">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            <Link target="_blank" className="flex items-center gap-2 cursor-pointer" style={{ textShadow: "1px 1px 1px white, 0 0 1em white, 0 0 0.1em black" }} href="https://www.linkedin.com/in/aliai07">
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </AnimatedDiv> 

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce absolute bottom-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Landing