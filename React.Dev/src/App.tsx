import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './shared/errorFallback.tsx';
import './assets/normalize.css';
import './assets/styles.css';
import Header from './layout/header.tsx';
// import LeftPanel from './layout/leftPanel.tsx';
// import RightPanel from './layout/rightPanel.tsx';
import Footer from './layout/footer.tsx';


import AppRouter from './routes/Routes.tsx';
import { SearchProvider } from './core/context/searchContext.tsx';


const App:React.FC = () => {
    return (
        <React.Fragment>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <SearchProvider>
                <Header />
                <nav className="projects"><div>Projects :: </div> <div>E-Commerce <span className="pipe">|</span> Cricket <span className="pipe">|</span> To-Do <span className="pipe">|</span> AI Music <span className="pipe">|</span> Social Media <span className="pipe">|</span> Weather </div></nav>
                <main>
                    {/* <LeftPanel /> */}
                    <section id="middlePanel" className="middle-panel">
                        
                            <AppRouter />
                    </section>
                    {/* <RightPanel /> */}
                </main>
                <Footer />
                </SearchProvider>
            </ErrorBoundary>
        </React.Fragment>
    )
};
export default App;