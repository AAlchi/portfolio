import Link from "next/link"; 

const Quote = () => { 
  return (
    <div
      className="bg-[#DBD9E4] flex flex-col gap-6 px-5 sm:px-10 pb-10"
    >
      <h1 className="text-3xl font-bold">About</h1>

      <h1
        style={{ 
          boxShadow: "0px 0px 15px 0px black", 
        }}
        className="text-white font-bold bg-black text-center items-center flex flex-col text-lg px-10 pt-10 pb-4"
      >
        Software engineer with 4+ years of experience developing, maintaining, and improving applications/websites. Proven ability to design, develop, and test scalable and reliable software. With expertise in frontend and backend development along with cloud computing.
        <br></br>
        <br></br>
        <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
        className="w-full"
      >  
        <Link href="/resume" target="_blank" className="text-lg flex items-center gap-2 cursor-pointer">View Resume <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        </Link>
      </div>
      </h1> 
    </div>
  );
};

export default Quote