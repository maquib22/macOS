import MacWindow from "./MacWindow";

function Resume({ onClose }) {
  return (
    <MacWindow onClose={onClose} title="Resume">
      <div className="resume-window">
        <iframe
          src="/Md_Aaquib_Asrar_Resume.pdf"
          title="Aaquib Asrar resume"
        />
      </div>
    </MacWindow>
  );
}

export default Resume;