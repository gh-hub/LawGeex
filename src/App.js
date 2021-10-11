import "./App.css";
import { MoviesSearch } from "./components/MoviesSearch";
import { Title } from "./components/Base/Title";

function App() {
  return (
    <div className="app">
      <Title />
      <MoviesSearch />
    </div>
  );
}

export default App;
