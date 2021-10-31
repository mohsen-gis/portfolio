
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page" >
            <Col className="text-center" md="6">
              <a href="/landing-page" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/solap_intro.png").default}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/covid-dashboard"
                target="_blank"
              >
                COVID-19 SOLAP Project
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="/every-field" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/everyfield_pilot.png").default}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/every-field"
                target="_blank"
              >
                EveryField
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="/every-field" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/everyfield_pilot.png").default}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/moose"
                target="_blank"
              >
                Moose Movement Analysis
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="/every-field" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/everyfield_pilot.png").default}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/moose"
                target="_blank"
              >
                Moose Movement Analysis
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
