import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home.tsx";
import About from "../pages/about.tsx";
import PortfolioItemPage from "../components/portfolioItemPage.js";
import NotFoundPage from "../components/NotFoundPage.js";


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
            <Route path="*" Component={NotFoundPage} />
        </Routes>
    </BrowserRouter>
)
export default AppRouter;