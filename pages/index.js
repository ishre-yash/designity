import Head from "next/head";
import { Navbar } from "../components/LandingPage/Navbar";
import Hero from "/components/LandingPage/Hero.jsx";
import LogoSlider from "../components/LandingPage/LogoSlider";
import Feacher from "../components/LandingPage/Feacher";
import Hero2 from "../components/LandingPage/Hero2";
import Benefits from "../components/LandingPage/Benefits";
import RecentWork from "../components/LandingPage/RecentWork";
import ScopeOfWork from "../components/LandingPage/ScopeOfWork";
import Memberships from "../components/LandingPage/Memberships";
import Faq from "../components/LandingPage/Faq";
import Footer from "../components/LandingPage/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Designjoy - Design as a Subscription</title>
        <meta
          content="The #1 unlimited product design subscription service for agencies, startups, and entrepreneurs."
          property="description"
        ></meta>
        <link rel="icon" href="/logos/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <LogoSlider />
      <Feacher />
      <Hero2 />
      <Benefits />
      <RecentWork />
      <ScopeOfWork />
      <Memberships />
      <Faq />
      <Footer />
    </>
  );
}
