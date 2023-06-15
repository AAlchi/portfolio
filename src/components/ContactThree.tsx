export const ContactThree = () => {
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
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          boxShadow: "0px 0px 15px 0px black",
          fontSize: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "5%",
        }}
      >
        <h2>Contact</h2>
        <br></br>
        <div
          style={{
            padding: "20px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <h5>Phone: </h5>
          <h5>{"(312)-799-1224"}</h5>
        </div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <h5>Email: </h5>
          <h5>{"alialchi07@gmail.com"}</h5>
        </div>
      </div>
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
      ></div>
    </div>
  );
};
