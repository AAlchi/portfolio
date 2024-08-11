import { useState } from "react"; 
import Image from "next/image";
import Link from "next/link"; 
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";

interface mainProjectStructure {
  _id: string;
  name: string;
  img: string[];
  description: string;
  languages: string[]
  github: string
}

const dataProject: { projects: mainProjectStructure[] } = {
  projects: [
    {
      _id: "1",
      name: "HS Social",
      img: [
        "./imgs/one/one-one.png",
        "./imgs/one/one-two.png",
        "./imgs/one/one-three.png",
        "./imgs/one/one-four.png",
        "./imgs/one/one-five.png",
        "./imgs/one/one-six.png",
        "./imgs/one/one-seven.png",
        "./imgs/one/one-eight.png",
        "./imgs/one/one-nine.png",
        "./imgs/one/one-ten.png",
      ],
      description:
        "Social media site created with Next Typescript because of a global organization called Hack Club. Built for school Hack Club as the social media platforom to communicate with each other and upload announcements and reminders.",
      languages: ["NextJS", "TypeScript", "CSS", "Tailwind", "MongoDB", "Firebase", "Prisma"],
      github: "https://github.com/AAlchi/HSSocial"
      },
    {
      _id: "2",
      name: "MTT Bank",
      img: [
        "./imgs/two/two-one.png",
        "./imgs/two/two-two.png", 
        "./imgs/two/two-three.png",
        "./imgs/two/two-four.png" 
      ],
      description:
        "Fantasy banking website coded with HTML, CSS, and PHP made for people to learn how banks work and prepare you for real life.",
      languages: ["HTML", "CSS", "PHP", "MongoDB"],
      github: "https://github.com/AAlchi/mttbank"
    },
    {
      _id: "3",
      name: "MTT Chat",
      img: [
        "./imgs/three/three-one.png",
        "./imgs/three/three-two.png",
        "./imgs/three/three-three.png",
      ],
      description:
        "Website coded in MERN used to chat with your friends. You can send texts, along with images, and add friends.",
        languages: ["ReactJS", "NodeJS", "CSS", "JavaScript", "MongoDB", "Firebase"],
        github: "https://github.com/AAlchi/mttChat"

    }, 
      {
        _id: "5",
        name: "Music from Spotify",
        img: [
          "./imgs/five/five-one.png",
          "./imgs/five/five-two.png", 
        ],
        description:
          "Using Spotify's API, this fetches the data associated with your account and displays it. This includes playlists, music, and your username.",
        languages: ["NextJS", "TypeScript", "Tailwind", "CSS", "SpotifyAPI"],
        github: "https://github.com/AAlchi/Music"
        }, 
  ],
};

const Projects = () => {
  const languageImage = (arg: string) => {
    if (arg == "JavaScript") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    } else if (arg == "TypeScript") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    } else if (arg == "PHP") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
    } else if (arg == "HTML") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    } else if (arg == "CSS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    } else if (arg == "MongoDB") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    } else if (arg == "ReactJS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    } else if (arg == "NextJS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    } else if (arg == "Tailwind") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    } else if (arg == "Firebase") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    } else if (arg == "Prisma") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
    } else if (arg == "SpotifyAPI") {
      return "/imgs/spotify.jpg"
    } else if (arg == "NodeJS") {
      return "/imgs/node.png"
    }
  }  
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
  return (
    <>  
    {isOn && (
       <div id="popup" className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50' style={{left: "50%", transform: "translateX(-50%)"}}>
       <div className='flex flex-col w-full md:w-3/5 lg:w-3/5 bg-slate-100 mt-20 p-5 rounded' style={{height: "85vh", overflowY: "hidden"}}>
             <div className='flex items-center justify-between'>
                 <h1 className='text-3xl mt-2 font-bold'>{nameSet}</h1>
                 <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOn(false)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
             </div>  
      <br></br>
      <div style={{overflowY: "auto"}}>
           {imagesPopup.map(img => (
            <>
                <Image width={100} height={100} src={img} alt="image" className='w-full' />  
                <br></br>
                </>
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

      {dataProject.projects.map((data) => (
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
                    <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={languageImage(first)!}/>
                    <li key={index}>{first}</li>
                  </div>
                ))}
              </ul>
            </div> 
          </div>
          <div className="w-2/5 shouldImageAppear">
            <div className="gap-4 flex flex-col items-end justify-between"> 
                <Image 
                  width={100} height={100}
                  className="grid gap-4 w-full"
                  src={data.img[0]}
                  alt="projectName"
                />  
            </div>
          </div> 
        </div>
        <div className="flex flex-wrap w-full justify-between items-center mt-5 gap-1 md:g-0 lg:g-0">
            <div>
              <Link className="flex gap-2 text-xl items-center cursor-pointer text-sm md:text-md lg:text-lg" href={data.github}>
                View GitHub Repo 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
            <div className="flex gap-2 text-xl items-center cursor-pointer text-sm md:text-md lg:text-lg" onClick={() => setName(data.name, data.img)}>
              View Project 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div> 
          </div>
        </motion.div>
      ))}
    </div>
    </>
  );
};

export default Projects