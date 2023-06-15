export const ContactTwo = () => {
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
        <div style={{ fontSize: "3.2rem" }}>"</div>A 15 year old with an
        emphasis for technology. Hard working, problem solver, and social. Has 3
        years of experience with programming and his career path.
        <div style={{ fontSize: "3.2rem" }}>"</div>
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
        <button>View Resume</button>
        <button>View Contact</button>
      </div>
    </div>
  );
};
