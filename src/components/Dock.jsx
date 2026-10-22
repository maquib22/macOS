

const dockItems = [
  { key: "github", label: "GitHub", icon: "/doc-icons/github.svg", className: "github" },
  { key: "note", label: "Notes", icon: "/doc-icons/note.svg", className: "note" },
  { key: "resume", label: "Resume", icon: "/doc-icons/pdf.svg", className: "pdf" },
  {
    label: "Google Calendar",
    icon: "/doc-icons/calender.svg",
    className: "calender",
    href: "https://calendar.google.com/calendar/u/0/r",
  },
  { key: "spotify", label: "Spotify", icon: "/doc-icons/spotify.svg", className: "spotify" },
  {
    label: "Email",
    icon: "/doc-icons/mail.svg",
    className: "mail",
    href: "mailto:maquib22@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "/doc-icons/link.svg",
    className: "link",
    href: "https://www.linkedin.com/in/maquib22/",
  },
  { key: "cli", label: "Terminal", icon: "/doc-icons/cli.svg", className: "cli" },
];

function Dock({ windowState, onToggleWindow }) {
  return (
    <footer className="dock" aria-label="Applications">
      {dockItems.map((item) => {
        const icon = <img src={item.icon} alt="" aria-hidden="true" />;

        if (item.href) {
          return (
            <a
              key={item.label}
              className={`icon ${item.className}`}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("https:") ? "_blank" : undefined}
              rel={item.href.startsWith("https:") ? "noreferrer" : undefined}
            >
              {icon}
            </a>
          );
        }

        return (
          <button
            key={item.key}
            className={`icon ${item.className}`}
            type="button"
            aria-label={item.label}
            aria-pressed={windowState[item.key]}
            onClick={() => onToggleWindow(item.key)}
          >
            {icon}
          </button>
        );
      })}
    </footer>
  );
}

export default Dock