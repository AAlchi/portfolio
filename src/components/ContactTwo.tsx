import { useNavigate } from "react-router-dom";

export const ContactTwo = () => {
  const navigate = useNavigate();
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
      <h1
        style={{
          color: "white",
          backgroundColor: "black",
          boxShadow: "0px 0px 15px 0px black",
          textAlign: "center",
          fontSize: "1.1rem",
          display: "flex",
          padding: "5%",
        }}
      >
        <div style={{ fontSize: "3rem" }}></div>        Software engineer with 3+ years of experience developing, maintaining, and improving applications/websites. Proven ability to design, develop, and test scalable and reliable software. With expertise in frontend (HTML, JS, CSS) and backend development (PHP, NodeJS) along with cloud computing (AWS, MongoDB). Speaking a role in a fast-paced environment while delivering quality work.

        <div style={{ fontSize: "3rem" }}></div>
      </h1>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "2rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <button onClick={() => navigate("/resume")}>View Resume</button>
      </div>
    </div>
  );
};
