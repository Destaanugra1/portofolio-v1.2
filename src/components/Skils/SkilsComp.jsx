import React from "react";
import { Card } from "react-bootstrap";
import Styles from "./SkilsComp.module.css";
import Html from "../images/HtmL.png";
import Css from "../images/css.png";
import Js from "../images/js.png";
import Reactjs from "../images/React.png";
import Nextjs from "../images/Nextjs.png";
import Tailwind from "../images/tailwind.png";

const SkilsComp = () => {
  return (
    <div id="Skils" className={Styles.skils}>
      <Card
        data-aos="zoom-out-up"
        data-aos-delay="200"
        className={Styles.card}
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img className={Styles.images} variant="top" src={Html} />
        <Card.Body>
          <Card.Title className={Styles.card__text}>Html 50%</Card.Title>
        </Card.Body>
      </Card>
      <Card
        data-aos="fade-up"
        data-aos-delay="400"
        className={Styles.card}
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img className={Styles.images} variant="top" src={Css} />
        <Card.Body>
          <Card.Title className={Styles.card__text}>CSS 40%</Card.Title>
        </Card.Body>
      </Card>
      <Card
        data-aos="fade-up"
        data-aos-delay="600"
        className={Styles.card}
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img className={Styles.images} variant="top" src={Js} />
        <Card.Body>
          <Card.Title className={Styles.card__text}> JavaScript 25%</Card.Title>
        </Card.Body>
      </Card>
      <Card
        data-aos="fade-up"
        data-aos-delay="800"
        className={Styles.card}
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img className={Styles.images} variant="top" src={Reactjs} />
        <Card.Body>
          <Card.Title className={Styles.card__text}>React 30%</Card.Title>
        </Card.Body>
      </Card>
      <Card
        data-aos="fade-up"
        data-aos-delay="1000"
        className={Styles.card}
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img className={Styles.nextjs} variant="top" src={Nextjs} />
        <Card.Body>
          <Card.Title className={Styles.card__text__nextjs}>
            Nextjs 20%
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        data-aos="fade-up"
        data-aos-delay="1200"
        className={Styles.card}
        style={{ width: "18rem", height: "20rem" }}
      >
        <Card.Img className={Styles.images} variant="top" src={Tailwind} />
        <Card.Body>
          <Card.Title className={Styles.card__text}>Tailwind 25%</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkilsComp;
