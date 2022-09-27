import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import Services from "../components/services";
import AboutUs from "../components/aboutUs";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";

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
