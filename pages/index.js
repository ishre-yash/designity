import Head from "next/head";
import Hero from "/components/LandingPage/Hero.jsx";
import LogoSlider from "../components/LandingPage/LogoSlider";
import Feacher from "../components/LandingPage/Feacher";
import Hero2 from "../components/LandingPage/Hero2";
import Benefits from "../components/LandingPage/Benefits";
import RecentWork from "../components/LandingPage/RecentWork";

export default function Home() {
  return (
    <>
      <Head>
        <title>Designjoy - Design as a Subscription</title>
        <meta
          content="The #1 unlimited product design subscription service for agencies, startups, and entrepreneurs."
          property="description"
        ></meta>
        <link
          rel="icon"
          href="https://assets.website-files.com/5837424ae11409586f837994/5e2fb217d4837e75854462c9_Small.png"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Hero />
      <LogoSlider />
      <Feacher />
      <Hero2 />
      <Benefits />
      <RecentWork />
    </>
  );
}
