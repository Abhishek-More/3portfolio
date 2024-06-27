import ReactCurvedText from "react-curved-text";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event: any) => {
    const { clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;

export const NowPlayingText = ({ visible }: { visible?: boolean }) => {
  const { clientX, clientY } = useMousePosition();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={{
            position: "absolute",
            left: clientX,
            top: clientY,
            transform: "translate(-50%, -50%) rotate(-90deg)",
          }}
          initial={{
            opacity: 0,
            scale: 0.1,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            translateX: "-50%",
            translateY: "-50%",
          }}
          exit={{
            opacity: 0,
            scale: 0.1,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={53}
            ry={53}
            startOffset={0}
            reversed={true}
            text={"NOW PLAYING - NOW PLAYING - NOW PLAYING - "}
            textProps={{ style: { fontSize: 14, opacity: 0.4 } }}
            svgProps={{ className: "animate-spin-slow" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
