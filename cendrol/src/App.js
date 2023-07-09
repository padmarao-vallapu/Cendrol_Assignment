import "./App.css";

import BlogsList from "./Components/BlogsList";
function App() {
  return (
    <div className="App-header ">
      <h1 className="main-heading ">Chuk Norries</h1>
      <ul className="App ">
        <BlogsList />
      </ul>
    </div>
  );
}

export default App;
