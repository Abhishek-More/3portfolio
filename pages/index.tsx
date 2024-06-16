import { ResourceLink } from "@/components/ResourceLink";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("Loaded!");
    setLoaded(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Overlay */}
      <div className="absolute bottom-8 left-8 flex gap-2">
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
      <div className="absolute top-8 left-8">
        <p className="text-white text-7xl font-bold">ABHISHEK</p>
        <p className="text-white text-7xl font-bold">MORE</p>
      </div>

      <Spline
        scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode"
        onLoad={handleLoad}
        className={`absolute z-50`}
      />
    </div>
  );
}
