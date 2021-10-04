import HeadBar from './components/header/HeadBar/'
import Search from './components/body/Search/'
import Results from './components/body/Results'
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeadBar />
      <Search />
      <Results />
    </div>
  );
}

export default App;
