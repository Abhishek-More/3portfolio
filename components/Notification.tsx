import Image from "next/image";
import { motion } from "framer-motion";

type Notification = {
  title: string;
  desc: string;
  time: string;
  img: string;
};

const NOTIFICATIONS: Notification[] = [
  {
    title: "dripos ☕️",
    desc: "building software for coffee shops!",
    time: "now",
    img: "https://media.licdn.com/dms/image/D4D0BAQE9EajxBRtbzA/company-logo_200_200/0/1718293021650/dripos_logo?e=1728518400&v=beta&t=mdTZzejTx4eD3hhsskyn4ni544bFOYwfUYsHpGzWf8A",
  },

  {
    title: "highlight.io 🔭",
    desc: "frontend for the best fullstack monitoring tool.",
    time: "2022-2024",
    img: "https://media.licdn.com/dms/image/C4E0BAQHRqu3Ak49ncA/company-logo_200_200/0/1658878447103/highlightrun_logo?e=1728518400&v=beta&t=0SJpJ4TaatS31R8y_FZgHKNLiL_WSm7ZJVW1Wr5OwGk",
  },
  {
    title: "amazon 🍌",
    desc: "interning at aws.",
    time: "2022",
    img: "https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_200_200/0/1630640869849/amazon_logo?e=1728518400&v=beta&t=2tSR-0sjAa6rznsyghKohUuktdFKlLhvyZliM6ttSD8",
  },
  {
    title: "texas a&m university",
    desc: "computer engineering 🤖 + business 🖍️",
    time: "2019-2024",
    img: "https://media.licdn.com/dms/image/C510BAQH0AwblDTN6-g/company-logo_200_200/0/1631353027028?e=1728518400&v=beta&t=PBonnEZwwsBBcELAykwM4J9JABpTxrPNg8p81RP-y4c",
  },
];

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const dropUpVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
    },
  },
};

export const Notifications = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="absolute top-[72px] left-0 right-0 flex flex-col gap-2 items-center"
    >
      {NOTIFICATIONS.map((notification, index) => (
        <NotificationBox
          key={index}
          title={notification.title}
          desc={notification.desc}
          time={notification.time}
          img={notification.img}
        />
      ))}
    </motion.div>
  );
};

export const NotificationBox = ({
  img,
  title,
  desc,
  time,
}: {
  img: string;
  title: string;
  desc?: string;
  time?: string;
}) => {
  return (
    <motion.div
      variants={dropUpVariants}
      className="flex items-center p-2 bg-white w-[300px] rounded-2xl backdrop-blur-md bg-opacity-50 overflow-hidden"
    >
      <div className="flex flex-col justify-center h-[44px] w-[44px]">
        <Image
          src={img}
          alt=""
          width={256}
          height={256}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col w-full ml-2">
        <div className="flex justify-between items-center">
          <p className="montreal font-medium leading-0 text-[14px]">{title}</p>
          <p className="montreal font-light text-[12px] opacity-50">{time}</p>
        </div>
        <p className="montreal font-light leading-0 text-[14px] text-pretty">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
