import React from "react";
import { PDFViewer, Document, Page } from "@react-pdf/renderer";

const Resume = () => {
  return (
    <embed
      src="/imgs/ResumeMain.pdf"
      type="application/pdf"
      width="100%"
      height="800px"
    />
  );
};

export default Resume;
