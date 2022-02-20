
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ExamplesNavbar from "components/Navbars/MooseAnalysisNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Helmet } from "react-helmet-async";

function MooseAnalysis() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("moose");
    return function cleanup() {
      document.body.classList.remove("moose");
    };
  });
  return (
    <>
    <Helmet>
      <title>Mohsen Ahmadkhani - Moose Movement Analysis</title>
    <meta 
    name="description" 
    content="Our collective data indicate that the spatial proximity of dams investing in their neonates, and their stronger bond, nurtured neonate vitality in a way that reinforced continued investment." 
    data-rh = "true"
    />
    <link rel="canonical" href="https://www.mohsenahmadkhani.com/#/moose"/>
    </Helmet>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/examples/moose_circle.png").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Moose Movement Behavior Analysis<br />
              </h4>
              <h6 className="description">Moose Analysis Project</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              
Disturbance can induce some dams to abandon their neonates, whereas others con- tinue parental investment. Understanding the variability of the dam–neonate bond and parental investment of large, mobile species, reclusive during calving, such as moose (Alces alces), can be challenging. Advances in global positioning system (GPS) collar technology and analytical approaches allowed us to better understand the role that dam–neonate proximity plays in maintaining the maternal–neonate bond and maternal investment. In 2013 and 2014, we used movement behavior of 50 free- ranging GPS-collared dams and their 74 GPS-collared neonates during 96 hr post- capture/release of neonates to examine home range (HR) sizes, overlap of their HRs, reunions (≤26 m), and dynamic interactions of their movements. Mean area of 95% kernel density estimator (KDE) HRs of neonates (23.5 ha) not abandoned by their dams was more than 2 times that of abandoned neonates (10.4 ha). Mean HR area of dams continuing to invest in their neonates (104 ha) was smaller than that (897 ha) of abandoning dams. Mean overlap of core (50% KDE) and 95% KDE HRs of dam–neonate pairs when investment continued was 38.7% and 42%, whereas cor- responding overlap of HRs associated with abandonment was 0.1% and 2.7%. Mean proportion of pairwise hourly location-fixes indicative of reunions of dams invest- ing in their neonates was 0.37 and occurred at a mean interval of 2.7 hr. A stronger (p ≤ .05) interaction of mean hourly distances moved (did) between dams investing in their neonates was associated with closer proximity compared with dams abandon- ing neonates. Our collective data indicate that the spatial proximity of dams invest- ing in their neonates, and their stronger bond, nurtured neonate vitality in a way that reinforced continued investment. In contrast, the abandoning behavior of more distant dams had a diminishing influence on viability of their neonates via nutritional deprivation and limited reciprocal stimulation.
KEYWORDS
abandonment, Alces alces, maternal–neonate bond, moose, neonates, parental investment
              </p>
              <br />
              {/* <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button> */}
            </Col>
          </Row>
          <br />
          
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default MooseAnalysis;
