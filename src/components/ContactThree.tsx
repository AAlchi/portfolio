export const ContactThree = () => {
  const sendMail = () => {
    const recipientEmail = "alialchi07@gmail.com";
    const subject = "Subject";
    const body = "Content";

    const mail = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mail;
  };
  return (
    <div
      id="contact"
      className="w-full flex items-center"
      style={{
        backgroundColor: "#DBD9E4",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
      }}
    >
       <div className="w-full flex flex-col gap-5 bg-white p-5" style={{borderRadius: "10px"}}>
        <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Contact</h1>
        <h2 style={{color: "gray"}} className="text-xl">I am open for freelance work. So don't hesitate to reach out!</h2>
        </div>
        <div style={{border: "2px solid gray"}} className="w-full" />
         <div style={{display: "flex", alignItems: "center", gap: "10px"}} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "20px"}}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <span onClick={sendMail}  style={{color: "rgb(57, 77, 191)"}}>alialchi07@gmail.com</span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "20px"}}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          (312)-799-1224
        </div>
        </div>
    </div>
  );
};
