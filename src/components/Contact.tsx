import { useNavigate } from "react-router-dom";

 
export const Contact = () => {
  const navigate = useNavigate() 
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
        <div onClick={() => navigate('/resume')} style={{display: "flex", cursor: "pointer", alignItems: "center", gap: "10px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "20px"}}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg> 
          Resume
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
