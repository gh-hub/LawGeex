import "./App.css";
import { MoviesSearch } from "./components/MoviesSearch";
import { Title } from "./components/Base/Title";

const TITLE = "LawGeex Home Test";

function App() {
  return (
    <div className="app">
      <Title title={TITLE} />
      <MoviesSearch />
    </div>
  );
}

export default App;
