import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/body/header/Header.js";
import Body from "./components/body/body/Body.js";

function App() {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  function eventHandler(selected) {
    const isMatching = selectedMembers.find(
      (member) => member.mobile === selected.mobile
    );
    if (!isMatching) {
      const newSelectedMembers = [...selectedMembers, selected];
      setSelectedMembers(newSelectedMembers);
    }
  }
  return (
    <div>
      <Header></Header>

      <Body
        selectedMembers={selectedMembers}
        eventHandler={eventHandler}
        members={members}
      ></Body>
    </div>
  );
}

export default App;

