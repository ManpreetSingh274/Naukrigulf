import Image from "next/image";
import Link from "next/link";
import nav_logo from "@/../../public/images/nav_logo.png";
import facebook from "@/../../public/images/facebook.png";
import linkedin from "@/../../public/images/linkedin.png";
import instagram from "@/../../public/images/instagram.png";
import youtube from "@/../../public/images/youtube.png";
import x from "@/../../public/images/x.png";
import apple from "@/../../public/images/apple.png";
import google from "@/../../public/images/google_play.png";
import infoedge from "@/../../public/images/infoedge.png";
import sister_brand from "@/../../public/images/sister_brand.png";

const Footer = () => {
  return (
    <>
      <div className="px-[10vw] md:px-[15vw] py-20 bg-[url('/images/footer_bg.png')] bg-center bg-no-repeat bg-cover relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between">
          <div>
            <Image src={nav_logo} alt="Logo not found!" className="w-[200px]" />
            <div className="mt-20 text-white text-xl font-bold">
              Social Links
            </div>
            <div className="mt-4">
              {/* social */}
              <div className="inline-block">
                <Link href={"/"}>
                  <Image
                    src={facebook}
                    alt="Not Found!"
                    className="w-6 inline-block"
                  />
                </Link>
              </div>
              {/* social */}
              {/* social */}
              <div className="ml-6 inline-block">
                <Link href={"/"}>
                  <Image
                    src={linkedin}
                    alt="Not Found!"
                    className="w-6 inline-block"
                  />
                </Link>
              </div>
              {/* social */}
              {/* social */}
              <div className="ml-6 inline-block">
                <Link href={"/"}>
                  <Image
                    src={instagram}
                    alt="Not Found!"
                    className="w-6 inline-block"
                  />
                </Link>
              </div>
              {/* social */}
              {/* social */}
              <div className="ml-6 inline-block">
                <Link href={"/"}>
                  <Image
                    src={youtube}
                    alt="Not Found!"
                    className="w-6 inline-block"
                  />
                </Link>
              </div>
              {/* social */}
              {/* social */}
              <div className="ml-6 inline-block">
                <Link href={"/"}>
                  <Image
                    src={x}
                    alt="Not Found!"
                    className="w-6 inline-block"
                  />
                </Link>
              </div>
              {/* social */}
            </div>
          </div>
          <div className="flex flex-row text-xs mt-12 md:mt-0">
            <div>
              <div className="pt-4">
                <Link href={""}>Home</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Terms & Conditions</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Privacy Policy</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Security Advice</Link>
              </div>
            </div>
            <div className="mx-6">
              <div className="pt-4">
                <Link href={""}>Fruad</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Report Bug</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Summons/ Notices</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Grievances</Link>
              </div>
            </div>
            <div>
              <div className="pt-4">
                <Link href={""}>About Us</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Contact Us</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>Feedback</Link>
              </div>
              <div className="pt-4">
                <Link href={""}>FAQs</Link>
              </div>
            </div>
          </div>
          <div className="bg-[linear-gradient(90deg,#F7E57E_0%,#B28238_8%,#B98D40_12%,#CEAB55_18%,#E6CD6D_24%,#F5EBA8_39%,#FFFFD0_50%,#FAF1A6_62%,#F8E888_73%,#F7E57E_79%,#F3DF78_82%,#E9CF69_87%,#D8B450_92%,#C08E2C_98%)] rounded-2xl p-[1px] mt-12 md:mt-0">
            <div className="bg-[#0E200D] rounded-2xl p-8 h-full">
              <div className="text-white text-lg">Apply on-the go</div>
              <div className="text-white text-base my-4">
                Get real-time job updates on our App
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <Link href={""}>
                    <Image src={apple} alt="Not Found!" className="w-12 mr-4" />
                  </Link>
                </div>
                <div>
                  <Link href={""}>
                    <Image
                      src={google}
                      alt="Not Found!"
                      className="w-12 mr-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-0.5 my-8"
          style={{
            background:
              "linear-gradient(90deg, #F7E57E 0%, #B28238 14%, #E6CD6D 29.5%, #FFFFD0 50%, #F7E57E 77%, #C08E2C 100%)",
          }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="flex flex-row">
            <div>
              <Image src={infoedge} alt="Not Found!" className="w-28" />
            </div>
            <div className="pl-4 text-xs">
              <div>
                All trademarks are properties of their respective owners.
              </div>
              <div className="mt-1">
                All rights reserved &#169; 2025 Info Edge (India) Ltd.
              </div>
            </div>
          </div>
          <Image
            src={sister_brand}
            alt="Not Found!"
            className="w-[100%] md:w-[100%] pt-4 md:pt-0"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
