import { useRouter } from "next/router";

 
const Footer = () => {  
  const router = useRouter()
  return (
    <div className="bg-black text-white flex flex-wrap p-10">
       <div className="w-full md:w-6/12 lg:w-6/12 flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Ali A. Ibrahim</h1>
        <h2 className="text-xl">Full Stack Software Engineer</h2> 
       </div>
       <div className="w-full md:w-3/12 lg:w-3/12 pt-3 md:pt-0 lg:pt-0"> 
        <h1 className="font-bold text-lg">Quick Links</h1>
        <ul className="cursor-pointer" onClick={() => router.push("/resume")}>Resume</ul> 
        <ul className="cursor-pointer" onClick={() => router.push("https://github.com/AAlchi")}>GitHub</ul> 
       </div>
       <div className="w-full md:w-3/12 lg:w-3/12 pt-3 md:pt-0 lg:pt-0">
        <h2 className="font-bold text-lg">You can reach me at</h2>
        <ul>
          <li>alialchi07@gmail.com</li>
          <li>773-799-1224</li>
        </ul>
       </div>
    </div>
  );
};

export default Footer