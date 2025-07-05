import React from "react";

export const Card: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={className} style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, marginBottom: 16 }}>
    {children}
  </div>
);

export const CardContent: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);