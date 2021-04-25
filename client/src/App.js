import "./style/App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListPage";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/add/:collectionType">
        <AddPage />
      </Route>
      <Route exact path="/list/:collectionType">
        <ListPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
