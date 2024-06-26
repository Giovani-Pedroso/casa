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
          <h1 className="mb-5 text-5xl font-bold">Casa para venda</h1>
          <a
            href="https://api.whatsapp.com/send?phone=5511956291276&text=Ol%C3%A1%2C%20estou%20interessado(a)%20na%20casa"
            target="_blank"
            className="btn btn-primary"
          >
            Agende uma visita
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
