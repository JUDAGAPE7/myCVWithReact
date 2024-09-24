import "../styles/main.css";
import my_image from "/images/my_picture.jpeg";

const HomePage = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div>
        <div className="main-Container">
          <div className="sub-Container">
            <div className="bubbles">
              {Array.from({ length: 48 }, (_, i) => (
                <span
                  key={i}
                  style={{
                    "--i": getRandomNumber(1, 50),
                  }}
                ></span>
              ))}
            </div>

            <section className="presentation">
              <img src={my_image} alt="" className="my-Image" />

              <div className="logos">
                <i
                  className="bx bxl-html5 home__layer home__layer--1"
                  data-speed="0.1"
                ></i>
                <i
                  className="bx bxl-javascript home__layer home__layer--2"
                  data-speed="0.2"
                ></i>
                <i
                  className="bx bxl-css3 home__layer home__layer--3"
                  data-speed="0.3"
                ></i>
                <i
                  className="bx bxl-nodejs home__layer home__layer--4"
                  data-speed="0.4"
                ></i>
                <i
                  className="bx bxl-react home__layer home__layer--5"
                  data-speed="0.5"
                ></i>
                <i
                  className="bx bxl-tailwind-css home__layer home__layer--6"
                  data-speed="0.6"
                ></i>
                <i
                  className="bx bxl-redux home__layer home__layer--7"
                  data-speed="0.7"
                ></i>
                <i
                  className="bx bxl-typescript home__layer home__layer--8"
                  data-speed="0.8"
                ></i>
                <i
                  className="bx bxl-git home__layer home__layer--9"
                  data-speed="0.9"
                ></i>
                <i
                  className="bx bxl-graphql home__layer home__layer--10"
                  data-speed="1.0"
                ></i>
                <i
                  className="bx bx-code-alt home__layer home__layer--11"
                  data-speed="1.1"
                ></i>
              </div>

              <div className="intro">
                <h2 className="animated slideInLeft">Hola Soy Juan</h2>
                <p className="my-description">
                  Soy un desarrollador web con experiencia en la creación de
                  funcionalidades digitales atractivaspara los clientes y
                  empleadores. Mi enfoque se basa en habilidades técnicas
                  sólidas y una comprensión profunda de las últimas tendencias
                  en diseño y experiencia de usuario "Mobile first" & "Desktop
                  first". Trabajo con una variedad de tecnologías, desde HTML,
                  CSS y JavaScript hasta frameworks como React. También tengo
                  experiencia en el desarrollo de backend con Node.js, y manejo
                  bases de datos PostgreSQL utilizando Sequelize. Me destaco por
                  mi capacidad para traducir las necesidades del cliente en
                  soluciones web efectivas tanto en inglés como en español,
                  garantizando resultados esperados.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
