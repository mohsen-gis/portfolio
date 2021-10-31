
/*eslint-disable*/
import React from "react";
import "assets/css/paper-kit.css"
// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Mohsen Ahmadkhani</h1>
              {/* <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
              <h6>PhD student in Geography </h6>  <h6> MGIS student</h6> 
              {/* <h6>MGIS student</h6>  */}
              <h7>University of Minnesota-Twin Cities</h7>
            </h2>
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        <h6 className="category category-absolute">
          Welcome to my professional portfolio! Scroll down to explore more...
          {/* <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png").default}
            />
          </a> */}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
