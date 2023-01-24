import React from "react";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import LearnMore from "./componets/LearnMore";
import Photography from "./componets/photography";
import Testimoni from "./componets/Testimoni";
import Gallery from "./componets/Gallery";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="bg-[re d] font-Rowdies">
      <main
        className="bg-[url('./../public/images/mobile/image-header.jpg')] 
      lg:bg-[url('./../public/images/desktop/image-header.jpg')] bg-no-repeat bg-cover bg-center px-6 py-8 h-[100vh]"
      >
        <Navbar />
        <Hero />
      </main>
      <LearnMore
        image="image-transform.jpg"
        deskImage="image-transform.jpg"
        title="Transform your brand"
        p="We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you."
        btncolor="bg-[#fdf1b5]"
        id="1"
      />
      <LearnMore
        image="image-stand-out.jpg"
        deskImage="image-stand-out.jpg"
        title="Stand out to the right audience"
        p={`Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`}
        btncolor="bg-[#fddad0]"
        id="2"
      />
      <div className="lg:grid lg:grid-cols-2">
        <Photography
          bgImage="bg-[url('./../public/images/mobile/image-graphic-design.jpg')]"
          desktopBgImage="lg:bg-[url('./../public/images/desktop/image-graphic-design.jpg')]"
          textColor="text-[#25564b]"
          title="Graphic design"
          p=" Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <Photography
          bgImage="bg-[url('./../public/images/mobile/image-photography.jpg')]"
          desktopBgImage="lg:bg-[url('./../public/images/desktop/image-photography.jpg')]"
          textColor="text-[#19536b]"
          title="Photography"
          p="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
      {/* tetstmonials */}
      <div className="py-[5rem] px-8 text-center flex flex-col gap-[5rem]">
        <h2 className="text-md tracking-widest font-LibreBaskerville text-[#a7abae]">
          CLIENT TESTIMONIALS
        </h2>
        <div className="lg:grid lg:grid-cols-3">
          <Testimoni
            image="./images/image-emily.jpg"
            p="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            author="Emily R."
            authorJob="Marketing Director"
          />
          <Testimoni
            image="./images/image-thomas.jpg"
            p="  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
          "
            author="Thomas S."
            authorJob="Chief Operating Officer"
          />

          <Testimoni
            image="./images/image-jennie.jpg"
            p="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            author="Jennie F."
            authorJob="Business Owner"
          />
        </div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
