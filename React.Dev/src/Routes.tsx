import { Routes, Route } from 'react-router-dom';
import { PageNotFound, ToDo, Dashboard } from './features/features';
import QuestinosAnswers from './features/qa';
import Projects from './features/projects';

const AppRouter = () => {

    // const PageNotFound = () => {
    //     return(
    //         <p>404 | Page Not Found</p>
    //     );
    // };
    // const ToDo = () => {
    //     return(
    //         <p>To-Do List</p>
    //     )
    // };
    // const ToDo1 = () => {
    //     return(
    //         <p>To-Do List 1</p>
    //     )
    // };
    // const Dashboard = () => {
    //     return(
    //         <p>Dashboard</p>
    //     )
    // };
    // const router = createBrowserRouter([
    //     {
    //         path: '/todo',
    //         element: <ToDo />
    //     },
    //     {
    //         path: '/todo1',
    //         element: <ToDo1 />
    //     },
    //     {
    //         path: '*',
    //         element: <PageNotFound />
    //     }
    // ]);
    // return <RouterProvider router={router} />;
    return (
            <Routes>
                <Route path='/React' element={<QuestinosAnswers />} />
                <Route path='/React/todo' element={<ToDo />} />
                <Route path='/React/dashboard' element={<Dashboard />} />
                <Route path='/React/projects' element={<Projects />} />
                <Route path='/React/*' element={<PageNotFound />} />
            </Routes>
    );
};
export default AppRouter;