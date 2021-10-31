
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
            title="Moose article"
            // tag={Link}
            href = 'https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.7680'
          >
            Published Article
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Moose article PDF download"
            // tag={Link}
            href = 'https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/ece3.7680?download=true'
          >
            <i className="fa fa-download" />
            Published Article PDF
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
                href="https://aag-amarchive.secure-platform.com/a/solicitations/13/sessiongallery/647/application/3807"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> AAG Conference
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://vo-general.s3.amazonaws.com/56cf3a28-e150-4f24-b1de-0a23edc7fb97/147f0be8-1003-4a8d-9212-bc94cf91e6e8?AWSAccessKeyId=AKIAJ4PRWO26HAX3IOCA&Expires=1721960984&response-content-disposition=inline%3B%20filename%3D%22Moose_AAG_final.pptx%22&response-content-type=application%2Fvnd.openxmlformats-officedocument.presentationml.presentation&Signature=k6zvIMaeoEPLMdWe7EUtAwYrguo%3D"
                target="_blank"
                title="Download the AAG presentation"
              >
                <i className="fa fa-download" />
                download AAG PowerPoint
                <p className="d-lg-none">AAG PowerPoint</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                // href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
                tag={Link}
                // target="_blank"
                to="/index"
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
