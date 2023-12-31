import React, { useEffect } from "react";
import "./shiny.scss"; // Assuming you've created a CSS file for these styles

const ShinyWrapper = ({ children, className }) => {
  return (
    <div className={`shiny ${className}`} data-glow>
      {children}
    </div>
  );
};

export default ShinyWrapper;
