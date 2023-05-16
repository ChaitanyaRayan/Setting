// LoaderService.js

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader" />
    </div>
  );
};

const LoaderService = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoader = () => {
    setIsLoading(true);
  };

  const stopLoader = () => {
    setIsLoading(false);
  };

  return {
    startLoader,
    stopLoader,
    renderLoader: function () {
      return ReactDOM.createPortal(
        isLoading ? <Loader /> : null,
        document.getElementById("root")
      );
    },
  };
};

export default LoaderService;
