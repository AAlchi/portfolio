import Link from "next/link"; 

const Quote = () => { 
  return (
    <div
      id="resume"
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
          fontSize: "1.1rem",
          display: "flex",
          padding: "5%",
        }}
      >
        <div style={{ fontSize: "3rem" }}></div>        Software engineer with 4+ years of experience developing, maintaining, and improving applications/websites. Proven ability to design, develop, and test scalable and reliable software. With expertise in frontend (HTML, JS, CSS) and backend development (Python, NodeJS) along with cloud computing (AWS, MongoDB). Seeking a role in a fast-paced environment while delivering quality work.

        <div style={{ fontSize: "3rem" }}></div>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div></div>
        <Link href="/resume" style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>View Resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ width: "20px" }}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        </Link>
      </div>
    </div>
  );
};

export default Quote