import React from "react";

export default function App() {
  return (
    <>
      <div>
        {Array(200)
          .fill()
          .map((_, i) => (
            <p key={i}>{i}</p>
          ))}
      </div>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "green"
        }}
      >
        footer
      </div>
    </>
  );
}
