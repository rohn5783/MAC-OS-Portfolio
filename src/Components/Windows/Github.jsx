import React from "react";
import MacWindow from "./MacWindow";
import githubdata from "../../Assets/github.json";
import "./Github.scss";

const Gitcard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => {
          return <p className="tag">{tag}</p>;
        })}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repo</a>
        {data.demoLink && <a href={data.demoLink}>Demo</a>}
      </div>
    </div>
  );
};

const Github = ({ onClose }) => {
  return (
    <MacWindow title="GitHub Projects" onClose={onClose}>
      <div className="cards">
        {githubdata.map((project) => {
          return <Gitcard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
