// import 'antd/dist/antd.css';
import "./App.less";
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "@/router";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <RouterView />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
