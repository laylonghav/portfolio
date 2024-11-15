
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import RouteNotfound from "./page/error-Page/404";
import SkillPage from "./page/skill/SkillPage";
import ProjectPage from "./page/project/ProjectPage";
import ContactPage from "./page/contact/ContactPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<RouteNotfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
