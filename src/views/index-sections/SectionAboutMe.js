
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionAboutMe() {
  // SectionNucleoIcons
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          
          <h2 className="title"  style={{textAlign: "center"}}>About Me<span style={{'font-size':'15px'}}></span></h2>

            <div style={{textAlign: "center", fontSize: '16px', color: 'gray'}}>
            I am a GI Scientist who studies GIScience and geocomputing. Regarding the rapid pace of technology and data generation/collection, the current GIS tools and technologies are not fully capable of processing these emerging spatial big data (e.g., COVID19 data, etc). The overarching goal of my research is to apply and develop GIS tools and technologies to make it possible to process spatial big data in epidemiology and ecology. My research also tries to amplify the impact of geographic components of social or health problems. My work has practical applications in spatial epidemiology (e.g., COVID-19, CCHf, brucellosis, etc), enabling freely and publicly available online processing of spatial big data by non-expert users and providing the next level of geovisualization and user interactivity for spatial data and processing.
 What distinguishes me from my peers in the field is that beside introducing GIS to broader scholars in non-spatial fields (through applying it to solve spatial problems in other areas), I have also focused on advancing the core of GIS (i.e., tools and technologies). In doing so, three main skill sets make me successful. First, I have enough expertise in a wide range of spatial analyses ranging from spatial data mining, and spatial epidemiology to movement analysis and geovisualization. Second, I have a set of deep experiences and interests in data mining and backend (server-side) programming languages like Python, Java, and SQL. Third, I am well experienced in front-end programming languages such as JavaScript, React/Redux, and HTML. The combination of these three skill sets enables me to make use of countless web-based and cloud-sourcing approaches to develop publicly available spatial online analytical platforms (SOLAPs) to both handle spatial Big Data maintenance/processing and publicize the GIS to non-expert users. 
My technical expertise in the field has enabled me to take a significant part in developing a novel branch of GIS named CyberGIScience literacy. An NSF-funded project to advance the new branch of literacy according to the advancement of technology. 
            </div>
        </Container>
      </div>
    </>
  );
}

export default SectionAboutMe;
