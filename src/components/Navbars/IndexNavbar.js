
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import { Icon } from '@iconify/react';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            title="Jump to the top"
          >
            <i className="fa fa-home fa-3x" />
          
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://directory.cla.umn.edu/profiles/ahmad178"
                target="_blank"
                title="See my UMN page"
              >
                <i className="fa fa-university" />
                <p className="d-lg-none">UMN</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/mohsen-ahmadkhani/"
                target="_blank"
                title="Find me on LinkedIn"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/mohsen-gis"
                target="_blank"
                title="My GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://scholar.google.com/citations?user=6jBoTlUAAAAJ&hl=en"
                target="_blank"
                title="My Google Scholar account"
              >
                <i className="fa fa-graduation-cap" />
                <p className="d-lg-none">Google Scholar</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.researchgate.net/profile/Mohsen-Ahmadkhani"
                target="_blank"
                title="My ResearchGate account"
              >
                {/* <i class="fab fa-researchgate"></i> */}
                <Icon icon="simple-icons:researchgate" style={{ fontSize: '17px'}}/>
                <p className="d-lg-none">ResearchGate</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://directory.cla.umn.edu/items/cv/348098.pdf"
                target="_blank"
                title="Download my CV"
              >
                <i className="nc-icon nc-cloud-download-93" /> CV
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="mailto:ahmad178@umn.edu"
                target="_blank"
              >
                <i className="nc-icon nc-send"></i> Contact Me!
              </Button>
              
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
