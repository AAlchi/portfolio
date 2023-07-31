import { useState } from "react";

export const Header = () => {
  const [contactOpen, setContactOpen] = useState(false);

  if (contactOpen) {
    window.scrollTo(0, 0);
  }

  function view() {
    const recipientEmail = "alialchi07+portfolio@gmail.com";
    const subject = "Subject";
    const body = "Content";

    const mail = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mail;
  }
  return (
    <>
      {contactOpen && (
        <div
          style={{
            position: "absolute",
            width: "60%",
            minWidth: "400px",
            height: "400px",
            backgroundColor: "darkgray",
            zIndex: "2",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "gray",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <h2 style={{ color: "white" }}>Viewing Contact</h2>
            <button
              onClick={() => {
                setContactOpen(false);
              }}
            >
              Close
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "5%",
            }}
          >
            <h2 onClick={view}>
              Email:{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {" "}
                alialchi07+portfolio@gmail.com
              </span>
            </h2>
            <h2>Phone: (312)-799-1224</h2>
          </div>
        </div>
      )}
      <header
        style={{
          display: "flex",
          backgroundColor: "#2E2E33",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "white",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          flexWrap: "wrap",
          gap: "18px",
          position: "sticky",
          top: 0,
          zIndex: "50",
        }}
      >
        <h2 className="text-white" style={{ opacity: "1" }}>
          Ali A. Ibrahim
        </h2>
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <li onClick={() => setContactOpen(true)}>View Phone</li>
          <li onClick={() => setContactOpen(true)}>View Email</li>
        </ul>
      </header>
    </>
  );
};
