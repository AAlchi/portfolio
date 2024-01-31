 import dataProjects from "../data/projects.js";

export const Home = () => {
  
 
  return (
    <div
      id="home"
      style={{
        backgroundColor: "rgb(200, 200, 200)",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    > 
      <div
        style={{
          backgroundColor: "#DBD9E4",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "20px",
          paddingTop: "50px"
        }}
      >
        <h1 className="text-3xl font-bold">Projects</h1>

        {dataProjects.projects.map((data) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            className="projectCard"
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "white", padding: "25px", borderRadius: "5px" }}
            >
              <h2 className="text-xl"><span className="font-bold">{data.name}</span></h2>
              <p className="projectDescription" style={{paddingTop: "5px"}}>{data.description}</p>
              <ul style={{display: "flex", flexDirection: "row", marginTop: "10px", gap: "7px", flexWrap: "wrap", fontWeight: "bold"}}>
                {data.languages.map((first, index) => (
                  <li key={index}>{first}</li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "10px", overflow: "auto" }}>
                {data.img.map((src, index) => (
                  <img
                    key={index}
                    style={{ width: "30%", minWidth: "80%", border: "3px solid black", borderRadius: "5px" }}
                    src={src}
                    alt="projectName" 
                  />
                  
                ))}
              </div>
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
