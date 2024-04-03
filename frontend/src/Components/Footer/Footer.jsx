import React from "react";
import './footer.css';

function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Integram Ricardo Oviedo. Todos los derechos reservados.</p>
      </footer>
    );
  }
export default Footer;