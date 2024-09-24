import "./stylesPages/aboutMe.css";

import my_image1 from "/images/profile.jpg";
import my_image2 from "/images/me_1.jpeg";
import my_image3 from "/images/me_3.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="aboutme">
        <h2 className="titulo animated rotateInUpRight">Acerca de Mi</h2>
        <p className="description">
          Soy una persona apasionada por el aprendizaje y el crecimiento
          personal. Siempre estoy buscando nuevas formas de desafiarme a mí
          mismo y de expandir mis horizontes. Me considero curioso y creativo,
          disfruto explorando diferentes campos de conocimiento y buscando
          soluciones innovadoras a los problemas que encuentro. Además, valoro
          mucho las relaciones interpersonales y disfruto de conectar con otras
          personas, ya sea a través de conversaciones significativas
        </p>
        <div className="wraper">
          <div className="item item1">
            <img src={my_image1} alt="" />
          </div>
          <div className="item item2">
            <img src={my_image2} alt="" />
          </div>
          <div className="item item3">
            <img src={my_image3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
