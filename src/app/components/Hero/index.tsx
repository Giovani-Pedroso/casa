import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./frente_casa_edited.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Casa para alugar </h1>
          <p className="mb-5">Um tes</p>
          <button className="btn btn-primary">Agende uma visita</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
