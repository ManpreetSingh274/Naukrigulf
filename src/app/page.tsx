import React from "react";
import Navbar from "@/components/Navbar";
import HeroSectionVideo from "@/components/home/HeroSectionVideo";
import SectionTwo from "@/components/home/uae/SectionTwo";
import TopRecruiters from "@/components/home/TopRecruiters";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(169.48deg, #000200 54.99%, #132A12 99.92%)",
      }}
    >
      <Navbar />
      <HeroSectionVideo />
      <SectionTwo country="UAE" />
      <TopRecruiters />
      <Testimonials />
      <Footer />
    </div>
  );
}
