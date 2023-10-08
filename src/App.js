import NavBar from "./components/NavBar";
import Home from "./homePage/Home";
import AdditionSubtraction from "./pages/AdditionSubtraction";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/elmMath"
          element={<Home />}
        />
        <Route
          path="/elmMath/AddSub"
          element={<AdditionSubtraction />}
        />
        <Route
          path="/elmMath/"
          element={""}
        />
      </Routes>
    </Router>
  );
}

export default App;