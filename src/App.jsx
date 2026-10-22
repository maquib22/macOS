import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";

const initialWindowState = {
  github: false,
  note: false,
  resume: false,
  spotify: false,
  cli: false,
};

function App() {
  const [windowState, setWindowState] = useState(initialWindowState);

  const toggleWindow = (name) => {
    setWindowState((current) => ({ ...current, [name]: !current[name] }));
  };
  const closeWindow = (name) => {
    setWindowState((current) => ({ ...current, [name]: false }));
  };

  return (
    <main>
      <Nav />
      <Dock windowState={windowState} onToggleWindow={toggleWindow} />
      {windowState.github && <Github onClose={() => closeWindow("github")} />}
      {windowState.note && <Note onClose={() => closeWindow("note")} />}
      {windowState.resume && <Resume onClose={() => closeWindow("resume")} />}
      {windowState.spotify && <Spotify onClose={() => closeWindow("spotify")} />}
      {windowState.cli && <Cli onClose={() => closeWindow("cli")} />}
    </main>
  );
}

export default App;
