import { Rnd } from "react-rnd";

function MacWindow({
  children,
  width = "40vw",
  height = "40vh",
  title = "aaquib - zsh",
  onClose,
}) {
  return (
    <Rnd
      default={{
        width,
        height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <button
              className="dot red"
              type="button"
              aria-label="Close window"
              title="Close window"
              onClick={onClose}
            />
            <span className="dot yellow" aria-hidden="true" />
            <span className="dot green" aria-hidden="true" />
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
}

export default MacWindow;
