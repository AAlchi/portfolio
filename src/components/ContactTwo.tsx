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
          fontSize: "1.5rem",
          display: "flex",
          padding: "5%",
        }}
      >
        <div style={{ fontSize: "3.2rem" }}></div>Passion for technology at 15
        years old. With over 3 years of experience. Has the desire to go into
        Artificial Intelligence.
        <div style={{ fontSize: "3.2rem" }}></div>
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
