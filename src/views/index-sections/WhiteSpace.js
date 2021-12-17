
import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function WhiteSpace() {
  const [alertSuccess, setAlertSuccess] = React.useState(true);
  const [alertWarning, setAlertWarning] = React.useState(true);
  const [alertDanger, setAlertDanger] = React.useState(true);
  return (
    <>
      {/* <Container className="tim-container">
        <div className="title">
          <h3>Notifications</h3>
        </div>
      </Container> */}
      <div id="notifications">
      <div style={{display:'inline-block', width: "100%", height: '20px'}}>
        <Alert color="danger">
          <Container style={{textAlign: "center"}}>
            <span>I might fail to lift 2000 lb in the real life, but I can even swallow a truck in cyberspace!</span>
          </Container>
        </Alert>
        </div>
        <div style={{display:'inline-block', width: "100%", height: '20px'}}>
        <Alert color="light">
          <Container style={{textAlign: "center"}}>
            <span style={{color: "gray", fontWeight: 'bold'}}>Spatial Is Special!</span>
          </Container>
        </Alert>
        </div>
        <div style={{display:'inline-block', width: "100%", height: '20px'}}>
        <Alert
          className="alert-with-icon"
          color="danger"
          isOpen={alertWarning}
        >
          <Container style={{textAlign: "center"}}>
            <span>"Everything is related to everything else, but near things are more related than distant things." ~ Tobler</span>
          </Container>
        </Alert> 
        </div>
        {/* <Alert className="alert-with-icon" color="info" isOpen={alertDanger}>
        </Alert> */}
        
      </div>
    </>
  );
}

export default WhiteSpace;
