import MacWindow from "./MacWindow";
import terminalModule from "react-console-emulator";

const Terminal = terminalModule.default ?? terminalModule;

const resumePath = "/Md_Aaquib_Asrar_Resume.pdf";

const commands = {
  about: {
    description: "About Aaquib Asrar.",
    usage: "about",
    fn: () => "Aaquib Asrar | Frontend Developer specializing in React, with 5+ years of experience.",
  },
  skills: {
    description: "Show core skills.",
    usage: "skills",
    fn: () => "JavaScript, TypeScript, React, Next.js, Redux Toolkit, HTML, CSS/SCSS, REST APIs, accessibility, testing, and performance optimization.",
  },
  experience: {
    description: "Show professional experience.",
    usage: "experience",
    fn: () => [
      "Software Engineer | Eko Bharat Ventures | Feb 2026 - Aug 2026",
      "Web Developer | Accenture (Di-Hybrid) | Jul 2024 - Feb 2026",
      "UI Developer | Softobiz Technologies | Mar 2021 - Dec 2023",
    ].join("\n"),
  },
  projects: {
    description: "List selected projects.",
    usage: "projects",
    fn: () => "EkoGlobal, Eko Connect, Kochava Search Ads Maven, e-Agent HealthCare, ClientPoint, Cashel Family Office, and Hagfen.",
  },
  contact: {
    description: "Show contact details.",
    usage: "contact",
    fn: () => "Email: maquib22@gmail.com\nPhone: +91 7903171042",
  },
  resume: {
    description: "Open the resume PDF.",
    usage: "resume",
    fn: () => {
      window.open(resumePath, "_blank", "noopener,noreferrer")
      return "Opening Aaquib Asrar's resume..."
    },
  },
  echo: {
    description: "Print the text you provide.",
    usage: "echo <text>",
    fn: (...args) => args.join(" "),
  },
};

const welcomeMessage = [
  "Welcome to Aaquib Asrar's portfolio terminal.",
  "Available commands: about, skills, experience, projects, contact, resume, echo, help.",
  "Type help for command details.",
].join("\n");

function Cli({ onClose }) {
  return (
    <MacWindow onClose={onClose} title="Terminal">
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="aaquib:~$"
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli;