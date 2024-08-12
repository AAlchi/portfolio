import Image from "next/image";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import skillsProject from "../global/skills/Skills";
import Icons from "../global/icons/Icons";


const Skills = () => {
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
                          <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={Icons(data.name)!} />
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
                          <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={Icons(data.name)!} />
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
                          <Image width={100} height={100} alt="image" style={{ width: "30px", height: "30px", borderRadius: "5px" }} src={Icons(data.name)!} />
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