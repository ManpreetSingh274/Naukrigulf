"use client";
import UAE from "../assets/uae.svg";
import SAUDI from "../assets/saudi.svg";
import QATAR from "../assets/qatar.svg";
import KUWAIT from "../assets/kuwait.svg";
import OMAN from "../assets/oman.svg";
import BAHRAIN from "../assets/bahrain.svg";
import { useState, useEffect } from "react";
import { useCountry } from "@/context/CountryContext";
import { useRouter } from "next/navigation";

const data = [
  { name: "UAE", icon: UAE, ml: "", link: "/" },
  { name: "SAUDI", icon: SAUDI, ml: "ml-[-100px] md:ml-[-72px] lg:ml-[-52px]", link: "/saudi-arabia" },
  { name: "QATAR", icon: QATAR, ml: "ml-[-60px] md:ml-[-42px] lg:ml-[-27px]", link: "/qatar" },
  { name: "KUWAIT", icon: KUWAIT, ml: "ml-[-42.5px] md:ml-[-22px] lg:ml-[-27px]", link: "/kuwait" },
  { name: "OMAN", icon: OMAN, ml: "ml-[-58px] md:ml-[-24px] lg:ml-[-30px]", link: "/oman" },
  { name: "BAHRAIN", icon: BAHRAIN, ml: "ml-[-115px] md:ml-[-60px] lg:ml-[-6px]", link: "/bahrain" },
];

const deviceBreakpoints = [
  { device: "ultra-narrow-mobile", maxWidth: 320, scale: 0.5 },
  { device: "narrow-mobile", maxWidth: 375, scale: 0.65 },
  { device: "samsung-a23", maxWidth: 415, scale: 0.75 },  
  { device: "mobile", maxWidth: 640, scale: 0.8 },
  { device: "small-tablet", maxWidth: 768, scale: 0.85 },
  { device: "medium-tablet", maxWidth: 834, scale: 0.9 }, 
  { device: "large-tablet", maxWidth: 1024, scale: 0.95 },
  { device: "nest-hub", maxWidth: 1024, scale: 0.9 },
  { device: "nest-hub-max", maxWidth: 1280, scale: 0.95 },
  { device: "desktop", maxWidth: Infinity, scale: 1 }
];

