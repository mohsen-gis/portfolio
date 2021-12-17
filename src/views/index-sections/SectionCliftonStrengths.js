
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components

function SectionCliftonStrengths() {
  // SectionNucleoIcons
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
      {/* <div className="section section-dark"> */}
        <Container md = '6'>
          <Row >
            <Col md="6">
              <h2 className="title">My CliftonStrengths<sup><span style={{'font-size':'15px'}}>&#174;</span></sup> Signature Themes</h2>
              <br />
              <p className="description">
              The Clifton StrengthsFinder assessment helps identify the areas where you 
              (or team if being used in that context) have the greatest potential for building strength. 
              It measures recurring patterns of thought, feeling, and behavior. 
              Knowing this information is a starting point; Leadership Vision is then 
              able to help individuals, teams and organizations leverage their Talents, and turn them 
              into sustainable Strengths <a href = 'https://www.leadershipvisionconsulting.com/what-is-the-clifton-strengthsfinder/'>[source].</a>
              </p>
              <br />
              <Button
                className="btn-round"
                color="danger"
                href="https://www.gallup.com/cliftonstrengths/en/252137/home.aspx"
                target="_blank"
              >
                Read more on Gallup
              </Button>
              {/* <Button
                className="btn-round ml-1"
                color="danger"
                href="views/index-sections/GallupReport.pdf"
                outline
                target="_blank"
              >
                PDF
              </Button> */}
            </Col>
            {/* <Col md="6">
              <div className="icons-container" style = {{position: 'absolute', left: '63%', top: '3%'}}>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">Command</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">Analytical</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">Input</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">Communication</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">Ideation</strong></span>
              </div>
            </Col> */}
            <Col style = {{left:'0%', position: 'relative'}} md="6">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/CS.png").default}
                  // style={{ width: "100%" }}
                />
              
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCliftonStrengths;
