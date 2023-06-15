export const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/imgs/pageOneCoding.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "10%",
        marginTop: "-10px",
      }}
    >
      <h1
        style={{
          color: "white",
          backgroundColor: "black",
          boxShadow: "0px 0px 15px 0px black",
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
          backgroundColor: "black",
          boxShadow: "0px 0px 15px 0px black",
          textAlign: "center",
          fontSize: "2rem",
          padding: "10px",
        }}
      >
        Software Engineer and Artificial Intelligence
      </h2>
    </div>
  );
};
