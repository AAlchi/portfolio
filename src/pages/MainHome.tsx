import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { ContactTwo } from "../components/ContactTwo";
import { ContactThree } from "../components/ContactThree";
// import { Home } from "../components/Home";
import { Footer } from "../components/Footer";

export function MainHome() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Header />
      <Contact />
      <ContactTwo />
      <ContactThree />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}
