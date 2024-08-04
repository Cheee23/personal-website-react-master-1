import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>
      View site source on{" "}
      <a href="" target="_blank" rel="noreferrer">
        Github
      </a>{" "}
      | Designer{" "}
      <a href="" target="_blank" rel="noreferrer">
        Pietce Sibarani
      </a>
    </p>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
