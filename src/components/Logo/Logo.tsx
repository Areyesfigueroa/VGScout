import React from "react";
import classes from "./Logo.module.css";
import logoImg from "../../assets/VGS_Logo_01.png";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="Logo" />
    </div>
  );
};

export default logo;
