import Head from "next/head";
import Layout from "../components/layout/layout";
import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/heroSection/heroSection";
import Services from "../components/services/services";
import AboutUs from "../components/aboutUs/aboutUs";
import ContactUs from "../components/contactUs/contactUs";
import Footer from "../components/footer/footer";

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
