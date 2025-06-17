import React from "react";

const isMobile = window.innerWidth < 768;
const leaves = new Array(isMobile ? 5 : 10).fill(null);

function FallingLeaves() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {leaves.map((_, index) => {
        const delay = `${Math.random() * (isMobile ? 15 : 10)}s`;
        const duration = `${(isMobile ? 10 : 8) + Math.random() * 5}s`;
        const left = `${Math.random() * 100}%`;
        const size = `${isMobile ? 15 + Math.random() * 10 : 20 + Math.random() * 20}px`;

        return (
          <div
            key={index}
            className="absolute animate-[fallingLeaf_10s_linear_infinite]"
            style={{
              left,
              width: size,
              height: size,
              backgroundImage: 'url("/imagenes/hoja.jfif")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              animationDelay: delay,
              animationDuration: duration,
              opacity: 0.8,
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes fallingLeaf {
            0% {
              transform: translateY(-100px) rotate(0deg);
              opacity: 0;
            }
            10% { opacity: 1; }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FallingLeaves;
