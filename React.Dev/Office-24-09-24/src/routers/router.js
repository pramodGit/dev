import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home.tsx";
import About from "../pages/about.tsx";
import PortfolioItemPage from "../components/portfolioItemPage.js";
import ExpenseDashboardPage from '../redux/components/ExpenseDashboardPage.js';
import AddExpensePage from '../redux/components/AddExpensePage';
import EditExpensePage from '../redux/components/EditExpensePage';
import HelpPage from '../redux/components/HelpPage';
import NotFoundPage from "../components/NotFoundPage.js";


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/about" element={<About />} />
            <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
            <Route path="/dashboard" element={<ExpenseDashboardPage />}  />
            <Route path="/create" element={<AddExpensePage />} />
            <Route path="/edit/:id" element={<EditExpensePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" Component={NotFoundPage} />
        </Routes>
    </BrowserRouter>
)
export default AppRouter;