import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredrobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f2">Robofriends</h1>

      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredrobots} />
      </Scroll>
    </div>
  );
}
export default App;
