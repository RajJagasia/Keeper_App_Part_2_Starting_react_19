import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Raj Jagasia ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
