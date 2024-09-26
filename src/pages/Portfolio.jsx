import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./stylesPages/portfolio.css";
import data from "../services/data";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = data.map((img) => ({
    original: img.original,
    id: img.id,
    label: img.label, // Incluimos el label aquí para usarlo más adelante
  }));

  const handleSlideChange = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  const currentProject = data[currentIndex];

  return (
    <div>
      <div className="carousel">
        <ImageGallery
          items={imagenes}
          onSlide={handleSlideChange}
          className="imagenes"
          showPlayButton={false}
        />

        <div className="project-info">
          {currentProject && (
            <>
              <h2 className="title_portfolio">{currentProject.label}</h2>
              <p className="comentaries">{currentProject.description}</p>
            </>
          )}
        </div>

        <div className="project-buttons">
          {currentProject && (
            <div>
              {currentProject.demo && (
                <a
                  href={currentProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Demo</button>
                </a>
              )}
              <a
                href={currentProject.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Código</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
