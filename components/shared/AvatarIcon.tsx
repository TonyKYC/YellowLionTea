import React from "react";

const AvatarIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 26"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:bg-[rgba(243,200,104,0.3)] rounded-sm"
    >
      <g transform="translate(3, 1)">
        {" "}
        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" />
        <circle cx="12" cy="7" r="4" />
      </g>
    </svg>
  );
};

export default AvatarIcon;
