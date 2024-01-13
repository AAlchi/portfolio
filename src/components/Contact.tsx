 
export const Contact = () => {
 
  return (
    <div style={{backgroundColor: "rgb(0, 0, 0, 0.7)"}}> 
      <div
        style={{
          position: "relative",
          width: "100%", 
          zIndex: 1,
          display: "flex", 
          alignItems: "center",
          justifyContent: "space-evenly",  
          paddingTop: "100px",
          paddingBottom: "100px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div>
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
      <div style={{color: 'gray', display: "flex", flexDirection: "column", fontWeight: "bold", minWidth: "250px", maxWidth: "40%", backgroundColor: "white", padding: "20px", borderRadius: "10px", gap: "10px"}}>
            <div>Email: alialchi07@gmail.com</div>
            <div>Phone: (312)-799-1224</div>
      </div>
      </div>
      
    </div>
  );
};
