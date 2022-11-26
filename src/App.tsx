import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/Footer";
import Navigation from "./components/header/Navigation";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import About from "./components/section/about/About";
import Faq from "./components/section/faq/Faq";
import Home from "./components/section/home/Home";
import Roadmap from "./components/section/roadmap/Roadmap";
import Showcase from "./components/section/showcase/Showcase";
import Team from "./components/section/team/Team";
import { light, dark } from "./styles/themes";

function App() {
  return (
    <div>
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </div>
  );
}

export default App;
