import React from "react";

export default function Assigment2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="div1">
        <h1>CA204</h1>
        <hr 
          style={{
            margin: "10px 0",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: 30,
            margin: "0px 10px",
            flexDirection: "column",
          }}
        >
          <h3>Home</h3>
          <h3>Work</h3>
          <h3>Carrer</h3>
          <h3>About</h3>
        </div>
      </div>

      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        I completed Assigment
      </div>
      <div className="div2">
        <h3>Welcome to out class 2023</h3>
        <h3>Ibraahim Mohamud Hersi</h3>
        <h3>ID:C120691</h3>
        <h2></h2>
      </div>
    </div>
  );
}
