import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import useTrafficLight from "./Glow";

const TrafficLight = () => {
  const { redLight, yellowLight, greenLight, handleLightClick } =
    useTrafficLight();

  return (
    <Container className="text-center">
      <Row>
        <Col>
          <div id="hanger"></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="TrafficStop">
            <div
              id="lightred"
              className={`light red ${redLight ? "glow" : ""}`}
              onClick={() => handleLightClick("red")}
            ></div>
            <div
              id="lightyellow"
              className={`light yellow ${yellowLight ? "glow" : ""}`}
              onClick={() => handleLightClick("yellow")}
            ></div>
            <div
              id="lightgreen"
              className={`light green ${greenLight ? "glow" : ""}`}
              onClick={() => handleLightClick("green")}
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrafficLight;