const CountryIcons = ({ country }: { country: string }) => {
  const router = useRouter();
  const { selected, setSelected } = useCountry();
  const [display, setDisplay] = useState<string>(country);
  const [containerScale, setContainerScale] = useState(1);
  const [currentDevice, setCurrentDevice] = useState("desktop");
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setSelected(country);
    setDisplay(country);
  }, [country, setSelected]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenWidth(width);
      
      if (width >= 410 && width <= 415) {
        setContainerScale(0.75);
        setCurrentDevice("samsung-a23");
      }
      else if (width <= 320) {
        setContainerScale(0.5);
        setCurrentDevice("ultra-narrow-mobile");
      } else if (width <= 375) {
        setContainerScale(0.65);
        setCurrentDevice("narrow-mobile");
      }
      else if (width === 414 || width === 430) {
        setContainerScale(0.8);
        setCurrentDevice("iphone-xr");
      }
      else if (width === 717 && height === 512) {
        setContainerScale(0.7);
        setCurrentDevice("fold-unfolded");
      }
      else if (width === 1024 && height === 600) {
        setContainerScale(0.85);
        setCurrentDevice("nest-hub");
      } else if (width === 1280 && height === 800) {
        setContainerScale(0.9);
        setCurrentDevice("nest-hub-max");
      } else if ((width === 1024 && height === 1366) || (width === 1366 && height === 1024)) {
        setContainerScale(0.9);
        setCurrentDevice("large-tablet");
      } else if ((width === 834 && height === 1194) || (width === 1194 && height === 834)) {
        setContainerScale(0.85);
        setCurrentDevice("medium-tablet");
      } else {
        // Use the breakpoints array for other devices
        for (const bp of deviceBreakpoints) {
          if (width < bp.maxWidth) {
            setContainerScale(bp.scale);
            setCurrentDevice(bp.device);
            break;
          }
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTextPosition = () => {
    if (selected === "OMAN") {
      return "left-[70%] transform -translate-x-1/2";
    }
    
    if (currentDevice === "samsung-a23") {
      return "left-[68%] transform -translate-x-1/2 top-[55%]";
    }
    
    if (currentDevice === "nest-hub" || currentDevice === "nest-hub-max") {
      return "left-[70%] transform -translate-x-1/2";
    } else if (currentDevice.includes("tablet")) {
      return "left-[68%] transform -translate-x-1/2";
    }
    
    return "left-[70%] -bottom-50 sm:left-[65%] md:left-[70%] transform -translate-x-1/2"; 
  };

  const getBottomLineWidth = () => {
    if (currentDevice === "samsung-a23") {
      return "w-[108%] -ml-4";
    }
    
    if (currentDevice === "ultra-narrow-mobile") {
      return "w-[125%] -ml-8";
    } else if (currentDevice === "narrow-mobile") {
      return "w-[120%] -ml-12";
    } else if (currentDevice === "mobile") {
      if (screenWidth <= 400) {
        return "w-[115%] -ml-8";
      }
      return "w-[110%] -ml-8";
    } else if (currentDevice === "fold-unfolded") {
      return "w-[105%] -ml-4";
    } else if (currentDevice === "small-tablet") {
      return "w-[100%]";
    } else if (currentDevice.includes("tablet")) {
      return "w-[104%] -ml-4";
    } else if (currentDevice.includes("iphone-xr")) {
      return "w-[102%] -ml-2";
    }
    
    return "w-full";
  };

  const getIconScale = () => {
    if (currentDevice === "samsung-a23") {
      return "scale-[0.65] sm:scale-[0.7] md:scale-[0.8] lg:scale-100";
    }
    
    return "scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-100";
  };

  return (
    <div className="w-full overflow-hidden -mb-56 sm:-mb-12 md:-mb-30 lg:mb-0">
      <div 
        className="w-[99%] md:w-[75%] lg:w-[70%] xl:w-[65%] mx-auto relative sm:w-[90%]"
        style={{ 
          transform: `scale(${containerScale})`,
          transformOrigin: 'center center',
          height: containerScale < 1 ? `${Math.max(300, 100 / containerScale)}px` : 'auto',
          marginBottom: containerScale < 1 ? '4rem' : '0',
          transition: 'transform 0.3s ease'
        }}
      >
        <div className="w-full lg:w-fit flex flex-row flex-nowrap items-baseline justify-center mx-auto">
          {data.map((ele, i) => (
            <div
              key={i}
              className={`group transition-all duration-200 ${getIconScale()} origin-bottom-left ${ele.ml} hover:scale-110 hover:relative hover:z-50 ${selected === ele.name ? "selected relative z-40" : ""}`}
              onMouseEnter={() => setDisplay(ele.name)}
              onMouseLeave={() => setDisplay(selected)}
              onClick={() => router.push(ele.link)}
            >
              <ele.icon className="h-auto w-auto transition-all duration-200 hover:z-50" />
            </div>
          ))}
        </div>
        <div className={`${getBottomLineWidth()} mx-auto border-2 mt-[-2px] border-solid [border-image-source:linear-gradient(90deg,#F7E57E_0%,#B28238_14%,#E6CD6D_29.5%,#F3E7A0_40%,#F5ECAA_42.1%,#FFFFD0_50%,#FEFDCA_52.1%,#FDF8BA_57.1%,#F7E57E_77%,#C08E2C_100%)] [border-image-slice:1]`}></div>
        <div className={`absolute top-[60%] sm:top-[50%] md:top-[45%] ${getTextPosition()}`}>
          <div
            className="text-base sm:text-lg md:text-xl font-bold"
            style={{
              background:
                "linear-gradient(180deg, #F7E57E 0%, #B28238 15.5%, #E6CD6D 38%, #FFFFD0 58.5%, #F7E57E 79.5%, #C08E2C 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            {display}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .group svg path {
          fill: #606060;
          transition: fill 0.3s ease;
        }

        .group:hover svg path {
          fill: var(--orig-fill) !important;
        }

        .group.selected svg path {
          fill: var(--orig-fill) !important;
        }

        .group.selected {
          z-index: 50 !important;
        }
        
        @media (min-width: 1024px) and (max-width: 1280px) {
          .group svg {
            max-width: 100%;
            height: auto;
          }
        }
        
        @media (width: 412px) {
          .group svg {
            max-width: 95%;
            height: auto;
          }
        }
        
        @media (max-width: 400px) {
        }
      `}</style>
    </div>
  );
};

export default CountryIcons;