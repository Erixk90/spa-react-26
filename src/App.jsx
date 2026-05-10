

import Process from "./components/Process";
import Why from "./components/Why";
import Pricing from "./components/Pricing";
import Bots from "./components/Bots";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";



export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Why />
      <Pricing />
      <Bots />
      <Testimonials />
      <CTA />
      <Footer />

    </>
  );
}
