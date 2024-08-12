import { useRouter } from "next/router";


const Footer = () => {
  const router = useRouter()
  return (
    <div className="flex md:flex-row gap-5 flex-col bg-black text-white px-7 md:px-10 py-10">
      <div className="flex-1 ">
        <h1 className="font-bold text-3xl">Ali A. Ibrahim</h1>
        <h2 className="text-xl">Full Stack Software Engineer</h2>
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