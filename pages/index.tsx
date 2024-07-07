import { ResourceLink } from "@/components/ResourceLink";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import type { Metadata } from "next";
import { NowPlaying } from "@/components/NowPlaying";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
import { NowPlayingText } from "@/components/NowPlayingText";
import { Notifications } from "@/components/Notification";
import { ContributionChart } from "@/components/ContributionChart";
import { useAnimate } from "framer-motion";
import { useMotionValue, useMotionValueEvent } from "framer-motion";

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

export default function Home({ contributions }: { contributions: {} }) {
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showCrown, setShowCrown] = useState(false);
  const [showContributions, setShowContributions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [scope, animate] = useAnimate();

  const { data } = useSWR("/api/spotify", fetcher, { refreshInterval: 3000 });

  const y = useMotionValue(0);

  const handleShowPlayer = (bool: boolean) => {
    if (data?.isPlaying) {
      setShowPlayer(bool);
    }
  };

  const handleDragEnd = () => {
    if (y.get() < -30) {
      animate(scope.current, { y: -40, width: 130, height: 30, scale: 0.85 });
    }
  };

  useMotionValueEvent(y, "change", (latest) => {
    if (latest < -30) {
      animate(scope.current, { scale: 0.85 });
    } else {
      animate(scope.current, { scale: 1 });
    }
  });

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-black">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Overlay */}
      <div className="fixed flex flex-col items-end bottom-8 right-8 z-[100]">
        <div className="flex gap-4">
          <ResourceLink
            href={
              "https://firebasestorage.googleapis.com/v0/b/asciify-a4fba.appspot.com/o/Abhishek%20More%20Resume.pdf?alt=media&token=612342c0-9664-41ce-beb2-b4265b20002b"
            }
            text="Resume"
          />
          <ResourceLink
            href={"https://github.com/Abhishek-More"}
            text="GitHub"
            onHover={setShowContributions}
          />
          <ResourceLink
            href={"https://www.linkedin.com/in/abhishek-more-linked"}
            text="LinkedIn"
            onHover={setShowNotifications}
          />
          <ResourceLink
            href={"https://devpost.com/AbhishekMore"}
            text="Devpost"
            onHover={setShowCrown}
          />
        </div>
      </div>

      {/* DYNAMIC ISLAND OVERLAY */}
      <div className="flex flex-col justify-center items-center absolute h-screen w-screen bg-[#ececec] z-50 gap-2">
        <NowPlayingText visible={data?.isPlaying && showPlayer} />
        <div className="relative">
          <motion.div
            ref={scope}
            drag="y"
            dragSnapToOrigin
            onDragEnd={handleDragEnd}
            dragConstraints={{ top: 0, bottom: 0 }}
            initial={{
              scale: 0,
              width: 60,
            }}
            animate={{
              scale: [0, 1, 1, 1],
              width: [60, 150, 200, 260],
            }}
            transition={{
              delay: 0.75,
              times: [0, 0.25, 0.5, 0.75],
              duration: 0.75,
              type: "spring",
              bounce: 0.1,
            }}
            style={{ y }}
            onAnimationComplete={() => setInitialLoading(false)}
            className="relative flex justify-between items-center mx-auto h-[60px] w-[260px] bg-black rounded-full p-2 overflow-hidden border-2 border-[#ececec]"
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
                  priority
                ></Image>
              </div>

              <motion.div className="flex flex-col justify-end gap-1 ml-2">
                <p className="montreal text-white opacity-40 text-[12px] leading-none tracking-wide mt-1 text-nowrap text-ellipsis">
                  swe @ dripos
                </p>
                <p className="montreal text-white font-medium text-[16px] leading-none tracking-wide mb-1 text-nowrap text-ellipsis">
                  abhishek more
                </p>
              </motion.div>
            </div>
          </motion.div>

          <Image
            src="/crown.gif"
            width={50}
            height={50}
            alt=""
            className={`${showCrown ? "opacity-100" : "opacity-0"} absolute -translate-x-6 -translate-y-20 -rotate-45 transition-opacity duration-300`}
          />

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
          <AnimatePresence>
            {showContributions && (
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
                <ContributionChart contributions={contributions} />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showNotifications && <Notifications />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://github-contributions-api.jogruber.de/v4/abhishek-more?y=last",
  );
  const contributions = await res.json();

  return {
    props: {
      contributions,
    },
    revalidate: 3600,
  };
}
