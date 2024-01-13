import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainHome } from "./MainHome";
import Resume from "../components/Resume";

const ReactDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactDom;
