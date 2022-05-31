import About from "./components/About";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { RecipeContextProvider } from "./components/RecipeContext";
// import Home from './components/tailwind-practice/Home';

function App() {
  return (
    <Router>
      <div className="text-gray-600 font-body bg-gray-100 grid md:grid-cols-3">
        <Nav />
        <RecipeContextProvider>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RecipeContextProvider>
      </div>
    </Router>
  );
}

export default App;
