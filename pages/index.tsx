import { ResourceLink } from "@/components/ResourceLink";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Overlay */}
      <div className="absolute bottom-8 left-8 flex gap-2">
        <ResourceLink href="#" text="Resume" />
        <ResourceLink href="#" text="GitHub" />
        <ResourceLink href="#" text="LinkedIn" />
        <ResourceLink href="#" text="Devpost" />
      </div>

      <Spline scene="https://prod.spline.design/x9AvaSbmi1rQ3uaQ/scene.splinecode" />
    </div>
  );
}
