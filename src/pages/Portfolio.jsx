import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./stylesPages/portfolio.css";
import data from "../services/data";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = data.map((img) => {
    return { original: img.original, id: img.id };
  });

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
