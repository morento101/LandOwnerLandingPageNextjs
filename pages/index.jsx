import Head from "next/head";
import Layout from "../components/layout";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import {Services} from "../components/Services";
import { AboutUs } from "../components/AboutUs";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Землевласник-СЛ</title>
      </Head>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </Layout>
  );
}
