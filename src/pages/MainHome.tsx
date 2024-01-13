import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { ContactThree } from "../components/ContactThree";
import { Home } from "../components/Home";
import { Footer } from "../components/Footer";
import { ContactTwo } from "../components/ContactTwo";

export function MainHome() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Contact />
        <Home />
        <ContactTwo />
        <ContactThree />
      </div>
      <Footer /> 
    </div>
  );
}
