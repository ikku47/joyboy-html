import React, { useEffect } from "react";
import "./shiny.scss";
// import "./shiny_2.scss";

const ShinyWrapper = ({ children, className }) => {
  return (
    <div className={`shiny ${className}`} data-glow>
      {children}
    </div>
  );
};

export default ShinyWrapper;
