import Link from "next/link";
import { useRouter } from "next/router";


const Footer = () => {
  const router = useRouter()
  return (
    <div className="flex md:flex-row gap-5 flex-col bg-black text-white px-7 md:px-10 py-10">
      <div className="flex-1 ">
        <h1 className="font-bold text-3xl">Ali A. Ibrahim</h1>
        <h2 className="text-xl">Full Stack Software Engineer</h2>
        <Link href="https://github.com/AAlchi/portfolio" target="_blank" className="pt-2 flex items-center gap-2 cursor-pointer font-sm">View Project Repository <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "20px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        </Link>
      </div>
      <div className="flex justify-start md:justify-around flex-1 sm:flex-row flex-col gap-5"> 
        <div className=" ">
          <h2 className="font-bold text-lg">You can reach me at</h2>
          <ul>
            <li>alialchi07@gmail.com</li>
            <li>(312)-799-1224</li>
          </ul> 
        </div>
        <div className=" ">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <ul className="cursor-pointer" onClick={() => router.push("/resume")}>Resume</ul>
          <ul className="cursor-pointer" onClick={() => router.push("https://github.com/AAlchi")}>GitHub</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer