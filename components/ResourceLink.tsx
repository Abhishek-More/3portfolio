export const ResourceLink = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer text-white opacity-60 transition-opacity hover:opacity-100"
    >
      {text}
    </a>
  );
};
