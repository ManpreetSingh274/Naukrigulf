import React from "react";
import Navbar from "@/components/Navbar";
import SectionOne from "@/components/home/HeroSectionVideo";
import SectionTwo from "@/components/home/kuwait/SectionTwo";
import SectionThree from "@/components/home/TopRecruiters";
import SectionFour from "@/components/home/Testimonials";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(169.48deg, #000200 54.99%, #132A12 99.92%)",
      }}
    >
      <Navbar />
      <SectionOne />
      <SectionTwo country="KUWAIT" />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}
