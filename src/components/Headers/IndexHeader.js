
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
            "url(" + require("assets/img/foggy_mohsen.jpg").default + ")",
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
            {/* <h2 className="presentation-subtitle text-center">
              <h6> GIS graduate</h6> 
              <h7>K.N.Toosi University of Technology</h7>
            </h2> */}
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
