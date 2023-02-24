import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./Component/Api";
import ItemPage from "./Component/ItemPage";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={
              <div className="App">
                <Api />
              </div>
            }
          />
          <Route exact path=":id" element={<ItemPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
