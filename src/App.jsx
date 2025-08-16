import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const colores = ["red", "blue", "green", "orange", "purple"];
  const [colorIndex, setColorIndex] = useState(0);

  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  const [indexImagen, setIndexImagen] = useState(0);
  const imagenes = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];

  const redes = [
    { id: "fb", src: "/img/fb.jpg", alt: "Facebook" },
    { id: "ig", src: "/img/ig.jpg", alt: "Instagram" },
    { id: "gb", src: "/img/Gh.png", alt: "GitHub" },
    { id: "db", src: "/img/otro.jpg", alt: "Otro" },
  ];

  useEffect(() => {
    const intervaloColores = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colores.length);
    }, 2000);
    return () => clearInterval(intervaloColores);
  }, []);

  useEffect(() => {
    const intervaloReloj = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervaloReloj);
  }, []);

  const siguienteImagen = () => {
    setIndexImagen((prev) => (prev + 1) % imagenes.length);
  };

  const imagenAnterior = () => {
    setIndexImagen((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <>
      <header>
        <h1 id="tituloHeader" style={{ color: colores[colorIndex] }}>
          Evaluación T1
        </h1>
      </header>

      <section id="reloj">
        <h2>{hora}</h2>
      </section>

      <main id="imagenes" className="carrusel">
        <div className="contenedor-imagen">
          <img
            id="imagen"
            src={imagenes[indexImagen]}
            alt={`Imagen ${indexImagen + 1}`}
          />
          <button className="btn-cambiar izquierda" onClick={imagenAnterior}>
            &#60;
          </button>
          <button className="btn-cambiar derecha" onClick={siguienteImagen}>
            &#62;
          </button>
        </div>
      </main>

      <footer id="footer">
        {redes.map((red) => (
          <span key={red.id} id={red.id}>
            <img src={red.src} alt={red.alt} className="icono activo" />
          </span>
        ))}
      </footer>
    </>
  );
}

export default App;
