
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
                  target="_blank"
                >
                 
                  <i className="fa fa-envelope" />
                  Email me
                </a>
              </li>
              <li>
                {/* <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                > */}
                  <i className="fa fa-phone" />
                  612-540-9871
                {/* </a> */}
              </li>
              <li>
                {/* <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                > */}
                  <i className="fa fa-institution" />
                  USpatial, University of Minnesota
                {/* </a> */}
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              Last Update: November 2021
              <i className="fa fa-heart heart" /> 
              <i className="fa fa-wrench faa-wrench animated faa-fast"></i>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
