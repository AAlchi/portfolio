export const Footer = () => {
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
        <div style={{ fontSize: "2.2rem" }}>Links:</div>
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
          <li>Back To Top</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>I am open for freelance.</li>
          <li>Gmail: alialchi07@gmail.com</li>
          <li>Phone: (312)-799-1224</li>
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
        <button>Contact</button>
        <button>Back To Top</button>
      </div>
    </div>
  );
};
