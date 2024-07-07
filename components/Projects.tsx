import Image from "next/image";
import { motion } from "framer-motion";

export const Notifications = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="absolute top-[72px] left-0 right-0 flex flex-col gap-2 items-center"
    >
      <div className="w-[300px] h-[300px] bg-[#ececec]"></div>
    </motion.div>
  );
};
