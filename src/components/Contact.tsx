export const Contact = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/imgs/pageOneCoding.jpg")',
          filter: "blur(10px)",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "10%",
          marginTop: "-10px",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "90px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "3rem",
            padding: "5px",
          }}
        >
          Ali A. Ibrahim
        </h1>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1.5rem",
            padding: "5px",
          }}
        >
          Software Engineer & Artificial Intelligence
        </h2>
      </div>
    </div>
  );
};
