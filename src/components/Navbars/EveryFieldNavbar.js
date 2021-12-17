
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function ExamplesNavbar() {
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
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="The Edge of Impossibility"
            // tag={Link}
            href = 'https://www.youtube.com/watch?v=gC8RnpUTF4w'
          >
            EveryField: The Edge of Impossibility
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
            {/* <NavItem>
              <NavLink to="/index" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Components
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                href="https://www.youtube.com/watch?v=gC8RnpUTF4w"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> The Project Description
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/watch?v=gC8RnpUTF4w"
                target="_blank"
                title="Youtube tutorial"
              >
                <i className="fa fa-youtube" />
                <p className="d-lg-none">Youtube</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                tag={Link}
                to="/#/index"
              >
                <i className="fa fa-home"></i> Home
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
