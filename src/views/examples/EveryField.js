
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
import ExamplesNavbar from "components/Navbars/EveryFieldNavbar.js";
import ProfilePageHeaderEveryfield from "components/Headers/ProfilePageHeaderEveryfield.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Helmet } from "react-helmet-async";
function EveryField() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("every-field");
    return function cleanup() {
      document.body.classList.remove("every-field");
    };
  });
  return (
    <>
    <Helmet>
      <title>Mohsen Ahmadkhani - EveryField And Deep Learning</title>
    <meta 
    name="description" 
    content="EveryField project is Mohsen Ahmadkhani's an on-going research toward implementing a robust pipeline to build the informatics of agricultural field delineation at a global scale." 
    data-rh = "true"
    />
    <link rel="canonical" href="https://www.mohsenahmadkhani.com/#/every-field"/>
    </Helmet>
      <ExamplesNavbar />
      <ProfilePageHeaderEveryfield />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="EveryField project is Mohsen Ahmadkhani's an on-going research toward implementing a robust pipeline to build the informatics of agricultural field delineation at a global scale."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/farm-field-icon-19.jpg").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                GIS Deep Learning In Precision Agriculture <br />
              </h4>
              <h6 className="description">EveryField Project</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                EveryField project is an on-going research that implements a robust pipeline to build the informatics of agricultural field delineation at a global scale. 
                This work is critical to understanding how to address agricultural field delineation with a high accuracy at continental scale using remote sensing satellite imagery. The study of agricultural field delineation is crucial to achieve higher food quality and security, boosting the agricultural economy, and controlling gas emissions and global warming. Hence, the challenge of enhancing the agricultural yields and economy, while reducing greenhouse gas emissions, has compelled policymakers to focus on the global agriculture system. The management and optimization of this system require an integrated and accurate database of agriculture field boundaries and information. This information includes location, shape, spatial extent, and field characteristics such as crop type, soil type, fertility, yield, and taxation. Agricultural information are important indicators to monitor agriculture policies and developments; thus, they need to be up-to-date, accurate, and reliable.
 Agriculture field delineation has been a topical subject in the literature and there are a variety of methods developed in this regard but, regarding the huge volume of the required raster data, none of them have yet been able to generate accurate field boundaries at a continental and global scales. 
Without this work, we will have to continue with conventional tedious methods such as land surveys and visual interpretation of orthophotos and satellite imagery. However, regarding the extent of the US, the conventional methods are significantly costly, time-consuming, and prone to human errors. They also require the intervention of experts with sufficient knowledge about the study area, which is not always possible. Due to the dynamic nature of farms (e.g., cultivation process) monitoring of crops is complicated and makes the conventional methods even less appropriate. 

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

export default EveryField;
