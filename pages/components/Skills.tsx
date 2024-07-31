import Image from "next/image"; 
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";

interface skillsInterface {
  _id: string;
  name: string;
}

const skillsProject: { frontend: skillsInterface[], backend: skillsInterface[], ds: skillsInterface[], os: skillsInterface[]} = {
  frontend: [
    {
      _id: "1",
      name: "HTML"
      },
    {
      _id: "2",
      name: "CSS"
    },
    {
      _id: "3",
      name: "JavaScript" 
    }, 
    {
      _id: "4",
      name: "TypeScript"
    },
    {
      _id: "5",
      name: "CSS"
    },
    {
      _id: "6",
      name: "Swift"
    },
    {
      _id: "7",
      name: "Vite",
    },
    {
      _id: "8",
      name: "NextJS"
    },
    {
      _id: "9",
      name: "NextTS"
    },
    {
      _id: "10",
      name: "ReactJS"
    },
    {
      _id: "11",
      name: "ReactTS"
    },{
      _id: "12",
      name: "JSON"
    },
    {
      _id: "13",
      name: "TailwindCSS"
    },
  ],
  backend: [
    {
      _id: "1",
      name: "PHP"
      },
    {
      _id: "2",
      name: "Python"
    },
    {
      _id: "3",
      name: "NodeJS" 
    }, 
    {
      _id: "4",
      name: "Express"
    },
    {
      _id: "5",
      name: "MongoDB"
    },
    {
      _id: "6",
      name: "Firebase"
    },
    {
      _id: "7",
      name: "phpMyAdmin"
    },
    {
      _id: "8",
      name: "mySql"
    },
    {
      _id: "9",
      name: "Vercel"
    },
    {
      _id: "8",
      name: "Tensorflow"
    },
  ],
  ds: [
    {
      _id: "1",
      name: "GitHub"
      },
    {
      _id: "2",
      name: "Trello"
    },
    {
      _id: "3",
      name: "Postman" 
    }, 
    {
      _id: "4",
      name: "RapidAPI"
    },
    {
      _id: "5",
      name: "DevTools"
    },
    {
      _id: "8",
      name: "VSCode"
    },
    {
      _id: "8",
      name: "XCode"
    },
    {
      _id: "8",
      name: "PyCharm"
    },
  ],
  os: [
    {
      _id: "1",
      name: "Productivity"
      },
    {
      _id: "2",
      name: "Time Management"
    },
    {
      _id: "3",
      name: "Collaboration" 
    }
  ],
};


const Skills = () => {
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
    } else if (arg == "TailwindCSS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    } else if (arg == "Firebase") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    } else if (arg == "Prisma") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
    } else if (arg == "SpotifyAPI") {
      return "/imgs/spotify.jpg"
    } else if (arg == "NodeJS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    } else if (arg == "Swift") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
    } else if (arg == "Vite") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
    } else if (arg == "NextTS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    } else if (arg == "ReactTS") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    } else if (arg == "JSON") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"
    } else if (arg == "Python") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    } else if (arg == "Express") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    } else if (arg == "phpMyAdmin") {
      return "/imgs/icons/phpMyAdmin.png"
    } else if (arg == "mySql") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    } else if (arg == "Vercel") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
    } else if (arg == "Tensorflow") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    } else if (arg == "GitHub") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    } else if (arg == "Trello") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg"
    } else if (arg == "Postman") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    } else if (arg == "RapidAPI") {
      return "https://www.vectorlogo.zone/logos/rapidapi/rapidapi-icon.svg"
    } else if (arg == "DevTools") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg"
    } else if (arg == "VSCode") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
    } else if (arg == "XCode") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg"
    } else if (arg == "PyCharm") {
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg"
    }
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      style={{
        backgroundColor: "#DBD9E4",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
        paddingTop: "50px",
        paddingBottom: "20px", 
      }}
    >
      <h1 className="text-3xl font-bold">Skills</h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

        {[...Array(4)].map((e, i) => (
          <motion.div
            ref={ref}
            initial={{ scale: 0.5 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: i == 0 ? 0.5 : i == 1 ? 0.8 : i == 2 ? 1.2 : 1.5, ease: "easeInOut" }}
            key={e}
            id={e}
            className="animation-fade w-full shadow-lg"
            style={{ display: "flex", gap: "10px", backgroundColor: "white", padding: "25px", borderRadius: "5px" }}
          >
              <div>
                {i == 0 ? (
                <> 
                    <h2 className="text-xl"><span className="font-bold">Frontend</span></h2>
                    <br></br>
                    <div className="flex flex-wrap gap-8">
                      {
                        skillsProject.frontend.map((data) => (
                          <div key={data.name} className="flex gap-1">
                            <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={languageImage(data.name)!}/>
                            <br></br>
                            <h2 className="text-xl"><span>{data.name}</span></h2>
                          </div>
                        ))}
                    </div> 
                  </>
                ) : i == 1 ? (
                  <>
                    <h2 className="text-xl"><span className="font-bold">Backend</span></h2>
                    <br></br>
                    <div className="flex flex-wrap gap-8">
                      {
                        skillsProject.backend.map((data) => (
                          <div key={data._id} className="flex gap-1">
                            <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={languageImage(data.name)!}/>
                            <br></br>
                            <h2 className="text-xl"><span>{data.name}</span></h2>
                          </div>
                        ))}
                    </div> 
                  </>
                ) : i == 2 ? (
                  <>
                  <h2 className="text-xl"><span className="font-bold">Developer Skills</span></h2>
                  <br></br>
                  <div className="flex flex-wrap gap-8">
                    {
                      skillsProject.ds.map((data) => (
                        <div key={data.name} className="flex gap-1">
                          <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={languageImage(data.name)!}/>
                          <br></br>
                          <h2 className="text-xl"><span>{data.name}</span></h2>
                        </div>
                      ))}
                  </div> 
                </>
                ) : (
                  <>
                  <h2 className="text-xl"><span className="font-bold">Other Skills</span></h2>
                  <br></br>
                  <div className="flex flex-wrap gap-8">
                    {
                      skillsProject.os.map((data) => (
                        <div key={data._id} className="flex gap-1">
                          {data.name == "Productivity" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                          )}
                          {data.name == "Time Management" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                          )}
                          {data.name == "Collaboration" && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                          )}
                          <br></br>
                          <h2 className="text-xl"><div>{data.name}</div></h2>
                        </div>
                      ))}
                  </div> 
                </>
                )}

              </div>

            </motion.div>

        ))}


      </div>
    </div>
  );
};

export default Skills