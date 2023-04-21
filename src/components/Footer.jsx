import React from "react";

const Footer = () => {
    const redireccionar = () => {
        window.location.href = "www.google.cl/";
    }
  return (
    <div className="bg-info p-2 bg-opacity-25 text-center">
      <h6>Esta galería de imágenes está elaborada con React, 
        si quieres aprender más de React pulsa <a href='https://desafiolatam.com/' className="btn btn-primary">Aquí</a> </h6>
    </div>
  );
}
export default Footer;