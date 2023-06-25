export const Header = () => {
  function view() {}
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "60%",
          minWidth: "400px",
          height: "400px",
          backgroundColor: "darkgray",
          zIndex: "2",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "gray",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <h2>Viewing Contact</h2>
          <button>Close</button>
        </div>
        <div>
          <h2>Email: alialchi07+portfolio@gmail.com</h2>
          <h2>Phone: (312)-799-1224</h2>
        </div>
      </div>
      <header
        style={{
          display: "flex",
          backgroundColor: "#2E2E33",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "white",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          flexWrap: "wrap",
          gap: "18px",
          position: "sticky",
          top: 0,
        }}
      >
        <h2>Ali A. Ibrahim</h2>
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <li onClick={() => view()}>View Phone</li>
          <li onClick={() => view()}>View Email</li>
        </ul>
      </header>
    </>
  );
};
