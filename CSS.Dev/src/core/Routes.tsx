import { Routes, Route } from 'react-router-dom';
import { PageNotFound, Dashboard } from '../components/main';
import JustifyContentExamples from '../components/JustifyContentCSS';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/CSS' element={<Dashboard />} />
            <Route path='/CSS/JustifyContentExamples' element={<JustifyContentExamples />} />
            <Route path='/CSS/*' element={<PageNotFound />} />
        </Routes>
    );
};
export default AppRouter;