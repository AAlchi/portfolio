import dataProjects from "../data/projects.js";

export const Home = () => {
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
        padding: "10%",
      }}
    >
      <h1>Featured Projects</h1>

      {dataProjects.projects.map((data) => (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="projectCard"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h2>{data.name}</h2>
            <div style={{ display: "flex", gap: "10px", overflow: "auto" }}>
              {data.img.map((src, index) => (
                <img
                  key={index}
                  style={{ width: "30%", minWidth: "205px" }}
                  src={src}
                  alt="projectName"
                />
              ))}
            </div>
          </div>
          <p className="projectDescription">{data.description}</p>
        </div>
      ))}
    </div>
  );
};
