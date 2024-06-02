import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Recipes from "../components/Recipes";
import Details from "../components/Details";
import Create from "../components/Create";
import About from "../components/About";
import Contact from "../components/Contact";
import Update from "../components/Update";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/create-recipe" element={<Create />} />
            <Route path="/update-recipe/:id" element={<Update />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default MainRoutes;
