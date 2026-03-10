import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootLine {
  text: string;
  color?: string;
  delay: number;
}

const BOOT_LINES: BootLine[] = [
  { text: "BIOS v3.14.1 — POST Check...", color: "text-terminal-dim", delay: 0 },
  { text: "[  OK  ] CPU: Creative Problem Solver @ 3.5GHz", color: "text-foreground", delay: 300 },
  { text: "[  OK  ] RAM: 16GB of Caffeine-Powered Memory", color: "text-foreground", delay: 500 },
  { text: "[  OK  ] GPU: Pixel-Perfect Rendering Engine", color: "text-foreground", delay: 700 },
  { text: "[  OK  ] Loading personality module...", color: "text-foreground", delay: 900 },
  { text: "[  OK  ] Mounting /dev/portfolio", color: "text-foreground", delay: 1100 },
  { text: "", delay: 1300 },
  { text: "System ready. Welcome.", color: "text-terminal-amber", delay: 1500 },
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, line.delay);
    });
  }, [onComplete]);

  return (
    <motion.div
      className="font-mono text-xs sm:text-sm leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <AnimatePresence>
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className={line.color || "text-foreground"}
          >
            {line.text === "" ? <br /> : line.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
