import Head from "next/head"

const Resume = () => {
  return (
    <>
      <Head>
        <title>Ali A Ibrahim | Resume</title>
      </Head>
      <iframe
        title="PDF Viewer"
        className="w-full h-screen"
        src="/Resume.pdf"
      />
    </>
  );
};

export default Resume;
