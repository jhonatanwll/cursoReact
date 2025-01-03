import React from "react";

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <p>Memories &copy; {anoAtual}</p>
    </footer>
  );
};

export default Footer;
