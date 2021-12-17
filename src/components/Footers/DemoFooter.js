
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="mailto:ahmad178@umn.edu"
                  // target="_blank"
                >
                 
                  <i className="fa fa-envelope" />
                  ahmad178@umn.edu
                </a>
              </li>
              {/* <li>
                  <i className="fa fa-phone" />
                  
              </li> */}
              <li>
                  <i className="fa fa-map-pin" />
                  U-Spatial, University of Minnesota
                {/* </a> */}
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              Last update: December 2021
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
