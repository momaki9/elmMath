import Home from "./homePage/Home";
import Test from "./fifthGradeMath/Test";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route 
      path="/"
      element={<Home />}
       />
      <Route 
      path="/test"
      element={<Test />}
      />
    </Routes>
    </Router>
  );
}

export default App;