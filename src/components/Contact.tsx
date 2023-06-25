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
          marginTop: "75px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "3.2rem",
            padding: "10px",
          }}
        >
          Ali A. Ibrahim
        </h1>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "2rem",
            padding: "10px",
          }}
        >
          Software Engineer and Artificial Intelligence
        </h2>
      </div>
    </div>
  );
};
