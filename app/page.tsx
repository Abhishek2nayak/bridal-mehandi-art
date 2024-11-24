import About from "@/component/sections/AboutSection";
import Gallery from "@/component/sections/GallerySection";
import { AutoScrollGallery } from "@/component/sections/HeroSection";
import LocationSection from "@/component/sections/LocationSection";
import Service from "@/component/sections/ServiceSection";
import Testimonial from "@/component/sections/TestmonialSection";
import Section from "@/component/ui/SectionWrapper";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Mehandi Artists in Tamil Nadu - Chennai, Coimbatore & Beyond</title>
        <meta
          name="description"
          content="Book the best Mehandi artists across Tamil Nadu, including Chennai and Coimbatore, for weddings, baby showers, and more. Professional designs using 100% organic Mehandi with no side effects."
        />
        <meta name="keywords" content="Mehandi artists Tamil Nadu, Mehandi artists Chennai, Mehandi artists Coimbatore, organic Mehandi designs, professional Mehandi artist, Tamil Nadu bridal Mehandi, baby shower Mehandi" />
        <meta name="author" content="Bridal Mehandi Art" />
        <meta property="og:title" content="Best Mehandi Artists in Tamil Nadu - Chennai, Coimbatore +15 more cities" />
        <meta
          property="og:description"
          content="Discover exquisite Mehandi services in Tamil Nadu, from weddings to baby showers. Expert Mehandi artists in Chennai, Coimbatore, and beyond. 100% organic designs."
        />
        <meta property="og:image" content="/assets/bridal.jpg" />
        {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
        <meta property="og:type" content="website" />
      </Head>
      <AutoScrollGallery />
      <About />
      <Service />
      <Gallery />
      <Section title="People love our work">
        <div className="flex flex-wrap justify-center gap-5">
          <Testimonial
            name="Meenakshi R."
            feedback="The mehandi designs were intricate and beautifully detailed. The artist was professional and ensured the patterns were unique to my preferences. Highly recommend this service!"
            image="https://via.placeholder.com/150"
            rating={5}
          />
          <Testimonial
            name="Janani S."
            feedback="I loved the creativity and precision in the mehandi designs. The artist took the time to understand what I wanted and delivered beyond my expectations!"
            image="https://via.placeholder.com/150"
            rating={5}
          />
          <Testimonial
            name="Lakshmi P."
            feedback="The mehandi artistry was outstanding! The patterns were traditional yet modern, and the attention to detail was remarkable. I'll definitely come back for future events."
            image="https://via.placeholder.com/150"
            rating={5}
          />
          <Testimonial
            name="Sowmya V."
            feedback="The designs were stunning, and the quality of work was amazing! The artist was patient and very skilled. It was a wonderful experience overall."
            image="https://via.placeholder.com/150"
            rating={5}
          />

        </div>
      </Section>
      <LocationSection />
    </>
  )
}
