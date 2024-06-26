import { ResourceLink } from "@/components/ResourceLink";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { useState } from "react";
import type { Metadata } from "next";
import { NowPlaying } from "@/components/NowPlaying";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
import { NowPlayingText } from "@/components/NowPlayingText";

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

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [preloader, setPreloader] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);

  const { data } = useSWR("/api/spotify", fetcher, { refreshInterval: 3000 });

  const handleLoad = () => {
    console.log("Loaded!");
    setLoading(false);
  };

  const handleShowPlayer = (bool: boolean) => {
    if (data.isPlaying) {
      setShowPlayer(bool);
    }
  };

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-black">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Overlay */}
      <div className="absolute flex flex-col bottom-8 left-8 z-50">
        <p className="montreal text-[80px] text-white font-medium leading-none">
          ABHISHEK
        </p>
        <p className="montreal text-[80px] text-white font-medium leading-none">
          MORE
        </p>
      </div>
      <div className="absolute flex flex-col items-end bottom-8 right-8 z-[100]">
        <div className="flex gap-4">
          <ResourceLink
            href={
              "https://firebasestorage.googleapis.com/v0/b/asciify-a4fba.appspot.com/o/Abhishek%20More%20Resume.pdf?alt=media&token=612342c0-9664-41ce-beb2-b4265b20002b"
            }
            text="Resume"
            onLight={preloader}
          />
          <ResourceLink
            href={"https://github.com/Abhishek-More"}
            text="GitHub"
            onLight={preloader}
          />
          <ResourceLink
            href={"https://www.linkedin.com/in/abhishek-more-linked"}
            text="LinkedIn"
            onLight={preloader}
          />
          <ResourceLink
            href={"https://devpost.com/AbhishekMore"}
            text="Devpost"
            onLight={preloader}
          />
        </div>
      </div>
      {/* <div className="absolute flex justify-center top-8 w-screen"> */}
      {/*   <p className="text-white text-[200px] font-medium">CLIMB</p> */}
      {/* </div> */}

      <div
        className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 delay-1000`}
      >
        <Spline
          scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode"
          onLoad={handleLoad}
          className={`absolute z-40`}
        />
      </div>

      {/* DYNAMIC ISLAND OVERLAY */}
      <div className="flex flex-col justify-center items-center absolute h-screen w-screen bg-[#ececec] z-50 gap-2">
        <NowPlayingText visible={showPlayer} />
        <div className="relative">
          <motion.div
            initial={{ width: 60 }}
            animate={{ width: 260 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="relative flex justify-between mx-auto h-[60px] w-[260px] bg-black rounded-full p-2 overflow-hidden"
          >
            <div className="flex">
              <div
                className={`flex-shrink-0 h-[44px] w-[44px] rounded-full bg-white my-auto overflow-hidden transition-all duration-1000`}
                style={{
                  border: `2px solid rgb(29, 185, 84, ${data?.isPlaying ? "100" : "0"})`,
                }}
                onMouseEnter={() => handleShowPlayer(true)}
                onMouseLeave={() => handleShowPlayer(false)}
              >
                <Image
                  className="-translate-x-1"
                  src="/korosensei.webp"
                  width={256}
                  height={256}
                  alt=""
                ></Image>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="flex flex-col justify-end gap-1 ml-2"
              >
                <p className="montreal text-white opacity-40 text-[12px] leading-none tracking-wide mt-1 text-nowrap text-ellipsis">
                  SWE @ Dripos
                </p>
                <p className="montreal text-white font-medium text-[16px] leading-none tracking-wide mb-1 text-nowrap text-ellipsis">
                  Abhishek More
                </p>
              </motion.div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showPlayer && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 6 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute top-[72px]"
              >
                <NowPlaying data={data} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
