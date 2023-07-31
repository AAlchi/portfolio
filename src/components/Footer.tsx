import { useNavigate } from "react-router-dom";

export const Footer = () => {
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
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "5%",
        }}
      >
        <div style={{ fontSize: "2.2rem" }}>More:</div>
        <ul
          style={{
            display: "flex",
            padding: "20px",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "15px",
          }}
        >
          <li onClick={() => navigate("/resume")}>Resume</li>

          <li>I am open for freelance.</li>
        </ul>
        <p style={{ fontSize: "20px", padding: "50px" }}>
          &copy; 2023 Ali A. Ibrahim
        </p>
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
        <button onClick={() => window.scrollTo(0, 0)}>Back To Top</button>
      </div>
    </div>
  );
};
