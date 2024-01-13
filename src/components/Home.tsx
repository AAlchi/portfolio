import { useState } from "react";
import dataProjects from "../data/projects.js";

export const Home = () => {
  const [imageName, setImageName] = useState("");

  function showImage(value: string) {
    setImageName(value);
  }

  function closeImage() {
    setImageName("");
  }
  return (
    <div
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
      {imageName != "" && (
        <div
          style={{
            position: "sticky",
            top: "4%",
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "0",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button onClick={closeImage}>X</button>
          <img style={{ width: "80%" }} src={`${imageName}`} alt="Image" />
        </div>
      )}

      <div
        style={{
          backgroundColor: "#DBD9E4",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "10%",
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
                    style={{ width: "30%", minWidth: "205px", border: "3px solid black", borderRadius: "5px" }}
                    src={src}
                    alt="projectName"
                    onClick={() => showImage(src)}
                  />
                  
                ))}
              </div>
              <ul style={{display: "flex", flexDirection: "row", marginTop: "10px", gap: "7px", flexWrap: "wrap", fontWeight: "bold"}}>
                {data.languages.map((first, index) => (
                  <li key={index} className="mt-3 mb-3">{first}</li>
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
