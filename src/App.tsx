// import 'antd/dist/antd.css';
import "./App.less";
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "@/router";
import store from "./store";
import { Provider } from "react-redux";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <RouterView />
      </div>
    </Router>
  );
}

export default App;
