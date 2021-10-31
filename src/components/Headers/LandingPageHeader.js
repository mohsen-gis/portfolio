
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/dashboard.JPG").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>COVID-19 SOLAP</h1>
            <h3>This is a COVID-19 GIS dashboard that tracks the disease stats in the US. 
              This work provides a new level of interactivity by enabling user-defined spatial clustering of the disease on the fly. </h3>
            <br />
            <Button
              href="https://youtu.be/dSaxMNTHBgs"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button 
            href="https://smartcommunityhealth.github.io/solap-template/"
            className="btn-round" 
            color="neutral" 
            // type="button" 
            target="_blank"
            outline>
              <i className="fa fa-tachometer" />
              COVID-19 Dashboard
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
