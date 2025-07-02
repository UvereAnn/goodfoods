import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-downlaod" id="app-download">
      <p>
        For Better Experience Download <br /> Good Food App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play store image" />
        <img src={assets.app_store} alt="app store image" />
      </div>
    </div>
  );
};

export default AppDownload;
