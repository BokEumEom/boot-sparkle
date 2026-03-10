import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import TerminalPrompt, { type TerminalPromptHandle } from "@/components/TerminalPrompt";
import { Download, Briefcase, Mail } from "lucide-react";

export default function HeroTerminal() {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);
  const terminalRef = useRef<TerminalPromptHandle>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Scanline overlay */}
      <div className="scanline fixed inset-0 z-10" />

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div
        className="relative z-20 w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>
        
        {/* Terminal window */}
        <div className="rounded-lg border border-border rounded-lg backdrop-blur-sm shadow-2xl shadow-primary/5 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-terminal-red/80" />
              <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
              <div className="w-3 h-3 rounded-full bg-foreground/60" />
            </div>
            <span className="text-xs text-terminal-dim ml-2 tracking-wide">
              bokeom@portfolio — bash — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 sm:p-8 min-h-[560px] flex flex-col">
            <AnimatePresence mode="wait">
              {!booted ?
              <motion.div key="boot" exit={{ opacity: 0 }}>
                  <BootSequence onComplete={handleBootComplete} />
                </motion.div> :

              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-5 flex-1">
                
                  {/* ASCII header */}
                  <motion.pre
                  className="text-foreground text-glow text-[10px] sm:text-sm leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}>
                  
{`
 ╔═══════════════════════════════════════════════════════════╗
 ║   BOKEOM EOM  —  DevOps / Cloud Infrastructure Engineer  ║
 ╚═══════════════════════════════════════════════════════════╝`}
                  </motion.pre>

                  {/* Tagline */}
                  <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-2">
                  
                    <p className="text-base sm:text-lg text-muted-foreground">
                      <span className="text-terminal-cyan">→</span>{" "}
                      15+ years building production-grade AWS infrastructure, from IaC to microservices.
                    </p>
                    <p className="text-xs text-terminal-dim">
                      AWS · Terraform · Docker · ECS Fargate · GitLab CI/CD · Observability
                    </p>
                  </motion.div>

                  <div className="border-t border-border/50" />

                  {/* Terminal prompt */}
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}>
                  
                    <TerminalPrompt ref={terminalRef} />
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                  className="flex flex-wrap gap-3 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}>
                  
                    <TerminalButton icon={<Briefcase size={14} />} label="View Experience" onClick={() => terminalRef.current?.runCommand("experience")} />
                    <TerminalButton icon={<Mail size={14} />} label="View Contact" onClick={() => terminalRef.current?.runCommand("contact")} />
                    <TerminalButton icon={<Download size={14} />} label="Download CV" variant="accent" onClick={() => window.open("https://BokEumEom.github.io", "_blank")} />
                  </motion.div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>

        {/* Footer hint */}
        {booted &&
        <motion.p
          className="text-center text-xs text-terminal-dim mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}>
          
            Press <kbd className="px-1.5 py-0.5 rounded border border-border bg-secondary text-foreground text-[10px]">↑</kbd> /{" "}
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-secondary text-foreground text-[10px]">↓</kbd> to navigate history
          </motion.p>
        }
      </motion.div>
    </section>);

}

function TerminalButton({
  icon,
  label,
  variant = "default",
  onClick




}: {icon: React.ReactNode;label: string;variant?: "default" | "accent";onClick?: () => void;}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded text-sm sm:text-base font-mono
        border transition-colors duration-200
        ${
      variant === "accent" ?
      "border-accent bg-accent/10 text-accent hover:bg-accent/20" :
      "border-border bg-secondary/50 text-foreground hover:bg-secondary"}
      `
      }>
      
      {icon}
      {label}
    </motion.button>);

}