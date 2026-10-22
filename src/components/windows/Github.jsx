import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";

function GitCard({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt={`${data.title} preview`} />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag" key={tag}>{tag}</p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Live demo</a>}
      </div>
    </div>
  );
}

function Github({ onClose }) {
  return (
    <MacWindow onClose={onClose} title="Projects" width="60vw" height="60vh">
      <div className="cards">
        {githubData.map((project) => (
          <GitCard data={project} key={project.id} />
        ))}
      </div>
    </MacWindow>
  );
}

export default Github;