import { HiMiniArrowUpRight } from "react-icons/hi2";

//TODO: Tweak transition distance of arrow
export const ResourceLink = ({
  href,
  text,
  onLight,
  onHover,
}: {
  href: string;
  text: string;
  onLight?: boolean;
  onHover?: (value: boolean) => void;
}) => {
  const handleHover = (value: boolean) => {
    if (onHover) {
      onHover(value);
    }
  };

  return (
    <div
      className={`${!onLight ? "text-black" : "text-white"} group flex cursor-pointer opacity-40 transition-opacity hover:opacity-80`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="montreal text-[14px]"
      >
        {text.toUpperCase()}
      </a>
      <HiMiniArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </div>
  );
};
