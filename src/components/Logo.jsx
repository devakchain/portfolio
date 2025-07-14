import React from "react";

function Logo() {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="40"
        fontFamily="Segoe UI, sans-serif"
        fontSize="38"
        fill="currentColor"
        fontWeight="bold"
      >
        SY
      </text>
      <text
        x="60"
        y="40"
        fontFamily="Segoe UI, sans-serif"
        fontSize="18"
        fill="currentColor"
      ></text>
    </svg>
  );
}

export default Logo;
