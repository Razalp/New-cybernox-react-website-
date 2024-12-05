import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  const [refs, setRefs] = useState({});

  const scrollToSection = (sectionId) => {
    if (refs[sectionId]) {
      refs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <Outlet context={{ setScrollRef: setRefs }} />
      <Footer />
    </div>
  );
}

export default Layout;
