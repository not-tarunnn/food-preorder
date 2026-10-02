import Header from "../components/Header";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Preorder from "../components/Preorder";
import Halls from "../components/Halls";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Preorder />
        <Halls />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
