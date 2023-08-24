import "./App.css";
import Header from "./features/components/Header";
import { useState } from "react";
import RedditList from "./features/components/RedditList";

function App() {
  const [search, setSearch] = useState(undefined);

  return (
    <div className="bg-black">
      <Header search={search} setSearch={setSearch} />
      {search && <RedditList search={search} />}
    </div>
  );
}

export default App;
