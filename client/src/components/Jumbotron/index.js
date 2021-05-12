import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ background: "linear-gradient(to bottom, #463b8c 20%, #0396a6 100%", height: 150, clear: "both", marginTop: 30, paddingTop: 50, textAlign: "center", color:"white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
