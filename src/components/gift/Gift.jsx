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
    if (showHistory) {
      import("./history.css"); // Importar estilos para History
    } else {
      import("./gift.css"); // Importar estilos para Gift
    }
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
        <button onClick={onBack}>← Volver</button> {}
        <h1>Nuestra historia...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea nobis repellat saepe beatae ipsa error excepturi, ad veritatis, doloremque obcaecati molestiae quibusdam nemo autem at ab repudiandae quidem magni.</p>
      </div>
    </div>
  );
};
