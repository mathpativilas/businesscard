import React from "react";
import "./Footer.css";

function Footer() {
  function twitter() {
    window.location.href = "https://www.twitter.com";
  }

  function facebook() {
    window.location.href = "https://www.facebook.com";
  }
  function instagram() {
    window.location.href = "https://www.instagram.com";
  }
  function github() {
    window.location.href = "https://www.github.com";
  }

  return (
    <div className="social">
      <i class="fa-brands fa-twitter" onClick={twitter}></i>
      <i class="fa-brands fa-facebook-square" onClick={facebook}></i>
      <i class="fa-brands fa-instagram" onClick={instagram}></i>
      <i class="fa-brands fa-github-square" onClick={github}></i>
    </div>
  );
}

export default Footer;
