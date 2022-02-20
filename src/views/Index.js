
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

import WhiteSpace from "views/index-sections/WhiteSpace.js";
import SectionTypography from "views/index-sections/SectionTypography.js";

// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionCliftonStrengths from "views/index-sections/SectionCliftonStrengths.js";
import SectionAboutMe from "views/index-sections/SectionAboutMe.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionDark2 from "views/index-sections/SectionDark2.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionExamplesNonSpatial from "views/index-sections/SectionExamplesNonSpatial.js";
import { Helmet } from "react-helmet-async";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
    
  });
  
  return (
    <>
    <Helmet>
      <title>Mohsen Ahmadkhani</title>
    <meta 
    name="description" 
    content="The Professional Portfolio of Mohsen Ahmadkhani. Mohsen Ahmadkhani is a PhD student and an MGIS student at the University of Minnesota. He got his BSc in Surveying Engineering at Zanjan University and then got an Master of Science (MSc) in Geographic Information Systems from Khaje Nasir University (KNTU). He is interested in Geocomputing and CyberGIScience. He has been working on multiple projects including agricultural field delineation, hour of cyberinfrastructure and spatial online analytical platforms (SOLAP) for COVID-19." 
    data-rh = "true"
    />
    <link rel="canonical" href="https://www.mohsenahmadkhani.com/#/index"/>
    </Helmet>
      <IndexNavbar />
      <IndexHeader />
     
      
      <div className="main">
        <SectionAboutMe />
        <WhiteSpace />
        <SectionCliftonStrengths />
        <SectionTypography />
        <SectionDark />
        <SectionExamples />
        <WhiteSpace />
        <SectionDark2 />
        <SectionExamplesNonSpatial />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
