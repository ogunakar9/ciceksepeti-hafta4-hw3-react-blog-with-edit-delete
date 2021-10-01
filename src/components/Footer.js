import React from "react";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  const openLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const gitHubLink = "https://github.com/ogunakar9";
  return (
    <div className="footer__container">
      <div className="footer__github-section">
        <span>Created by Ogun Akar</span>
        <GoMarkGithub
          className="footer__github-icon"
          onClick={() => openLink(gitHubLink)}
        />
      </div>
    </div>
  );
};

export default Footer;
