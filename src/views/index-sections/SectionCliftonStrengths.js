
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionCliftonStrengths() {
  // SectionNucleoIcons
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
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
            <Col lg="6" md="5">
              <div className="icons-container">
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">1.Command</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">2.Analytical</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">3.Input</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">4.Communication</strong></span>
                <span class="fa-stack fa-2x"><strong class="fa-stack-1x">5.Ideation</strong></span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCliftonStrengths;
