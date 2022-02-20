
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
import HourofciNavbar from "components/Navbars/HourofciNavbar.js";
import ProfilePageHeaderHourofci from "components/Headers/ProfilePageHeaderHourofci.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Helmet } from "react-helmet-async";
function Hourofci() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("hourofci");
    return function cleanup() {
      document.body.classList.remove("hourofci");
    };
  });
  return (
    <>
    <Helmet>
      <title>Mohsen Ahmadkhani - Hour of Cyberinfrastructure</title>
    <meta 
    name="description" 
    content="EveryField project is Mohsen Ahmadkhani's an on-going research toward implementing a robust pipeline to build the informatics of agricultural field delineation at a global scale." 
    data-rh = "true"
    />
    <link rel="canonical" href="https://www.mohsenahmadkhani.com/#/hourofci"/>
    </Helmet>
      <HourofciNavbar />
      <ProfilePageHeaderHourofci />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/examples/hourofci_logo.png").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Hour of Ciber Infrastructure <br />
              </h4>
              <h6 className="description">Hour of CI</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Hour of Cyberinfrastructure (Hour of CI) is a nationwide campaign introducing hundreds of diverse undergraduate and graduate students to cyberinfrastructure and geographic information science (GIScience) while building Cyber Literacy for GIScience. The NSF-supported project is developing 17 interactive, online lessons for students and creating supplementary curriculum materials for instructors. These hour-long lessons will provide base knowledge and skills for across eight core areas and then test this knowledge through interactive content.
              Cyberinfrastructure empowers the growing knowledge economy in the United States, and plays a role in defense, homeland security, agriculture, and commerce by providing powerful computational resources to support data analytics and modeling. However, many scientific disciplines currently face the question of how to seamlessly integrate cyberinfrastructure training in their educational programs. Students and researchers in these disciplines thus often lack experience in using the most advanced tools and techniques to grapple with the crucial global challenges they are being trained to investigate. This project addresses this challenging problem by creating a clear curriculum model for educators - an Hour of Cyberinfrastructure (Hour of CI) - that integrates cyberinfrastructure skill building into domain-specific curriculum, with a clear learning goal for students: try cyberinfrastructure for one hour. Geospatially-based lessons in this project draw on real-world problems from social sciences, environmental sciences, and geosciences to make them accessible and meaningful to students in many scientific disciplines. Hour of CI lessons are available via an easy-to-use science gateway for broad-scale educational use. The project broadens access and enable community adoption of cyberinfrastructure for the nation's future scientific research workforce thus serving the national interest, as stated by NSF's mission: to promote the progress of science; to advance the national health, prosperity and welfare; and secure the national defense.
The Hour of CI project is a nationwide campaign introducing hundreds of diverse undergraduate and graduate students to cyberinfrastructure. Modeled on the "Hour of Code, the Hour of CI project is building a sustainable learning community and scalable training environment to train almost two hundred educators and over five hundred graduate and undergraduate students at institutions ranging from R1 universities to two-year teaching colleges in the short-term and potentially thousands more in the long-term. The project is developing 17 interactive, online lessons for students and creating supplementary curriculum materials for instructors. Hour of CI lessons are being developed using a learning outcome centered Backward Design Process in which students are exposed to cyberinfrastructure, establish conceptual foundations, and build a core set of skills to help them achieve Cyber Literacy for Geographic Information Science, which requires learners to be knowledgeable in eight core areas: cyberinfrastructure, parallel computing, big data, computational thinking, interdisciplinary communication, spatial thinking, geospatial data, and spatial modeling and analytics. The project lowers the barrier to entry for educators and students by building on a science gateway called the GISandbox to provide a cyberinfrastructure-enabled training environment accessible through a web browser for all Hour of CI lessons. The sustainable learning community built during the course of this project will continue to expand adoption of the Hour of CI beyond the project period.
              </p>
              <a href= 'https://www.hourofci.org'>[Source]</a>
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

export default Hourofci;
