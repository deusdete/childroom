import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroThemaRoom from "../components/HeroThemaRoom";
import HowToCustomize from "../components/HowToCustomize";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <HeroThemaRoom />
      <HowToCustomize />
      <Footer />
    </>
  );
};

export default Home;
