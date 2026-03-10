import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE, SKILLS, ABOUT_TEXT, CONTACT_INFO, HELP_OUTPUT } from "@/constants/terminal";

interface TerminalLine {
  type: "input" | "output";
  content: string | React.ReactNode;
}

export interface TerminalPromptHandle {
  runCommand: (cmd: string) => void;
}

const TerminalPrompt = forwardRef<TerminalPromptHandle>(function TerminalPrompt(_, ref) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = cmdIndex < cmdHistory.length - 1 ? cmdIndex + 1 : cmdIndex;
        setCmdIndex(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex > 0) {
        const newIdx = cmdIndex - 1;
        setCmdIndex(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      } else {
        setCmdIndex(-1);
        setInput("");
      }
    }
  };

  const processCommand = (cmd: string): React.ReactNode => {
    switch (cmd) {
      case "help":
        return <HelpTable />;
      case "about":
        return <AboutOutput />;
      case "experience":
        return <ExperienceOutput />;
      case "skills":
        return <SkillsOutput />;
      case "contact":
        return <ContactOutput />;
      case "education":
        return <EducationOutput />;
      case "hobbies":
        return <HobbiesOutput />;
      default:
        return (
          <div className="text-terminal-red">
            Command not found: '{cmd}'. Type <span className="text-terminal-cyan">'help'</span> for available commands.
          </div>
        );
    }
  };

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    if (trimmed === "clear") {
      setHistory([]);
      setCmdIndex(-1);
      return;
    }
    const output = processCommand(trimmed);
    setHistory((prev) => [
      ...prev,
      { type: "input", content: trimmed },
      { type: "output", content: output },
    ]);
    setCmdHistory((prev) => [...prev, trimmed]);
    setCmdIndex(-1);
  };

  useImperativeHandle(ref, () => ({ runCommand }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-h-96 overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="mb-1"
        >
          {line.type === "input" ? (
            <PromptLine text={line.content as string} />
          ) : (
            <div className="pl-0 sm:pl-2 my-2">{line.content}</div>
          )}
        </motion.div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-terminal-cyan shrink-0">bokeom</span>
        <span className="text-terminal-dim shrink-0">@</span>
        <span className="text-terminal-amber shrink-0">portfolio</span>
        <span className="text-terminal-dim shrink-0">:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-foreground caret-primary font-mono text-sm ml-1 min-w-0"
          spellCheck={false}
          autoComplete="off"
          placeholder={history.length === 0 ? 'type "help" to get started' : ""}
        />
      </form>
    </div>
  );
});

export default TerminalPrompt;

function PromptLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-terminal-cyan">bokeom</span>
      <span className="text-terminal-dim">@</span>
      <span className="text-terminal-amber">portfolio</span>
      <span className="text-terminal-dim">:~$</span>
      <span className="text-foreground ml-1">{text}</span>
    </div>
  );
}

function HelpTable() {
  return (
    <div>
      <div className="text-terminal-amber mb-2 text-xs uppercase tracking-widest">
        Available Commands
      </div>
      <div className="grid gap-1">
        {HELP_OUTPUT.map((item) => (
          <div key={item.cmd} className="flex gap-4 text-sm">
            <span className="text-terminal-cyan w-24 shrink-0">{item.cmd}</span>
            <span className="text-terminal-dim">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutOutput() {
  return (
    <div>
      <div className="text-terminal-amber mb-2 text-xs uppercase tracking-widest">About Me</div>
      <pre className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">{ABOUT_TEXT}</pre>
      <div className="mt-3 text-xs text-terminal-dim">
        Most skilled in: <span className="text-terminal-cyan">AWS</span> and <span className="text-terminal-cyan">DevOps Automation</span>
      </div>
    </div>
  );
}

function ExperienceOutput() {
  return (
    <div className="space-y-4">
      <div className="text-terminal-amber mb-1 text-xs uppercase tracking-widest">Experience</div>
      {[...EXPERIENCE].reverse().map((exp, i) => (
        <div key={i} className="border-l-2 border-border pl-3">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-terminal-cyan font-semibold text-sm">{exp.company}</span>
            <span className="text-terminal-dim text-xs">·</span>
            <span className="text-foreground text-sm">{exp.role}</span>
          </div>
          <div className="text-terminal-dim text-xs">{exp.period}</div>
          <div className="text-muted-foreground text-xs mt-0.5">{exp.desc}</div>
          <ul className="mt-1 space-y-0.5">
            {exp.highlights.map((h, j) => (
              <li key={j} className="text-xs text-foreground/80">
                <span className="text-terminal-dim mr-1">▸</span>{h}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SkillsOutput() {
  return (
    <div className="space-y-3">
      <div className="text-terminal-amber mb-1 text-xs uppercase tracking-widest">Skills</div>
      {Object.entries(SKILLS).map(([category, techs]) => (
        <div key={category}>
          <span className="text-terminal-cyan text-sm font-semibold">{category}</span>
          <div className="text-xs text-foreground/80 mt-0.5 pl-2">{techs}</div>
        </div>
      ))}
    </div>
  );
}

function ContactOutput() {
  return (
    <div>
      <div className="text-terminal-amber mb-2 text-xs uppercase tracking-widest">Contact</div>
      <div className="grid gap-1">
        {CONTACT_INFO.map((c) => (
          <div key={c.label} className="flex gap-4 text-sm">
            <span className="text-terminal-cyan w-20 shrink-0">{c.label}</span>
            <span className="text-foreground/90">{c.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationOutput() {
  return (
    <div>
      <div className="text-terminal-amber mb-2 text-xs uppercase tracking-widest">Education</div>
      <div className="text-terminal-cyan text-sm font-semibold">Hankyong National University</div>
      <div className="text-foreground/90 text-sm">B.E. in Information Control Engineering</div>
      <div className="text-terminal-dim text-xs">2007 - 2018</div>
    </div>
  );
}

function HobbiesOutput() {
  return (
    <div>
      <div className="text-terminal-amber mb-2 text-xs uppercase tracking-widest">Hobbies</div>
      <div className="flex flex-wrap gap-3 text-sm">
        {["⚽ Soccer", "🎬 Watching movies", "🏓 Ping-pong", "🎾 Tennis"].map((h) => (
          <span key={h} className="text-foreground/80 bg-secondary/50 px-2 py-0.5 rounded text-xs">{h}</span>
        ))}
      </div>
    </div>
  );
}
