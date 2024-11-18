import { useState } from "react"; 
import Image from "next/image";
import Link from "next/link"; 
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";   
import data from "../global/data/data";

const Projects = () => { 
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  }); 
  function setName(name: string, images: string[]) {
    setIsOn(true)
    setNameSet(name)
    setImagesPopup(images as any)
  }  
  const [isOn, setIsOn] = useState(false)
  const [nameSet, setNameSet] = useState("")
  const [imagesPopup, setImagesPopup] = useState([])

  const { projects, icons } = data()
  return (
    <div>  
    {isOn && (
       <div id="popup" className='fixed px-2 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50' style={{left: "50%", transform: "translateX(-50%)"}}>
       <div className='flex flex-col w-full md:w-3/5 lg:w-3/5 bg-slate-100 mt-20 p-5 rounded' style={{height: "85vh", overflowY: "hidden"}}>
             <div className='flex items-center justify-between'>
                 <h1 className='text-3xl mt-2 font-bold'>{nameSet}</h1>
                 <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOn(false)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
             </div>  
      <br></br>
      <div style={{overflowY: "auto"}} className="flex w-full flex-wrap justify-evenly">
           {imagesPopup.map(img => (
             <div key={img}>
               <Image width={100} height={100} src={img} alt="image" style={{maxHeight: "70vh", width: "auto"}} />
               <br></br>
             </div>
           ))}  
</div>
      </div>
   </div> 
    )}
    
    <div
      style={{ 
        backgroundColor: "#DBD9E4",
        display: "flex",
        flexDirection: "column",
        gap: "30px" 
      }} 
      className="p-5"
      ref={ref}
    >
      <h1 className="text-3xl font-bold">Projects</h1>

      {projects.projects.map((data) => (
         <motion.div 
         initial={{ scale: 0}}
         animate={{ scale: inView ? 1 : 0 }}
         transition={{ duration: Number(data._id) - 0.5, ease: "easeInOut" }} 
         key={data.name}
         id={data._id}
          className={`w-full shadow-lg flex-col justify-between bg-white p-10`}
          style={{ borderRadius: "5px" }}> 
          <div className="flex justify-between gap-7">
          <div
            className="w-3/6 justify-between shouldImageAppearCheck"
            style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "white", borderRadius: "5px" }}
          >
            <div>
              <h2 className="text-2xl"><span className="font-bold">{data.name}</span></h2>
              <p style={{ paddingTop: "5px" }}>{data.description}</p>
              <br></br>
              <ul style={{ display: "flex", flexDirection: "row", marginTop: "10px", gap: "25px", flexWrap: "wrap", fontWeight: "bold" }}>
                {data.languages.map((first, index) => (
                  <div key={first} className="flex items-center gap-2 pl-2 pr-2">
                    <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={icons(first)!}/>
                    <li key={index}>{first}</li>
                  </div>
                ))}
              </ul>
            </div> 
          </div>
          <div className="w-3/6 shouldImageAppear">
            <div className="flex justify-evenly flex-wrap"> 
                <Image 
                  width={100} height={100}
                  className="grid gap-4 w-full"
                  style={{maxHeight: "85vh", width: "auto"}}
                  src={data.img[0]}
                  alt="projectName" 
                />  
                <div className="shouldImageAppearNext">
                {data.phone && (
                  <Image 
                  width={100} height={100}
                  className="grid gap-4 w-full"
                  style={{maxHeight: "85vh", width: "auto"}}
                  src={data.img[1]}
                  alt="projectName" 
                />  
                )}
                </div>
            </div>
          </div> 
        </div>
        <div className="flex flex-wrap w-full justify-between items-center mt-5 gap-1 md:g-0 lg:g-0">
            <div>
              <Link className="flex gap-2 text-xl items-center cursor-pointer text-sm md:text-md lg:text-lg" href={data.github} target="_blank"> 
                View GitHub Repo 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
            <div className="flex gap-2 text-xl items-center cursor-pointer text-sm md:text-md lg:text-lg" onClick={() => setName(data.name, data.img)}>
              View Project 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div> 
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Projects