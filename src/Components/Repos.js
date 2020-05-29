import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const response = await Axios.get(repos_url);
    const data = response.data;
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup style={{backgroundColor:"#121212", color:"#EAF0F1"}}>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id} style={{backgroundColor:"#121212", color:"#EAF0F1"}}>
          <div >{repo.name}</div>
          <div className="text-secondary">Language: {repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
