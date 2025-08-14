import React from "react";
import styles from "./App.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
function App() {
   useEffect(() => {
      AOS.init({
         duration: 1000, // длительность анимации (в мс)
         once: true, // если true — анимация будет только один раз
      });
   }, []);
   return (
      <Router>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path="/" element={<Home/>} />
               <Route path="/projects" element={<ProjectsPage/>}/>
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
