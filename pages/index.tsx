import { ResourceLink } from "@/components/ResourceLink";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Abhishek More",
    description: "Experience Peak.",
    url: "https://3portfolio-gray.vercel.app",
    siteName: "Next.js",
    images: [
      {
        url: "https://3portfolio-gray.vercel.app/ogimage.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://3portfolio-gray.vercel.app/ogimage.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    console.log("Loaded!");
    setLoading(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Overlay */}
      <div className="absolute bottom-8 left-8 flex gap-2 z-50">
        <ResourceLink
          href={
            "https://firebasestorage.googleapis.com/v0/b/asciify-a4fba.appspot.com/o/Abhishek%20More%20Resume.pdf?alt=media&token=612342c0-9664-41ce-beb2-b4265b20002b"
          }
          text="Resume"
        />
        <ResourceLink href={"https://github.com/Abhishek-More"} text="GitHub" />
        <ResourceLink
          href={"https://www.linkedin.com/in/abhishek-more-linked"}
          text="LinkedIn"
        />
        <ResourceLink
          href={"https://devpost.com/AbhishekMore"}
          text="Devpost"
        />
      </div>
      {/* <div className="absolute flex justify-center top-8 w-screen"> */}
      {/*   <p className="text-white text-[200px] font-medium">CLIMB</p> */}
      {/* </div> */}

      {loading && <p className="text-white">Loading</p>}

      <div
        className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 delay-1000`}
      >
        <Spline
          scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode"
          onLoad={handleLoad}
          className={`absolute z-40`}
        />
      </div>
    </div>
  );
}
