
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import WhiteSpace from "views/index-sections/WhiteSpace.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionCliftonStrengths from "views/index-sections/SectionCliftonStrengths.js";
import SectionAboutMe from "views/index-sections/SectionAboutMe.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionDark2 from "views/index-sections/SectionDark2.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionExamplesNonSpatial from "views/index-sections/SectionExamplesNonSpatial.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
    
  });
  console.log('mohsennnnnclassList', document.body.classList)
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
     
      
      <div className="main">
         {/* <SectionButtons /> */}
        {/* <SectionNavbars /> */}
        {/* <SectionNavigation /> */}
        {/* <SectionProgress /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionLogin /> */}
        {/* <SectionJavaScript /> */}
        {/* <SectionCarousel /> */}
        {/* <SectionDownload /> */}
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
