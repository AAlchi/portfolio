 
export const Contact = () => {
  const sendMail = () => {
    const recipientEmail = "alialchi07@gmail.com";
    const subject = "Subject";
    const body = "Content";

    const mail = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mail;
  };
  function goTo(arg: String) { 
    const theScroll = document.getElementById(arg as string)  

    theScroll?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  return (
    <div id="main" style={{backgroundImage: "url('/imgs/background.jpg')"}}> 
      <div  
        className="h-screen"
        style={{
          width: "100%",   
          zIndex: 1,
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",
          justifyContent: "space-evenly",  
        }} 
      >
        <div className="flex w-full" style={{
          width: "100%",   
          zIndex: 1,
          display: "flex", 
          alignItems: "center",
          justifyContent: "space-evenly",   
          flexWrap: "wrap",
          gap: "20px",
          paddingTop: "120px"
        }}>
        <div style={{display: "flex", flexDirection: "column"}} className="shouldFlexStart">
          <h1  
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "3rem", 
              fontWeight: "bold"
            }}
          >
            Ali A. Ibrahim
          </h1>
          <h2
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "1.5rem", 
            }}
          >
            Software Engineer & Artificial Intelligence
          </h2>
      </div>
      <div style={{color: 'gray', display: "flex", flexDirection: "column", fontWeight: "bold", minWidth: "220px", maxWidth: "40%", backgroundColor: "white", padding: "20px", borderRadius: "10px", gap: "10px"}}>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "20px"}}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span onClick={sendMail} className="cursor-pointer" style={{color: "rgb(57, 77, 191)"}}>alialchi07@gmail.com</span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "20px"}}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          (312)-799-1224
        </div>
      </div> 
      </div>
      <div onClick={() => goTo("home")} className="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "30px"}}>
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg> 
      </div>
      </div> 
    </div>
  );
};
