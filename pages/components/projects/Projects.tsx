import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
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
        <div id="popup" className='fixed px-2 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50' style={{ left: "50%", transform: "translateX(-50%)", zIndex: "20" }}>
          <div className='flex flex-col w-full md:w-3/5 lg:w-3/5 bg-slate-100 mt-20 p-5 rounded' style={{ height: "85vh", overflowY: "hidden" }}>
            <div className='flex items-center justify-between'>
              <h1 className='text-3xl mt-2 font-bold'>{nameSet}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOn(false)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <br></br>
            <div style={{ overflowY: "auto" }} className="flex w-full flex-wrap justify-evenly">
              {imagesPopup.map(img => (
                <div key={img}>
                  <Image width={100} height={100} src={img} alt="image" style={{ maxHeight: "70vh", width: "auto" }} />
                  <br></br>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className="bg-[#DBD9E4] flex flex-col gap-6 px-5 sm:px-10 py-10"
        ref={ref}
      >
        <h1 className="text-3xl font-bold">Projects</h1>

        {projects.projects.map((data) => (
          <div className="w-full py-1" key={data._id}>
            <div className="flex justify-between gap-7">
              <div
                className="animation-fade w-full shadow-lg flex gap-2 bg-white p-5 rounded-lg" 
              >
                <div className="w-full">
                  <div className="flex w-full justify-between items-center border-b-2 py-5">
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <div className="flex flex-wrap justify-end items-center gap-3 md:g-0 lg:g-0">
                      <div>
                        <Link className="flex gap-2 text-xl items-center cursor-pointer" href={data.github} target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-2 text-xl items-center cursor-pointer" onClick={() => setName(data.name, data.img)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                      </div>
                    </div> 
                  </div>
                  <div className="pt-4">
                    <p className="font-bold text-sm text-black opacity-70">Description</p>
                    <p className="pt-3 max-w-2xl">{data.description}</p>
                  </div>
                  <br></br>
                  <div className="pt-4">
                    <p className="font-bold text-sm text-black opacity-70">Languages</p>
                    <ul className="flex pt-4 gap-5 flex-wrap font-bold">
                    {data.languages.map((first, index) => (
                      <div key={first} className="flex items-center gap-2 pl-2 pr-2">
                        <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={icons(first)!} />
                        <li key={index}>{first}</li>
                      </div>
                    ))}
                  </ul>
                  </div> 
                </div> 
              </div>
              <div className="w-full shouldImageAppear">
                <div className="flex justify-evenly flex-wrap">
                  <Image
                    width={100} height={100}
                    className="grid gap-4 w-full"
                    style={{ maxHeight: "85vh", width: "auto" }}
                    src={data.img[0]}
                    alt="projectName"
                  />
                  <div className="shouldImageAppearNext">
                    {data.phone && (
                      <Image
                        width={100} height={100}
                        className="grid gap-4 w-full"
                        style={{ maxHeight: "85vh", width: "auto" }}
                        src={data.img[1]}
                        alt="projectName"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects
 