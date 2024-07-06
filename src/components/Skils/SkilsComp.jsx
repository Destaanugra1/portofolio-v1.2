import React from 'react'
import { Card } from 'react-bootstrap'
import Styles from "./SkilsComp.module.css"
import Html from "../images/HtmL.png"
import Css from "../images/css.png"
import Js from "../images/js.png"
import Reactjs from "../images/React.png"
import Nextjs from "../images/Nextjs.png"

const SkilsComp = () => {
  return (
    <div className={Styles.skils}>
    <Card className={Styles.card} style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={Html} />
      <Card.Body>
        <Card.Title>Html 50%</Card.Title>
      </Card.Body>
    </Card>
    <Card className={Styles.card} style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={Css} />
      <Card.Body>
        <Card.Title>CSS 40%</Card.Title>
      </Card.Body>
    </Card>
    <Card className={Styles.card} style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={Js} />
      <Card.Body>
        <Card.Title>JavaScript 25%</Card.Title>
      </Card.Body>
    </Card>
    <Card className={Styles.card} style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={Reactjs}/>
      <Card.Body>
        <Card.Title>React 30%</Card.Title>
      </Card.Body>
    </Card>
    <Card className={Styles.card} style={{ width: '18rem', height: '20rem' }}>
      <Card.Img className={Styles.nextjs} variant="top" src={Nextjs} />
      <Card.Body>
        <Card.Title>Nextjs 20%</Card.Title>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SkilsComp