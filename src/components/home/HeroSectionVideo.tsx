"use client";
import { useEffect, useRef } from "react";

const HeroSectionVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay failed:", error));
    }
  }, []);

  return (
    <>
      <div className="bg-center bg-no-repeat bg-cover relative h-[100vh]">
        <div className="w-full h-full">
          <video
            ref={videoRef}
            src={`/video/hero_video.mp4`}
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </>
  );
};

export default HeroSectionVideo;
