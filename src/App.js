import React from "react";
import Header from "./components/layout/Header";
import Slider from "./components/section/Slider";
import Footer from "./components/layout/Footer";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider fonts="nexon" />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText attr={["nexon", "section", "gray", "container"]} />
        <Card attr={["nexon", "section", "container"]} />
        <Banner fonts="gmark" />
        <Text attr={["nexon", "section", "container"]} />
      </Main>
      <Footer attr={["nexon", "section", "gray", "container"]} />
    </>
  );
}

export default App;
