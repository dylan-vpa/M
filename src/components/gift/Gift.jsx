import { useState, useEffect } from "react";
import Card from "../card/Card";

const data = [
  [
    "https://i.pinimg.com/564x/59/c4/72/59c472c9699e96d8f37a86f75415662b.jpg",
    "I",
    "https://docs.google.com/document/d/1bf-2kzetsF5xuPYD0CYbNGzgyzRer0ATRZH6ztiHkIc/edit?usp=sharing",
  ],
  [
    "https://i.pinimg.com/564x/65/1c/4c/651c4c7deb3df40a4535786666544a61.jpg",
    "L",
    "https://drive.google.com/file/d/1ie5QNLt3VazgmnnzODBtjVF3rPyCoELc/view?usp=sharing",
  ],
  [
    "https://i.pinimg.com/564x/c9/a8/6f/c9a86ff3be05d595f0075cf255be80b1.jpg",
    "O",
  ],
  [
    "https://i.pinimg.com/564x/de/a9/b7/dea9b7e0e1d4f7b62566a298429e1e50.jpg",
    "V",
  ],
  [
    "https://i.pinimg.com/564x/63/25/ec/6325ec4ee125ae05a520f161f5682eb0.jpg",
    "E",
  ],
  [
    "https://i.pinimg.com/564x/c1/63/d8/c163d8796d2b916ab06bf4a345e91702.jpg",
    "Y",
  ],
  [
    "https://i.pinimg.com/564x/de/48/5b/de485b2a5853ac2906cb8e73a0935dbd.jpg",
    "O",
  ],
  [
    "https://i.pinimg.com/564x/19/6b/74/196b747bc280c62f4ebe672003b5ad64.jpg",
    "U",
  ],
];

const Gift = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [showHistory, setShowHistory] = useState(false); // Nueva línea

  // Importar estilos condicionalmente
  useEffect(() => {
    const loadStyles = async () => {
      if (showHistory) {
        await import("./history.css"); // Importar estilos para History
        document.documentElement.style.overflow = "auto"; // Restablecer overflow en html
        document.body.style.overflow = "auto"; // Restablecer overflow en body
        document.body.style.backgroundColor = "white"; // Establecer fondo blanco en body
        document.documentElement.style.backgroundColor = "white"; // Establecer fondo blanco en html
      } else {
        await import("./gift.css"); // Importar estilos para Gift
        document.documentElement.style.overflow = "hidden"; // Agregar overflow hidden a html
        document.body.style.overflow = "hidden"; // Agregar overflow hidden a body
        document.body.style.backgroundColor = ""; // Restablecer fondo en body
        document.documentElement.style.backgroundColor = ""; // Restablecer fondo en html
      }
    };
    loadStyles();
  }, [showHistory]);

  useEffect(() => {
    if (!open) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  }, [open]);

  return (
    <>
      <div id="container">
        {showHistory ? (
          <History onBack={() => setShowHistory(false)} />
        ) : (
          <>
            <div id="giftcontainer">
              <div
                id="gifttop"
                className={open ? "open" : ""}
                onClick={() => setOpen(!open)}
              ></div>
              <div id="gift" onClick={() => setOpen(!open)}>
                <div id="card1" className={open ? "opencard" : "closecard"}>
                  {open ? (
                    <Card
                      image={data[currentIndex][0]}
                      description={data[currentIndex][1]}
                      url={data[currentIndex][2]}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            <div id="mesacontainer">
              <div id="mesatop"></div>
              <div id="mesa"></div>
            </div>
            {notificationVisible && (
              <div id="notification">
                <button
                  id="close-button"
                  onClick={() => setNotificationVisible(false)}
                >
                  ✖
                </button>
                <p onClick={() => setShowHistory(true)}>
                  Ver nueva actualización de nuestra historia
                </p>{" "}
                {/* Cambiado para mostrar History */}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Gift;

const History = ({ onBack }) => {
  return (
    <div id="history">
      <div id="historyContainer">
        <h1>Nuestra historia...</h1>
        <img src="/us.png" alt="" />
        <p>
          Era un 13 de octubre, cuando el destino decidió que nuestros caminos
          se entrelazaran bajo la luz tenue del cine. Taylor Swift, en su
          magnificencia, se proyectaba en la pantalla mientras "The Eras Tour"
          nos envolvía en su magia. En aquel momento, algo cambió. Entre notas y
          versos, vi en tus ojos un futuro que apenas comenzábamos a escribir.
          Como un poeta que encuentra la inspiración en los pequeños detalles,
          tú te convertiste en mi musa, y ese instante fue el prólogo de nuestra
          historia.
          <br />
          <br />
          Al igual que en las canciones de Taylor, nuestra relación ha tenido
          sus "highs and lows," un viaje de emociones profundas. Algunas veces
          me he sentido como en "Out of the Woods," preguntándome si lo
          lograríamos, si el bosque se despejaría para nosotros. Pero al igual
          que en la canción, siempre supimos que estábamos construyendo algo
          real, algo por lo que vale la pena luchar.
          <br />
          <br />
          Nuestros momentos de alegría son como "You Belong With Me," un
          recordatorio de que, a pesar de las pruebas, hemos encontrado un lugar
          donde pertenecemos el uno con el otro. Pero también hemos tenido que
          navegar tormentas, sentir cómo "All Too Well" los recuerdos buenos y
          malos se mezclan, enseñándonos que cada etapa es parte del
          crecimiento.
          <br />
          <br />
          A veces, cuando las dificultades se hacen más presentes, pienso en
          "The Archer" y en la manera en que el amor puede ser un combate, una
          batalla interna por aprender, por sanar, por mejorar. No obstante,
          siempre regresamos a la base, al amor puro que compartimos, como en
          "Lover," donde lo único que importa es el compromiso que hemos hecho:
          estar juntos.
          <br />
          <br />
          A veces, me pregunto cómo el tiempo, con su naturaleza cambiante, nos
          transforma a medida que avanzamos. Pero sé, como sé que el sol saldrá
          cada mañana, que a pesar de los obstáculos, nuestra historia seguirá
          escribiéndose. Porque este amor no es efímero, es profundo, y cada día
          que pasa lo demuestra. Aunque el camino se haga cuesta arriba, como en
          "Daylight," siempre llegamos a la luz.
          <br />
          <br />
          Esta historia nuestra, aunque imperfecta, es nuestra obra maestra en
          constante evolución. Y mientras sigamos escribiendo cada capítulo, sé
          que nuestra historia crecerá y se fortalecerá, guiada por la
          convicción de que, pase lo que pase, "We are never going out of
          style."
          <br />
          <br />
          Así es como te veo, como mi esposa, mi compañera, y cada 13 de octubre
          es un recordatorio de que, mientras el tiempo avanza, nuestro amor
          también lo hace.
          <br />
          <br />
          Te amu ❤️ 
        </p>
      </div>
    </div>
  );
};
