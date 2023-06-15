export const Header = () => {
  return (
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
        <li>Home</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>More</li>
      </ul>
    </header>
  );
};
