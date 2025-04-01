import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/about/About";
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
      <About />
      <Footer />
    </div>
  );
}
