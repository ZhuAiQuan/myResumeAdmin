// import 'antd/dist/antd.css';
import "./App.less";
import { useRoutes } from "react-router-dom";
// import RouterView from "@/router";
import routes from "@/router/config";
import store from "./store";
import { Provider } from "react-redux";
import RouterAuth from "@/router/premission";

function App(): JSX.Element {
  const Elements = useRoutes(routes);
  return (
    <Provider store={store}>
      <div className="App">
        {/* <RouterView /> */}
        <RouterAuth>{Elements}</RouterAuth>
      </div>
    </Provider>
  );
}

export default App;
