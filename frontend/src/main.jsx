import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop.jsx";
import TagManager from "react-gtm-module";
TagManager.initialize({
  gtmId: "GTM-PHMC7PTJ",
  dataLayerName: "PageDataLayer",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </>
);
