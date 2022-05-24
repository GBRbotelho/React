import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Container from "./components/Layout/Container";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
