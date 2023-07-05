import React from "react";
import "./Footer.css";
import LinkedIN from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <footer id="footer">

      <div className="midFooter">
        <h1>MEC</h1>
        <p>Search - Shop - Repeat</p>
        <p>Copyrights July 2023 &copy; Major E-Commerce</p>
        <a href="https://www.linkedin.com/in/meghadri-koley-165018203/" target="blank">
              <LinkedIN className="linkedinSvgIcon" />
        </a>
        <a href="https://www.linkedin.com/in/meghadri-koley-165018203/" target="blank">
              <InstagramIcon className="instaSvgIcon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
