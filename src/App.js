import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./homePage/Home";
import Test from "./fifthGradeMath/Test";
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
          path="/test"
          element={<Test />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;