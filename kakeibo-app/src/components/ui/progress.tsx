import React from "react";

type Props = {
  value: number;
  className?: string;
  indicatorClassName?: string;
};

export const Progress: React.FC<Props> = ({
  value,
  className,
  indicatorClassName,
}) => (
  <div
    className={className}
    style={{
      background: "#eee",
      borderRadius: 4,
      height: 8,
      width: "100%",
    }}
  >
    <div
      className={indicatorClassName}
      style={{
        background: "#1977e5",
        width: `${value}%`,
        height: "100%",
        borderRadius: 4,
        transition: "width 0.3s",
      }}
    />
  </div>
);