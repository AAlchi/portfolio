 
export const Placeholder = () => {
 
  function goTo(arg: String) {
    const theScroll = document.getElementById(arg as string)

  theScroll?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
 
  }

   
  return (
    <> 
      <header
        style={{
          display: "flex",
          backgroundColor: "#2E2E33",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          flexWrap: "wrap",
          gap: "18px", 
          zIndex: "-50",
        }}
      >
        <h2 className="text-white" style={{ opacity: "1" }}>
          Ali A. Ibrahim
        </h2>
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        > 
        </ul>
        <ul style={{display: "flex", fontWeight: "bold", gap: "10px"}}>
          <li onClick={() => goTo("main")}>Home</li>
          <li onClick={() => goTo("home")}>Projects</li>
          <li onClick={() => goTo("resume")}>Resume</li>
          <li onClick={() => goTo("contact")}>Contact</li>
         </ul>
      </header>
    </>
  );
};
