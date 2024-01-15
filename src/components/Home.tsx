 import dataProjects from "../data/projects.js";

export const Home = () => {
  
 
  return (
    <div
      id="home"
      style={{
        backgroundColor: "#DBD9E4",
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
          padding: "5%",
        }}
      >
        <h1>Projects</h1>

        {dataProjects.projects.map((data) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            className="projectCard"
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "white", padding: "20px", borderRadius: "5px" }}
            >
              <h2>{data.name}</h2>
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
              <ul style={{display: "flex", flexDirection: "row", marginTop: "10px", gap: "7px", flexWrap: "wrap", fontWeight: "bold"}}>
                {data.languages.map((first, index) => (
                  <li key={index}>{first}</li>
                ))}
              </ul>

            </div>
            <p className="projectDescription" style={{fontWeight: "bold", paddingTop: "5px"}}>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
