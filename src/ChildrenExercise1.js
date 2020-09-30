import React from "react";
import "./App.css";
import WarningIcon from "@material-ui/icons/Warning";

const ErrorBox = ({ children }) => {
  return (
    <div className="errorBox">
      <div class="errorMessage">
        <WarningIcon classname="errorIcon" style={{fill: "#d64418"}} /> 
        {children}
      </div>
    </div>
  );
};

export default ErrorBox;
