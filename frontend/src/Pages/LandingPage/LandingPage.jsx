import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./landingpage.css";

function LandingPage() {
  const history = useNavigate();

  const handlePopulateData = async () => {
    try {
      const response = await axios.post("https://tarea-1-ricardooviedo.onrender.com/populate");
      console.log("Datos poblados exitosamente");
      // Aquí podrías redirigir al usuario a otra página si lo deseas
      history("/feed");
    } catch (error) {
      console.error("Error al poblar los datos:", error);
      // Manejar el error de alguna manera
    }
  };

  const handleResetData = async () => {
    try {
      const response = await axios.post("https://tarea-1-ricardooviedo.onrender.com/reset");
      console.log("Datos reseteados exitosamente");
      // Podrías agregar alguna lógica adicional después de resetear los datos si lo deseas
      history("/feed");
    } catch (error) {
      console.error("Error al resetear los datos:", error);
      // Manejar el error de alguna manera
    }
  };

  return (
    <div className="landing-page">
      <main>
        <div className="contenedor">
          <section className="hero">
            <h2>Bienvenido a Integram</h2>
            <p>La plataforma para conectar con amigos y compartir momentos. Mejor que esa tal llamada Instagram...</p>
            <div className="feature">
              <h1>Pobla los datos antes de navegar por esta gran pagina</h1>
              <p>Si es que no lo haces, igualmente podrás navegar, pero no habrá datos</p>
            </div>
          </section>
          <button onClick={handlePopulateData} className="button_slide slide_down">
            Poblar datos
          </button>
          <button onClick={handleResetData} className="button_slide slide_down">
            Resetear Datos
          </button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;