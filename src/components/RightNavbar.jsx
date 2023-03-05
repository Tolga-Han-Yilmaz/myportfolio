import React from "react";
import "../scss/components/rightnavbar.scss"

const RightNavbar = () => {
  return (
    <div className="rightnavbar">
      <div className="d-flex flex-column align-items-center position-relative">
        <a
          href="mailto:06thy40@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          06thy40@gmail.com
        </a>
      </div>
    </div>
  );
};

export default RightNavbar;
