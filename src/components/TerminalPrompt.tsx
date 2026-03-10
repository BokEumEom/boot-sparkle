import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const HELP_OUTPUT = [
  { cmd: "about", desc: "Who am I and what I do" },
  { cmd: "experience", desc: "Work history & roles" },
  { cmd: "projects", desc: "Featured builds & side projects" },
  { cmd: "skills", desc: "Tech stack & proficiencies" },
  { cmd: "contact", desc: "Get in touch" },
  { cmd: "download-cv", desc: "Download my résumé as PDF" },
  { cmd: "clear", desc: "Clear terminal" },
];

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

export default function TerminalPrompt() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [showHelp, setShowHelp] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { type: "input", content: trimmed },
    ];

    if (trimmed === "help") {
      setShowHelp(true);
      newHistory.push({
        type: "output",
        content: "HELP_TABLE",
      });
    } else if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      setShowHelp(false);
      return;
    } else {
      newHistory.push({
        type: "output",
        content: `Section "${trimmed}" coming soon. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div ref={containerRef} className="w-full max-h-48 overflow-y-auto">
      {history.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="mb-1"
        >
          {line.type === "input" ? (
            <div className="flex items-center gap-2">
              <span className="text-terminal-cyan">visitor</span>
              <span className="text-terminal-dim">@</span>
              <span className="text-terminal-amber">portfolio</span>
              <span className="text-terminal-dim">:~$</span>
              <span className="text-foreground ml-1">{line.content}</span>
            </div>
          ) : line.content === "HELP_TABLE" ? (
            <HelpTable />
          ) : (
            <div className="text-muted-foreground pl-2">{line.content}</div>
          )}
        </motion.div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-terminal-cyan">visitor</span>
        <span className="text-terminal-dim">@</span>
        <span className="text-terminal-amber">portfolio</span>
        <span className="text-terminal-dim">:~$</span>
        <div className="flex-1 relative ml-1">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-foreground w-full caret-primary font-mono text-sm"
            spellCheck={false}
            autoComplete="off"
            placeholder={history.length === 0 ? 'type "help" to get started' : ""}
          />
        </div>
      </form>
    </div>
  );
}

function HelpTable() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-2 pl-2"
    >
      <div className="text-terminal-amber mb-2 text-xs uppercase tracking-widest">
        Available Commands
      </div>
      <div className="grid gap-1">
        {HELP_OUTPUT.map((item) => (
          <div key={item.cmd} className="flex gap-4 text-sm">
            <span className="text-terminal-cyan w-28 shrink-0">{item.cmd}</span>
            <span className="text-terminal-dim">{item.desc}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
