import "./stylesPages/skills.css";

const Skills = () => {
  const toggleCard = (event) => {
    const cardContainer = event.currentTarget;
    const allCards = document.querySelectorAll(".skills__card-container");

    allCards.forEach((card) => {
      if (card !== cardContainer.querySelector(".skills__card-container")) {
        card.classList.add("hidden");
      }
    });

    const description = cardContainer.querySelector(".skills__card-container");
    description.classList.toggle("hidden");
  };

  return (
    <section id="skills" className="skills section">
      <h2 className="section__title animated rollIn">Habilidades</h2>
      <div className="skills__container grid--container">
        <p className="skills__description flex--container"></p>
        <div className="skills__wrapper flex--container">
          <div className="skills__cards flex--container">
            {/* Card 1 */}
            <div className="skills__cards-container" onClick={toggleCard}>
              <summary className="skills__cards-title flex--container">
                <i className="bx bxl-html5 flex--container"></i>
                <h3 className="skills__card-title">HTML</h3>
              </summary>
              <div className="skills__card-container hidden">
                <p className="skills__card-description">
                  Poseo habilidades sólidas en HTML, destacando mi capacidad
                  para utilizar el marcado semántico y una amplia variedad de
                  etiquetas y atributos para estructurar y dar formato al
                  contenido web. Además, tengo experiencia en la creación de
                  formularios interactivos, integración de contenido multimedia
                  y gestión de enlaces e hipervínculos. También soy competente
                  en la creación y diseño de tablas y listas, así como en la
                  integración de contenido externo y el uso de metaetiquetas
                  para optimización SEO. Por último, me aseguro de validar mi
                  código HTML utilizando herramientas adecuadas para garantizar
                  la calidad y compatibilidad del mismo con diferentes
                  navegadores.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="skills__cards-container" onClick={toggleCard}>
              <summary className="skills__cards-title flex--container">
                <i className="bx bxl-css3 flex--container"></i>
                <h3 className="skills__card-title">CSS3</h3>
              </summary>
              <div className="skills__card-container hidden">
                <p className="skills__card-description">
                  Mi destreza en CSS es sólida, abarcando la capacidad de
                  generar diseños atractivos y adaptables mediante la aplicación
                  de reglas de estilo y cascada. Cuento con experiencia en la
                  utilización efectiva de selectores, propiedades y valores para
                  dar formato al contenido HTML y mejorar su estética visual.
                  Además, domino la gestión de cajas y modelos de caja, así como
                  la implementación de flexbox y grid para la creación de
                  diseños versátiles y complejos. También estoy versado en
                  técnicas avanzadas como animaciones, transformaciones y
                  transiciones, que permiten agregar dinamismo e interactividad
                  a las páginas web de forma legible.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="skills__cards-container" onClick={toggleCard}>
              <summary className="skills__cards-title flex--container">
                <i className="bx bxl-javascript flex--container"></i>
                <h3 className="skills__card-title">Javascript</h3>
              </summary>
              <div className="skills__card-container hidden">
                <p className="skills__card-description">
                  Poseo la capacidad de crear funcionalidades interactivas y
                  dinámicas en páginas web. Tengo experiencia en la manipulación
                  del DOM para modificar la estructura y el contenido de una
                  página de forma dinámica, así como en la gestión de eventos
                  para responder a las acciones del usuario. Además, domino el
                  uso de funciones, objetos y métodos para encapsular la lógica
                  de programación y facilitar el mantenimiento del código.
                  También me esfuerzo por seguir las mejores prácticas de
                  codificación y mantener un código JavaScript limpio y
                  modularizado.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="skills__cards-container" onClick={toggleCard}>
              <summary className="skills__cards-title flex--container">
                <i className="bx bxl-react flex--container"></i>
                <h3 className="skills__card-title">React</h3>
              </summary>
              <div className="skills__card-container hidden">
                <p className="skills__card-description">
                  Me enfoco en la creación de aplicaciones web dinámicas y
                  responsivas. Tengo un buen dominio del ciclo de vida de los
                  componentes y la gestión del estado, utilizando tanto el
                  estado local como Context API para manejar datos compartidos.
                  He implementado técnicas de optimización para mejorar el
                  rendimiento de las aplicaciones. Además, tengo experiencia en
                  el uso de hooks, y en la creación de componentes reutilizables
                  y escalables. Me apasiona mantener el código limpio y
                  accesible, y siempre busco aplicar las mejores prácticas en el
                  desarrollo de mis proyectos.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="skills__cards-container" onClick={toggleCard}>
              <summary className="skills__cards-title flex--container">
                <i className="bx bxl-nodejs flex--container"></i>
                <h3 className="skills__card-title">Node JS</h3>
              </summary>
              <div className="skills__card-container hidden">
                <p className="skills__card-description">
                  Me especializo en la creación de aplicaciones backend que
                  utilizan PostgreSQL como base de datos y Sequelize como ORM.
                  Poseo un sólido entendimiento de la arquitectura RESTful y soy
                  capaz de diseñar y construir APIs eficientes y escalables.
                  Tengo experiencia en la definición de modelos y relaciones en
                  Sequelize, así como en la implementación de consultas
                  complejas para interactuar con la base de datos de manera
                  efectiva. Además, manejo la validación de datos y la gestión
                  de transacciones para garantizar la integridad de la
                  información. Me apasiona optimizar el rendimiento de las
                  consultas y aplicar buenas prácticas de seguridad, como la
                  sanitización de entradas y la autenticación. Siempre estoy en
                  busca de nuevas tecnologías y métodos para mejorar mis
                  habilidades en el desarrollo backend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="skills__tags flex--container">
          <h3 className="skills__tags-title pulsing-title">
            Habilidades Blandas
          </h3>
          <div className="skills__tags-container flex--container">
            <div className="items skills__tag1">Responsable</div>
            <div className="items skills__tag2">Trabajo en equipo</div>
            <div className="items skills__tag3">Creativo</div>
            <div className="items skills__tag4">Puntual</div>
            <div className="items skills__tag5">Proactivo</div>
            <div className="items  skills__tag6">Autodidacta</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
