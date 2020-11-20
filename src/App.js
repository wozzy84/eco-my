import "./App.scss";
import { Router } from "react-router-dom";
import Content from "./components/content/Content";
import history from "./browserHistory";

function App() {
  return (
    <Router history={history}>
      <Content />
    </Router>
  );
}

export default App;
