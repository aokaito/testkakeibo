import React from "react";

type Props = { className?: string };

export const Avatar: React.FC<Props> = ({ className }) => (
  <div
    className={className}
    style={{
      background: "#ccc",
      borderRadius: "50%",
      width: 40,
      height: 40,
    }}
  />
);