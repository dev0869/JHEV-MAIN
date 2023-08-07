import { BannerCarousal, HelpSection } from "./Carasouel";
import InputEffect from "../../components/InputEffect";
import OurProucts from "./OurProucts";
import "./home.css";
import Slide from "../../components/slides/Slide";
import Info from "./Info";

const Home = () => {
  return (
    <>
      <BannerCarousal />
      <HelpSection />
      <OurProucts />
      <InputEffect />
      <Info />
      <Slide />
     
    </>
  );
};

export default Home;
