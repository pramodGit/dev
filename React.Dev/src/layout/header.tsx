import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorFallback from '../shared/errorFallback';
import { useSearch } from '../core/context/searchContext';

export default function Header() {
    const title = 'React Development';
    const [navigation, setNavigation] = useState([]);
    const { setSearchTerm } = useSearch();
    const [inputValue, setInputValue] = useState('');
    
    const prepareNav = (data:[]) => {
        setNavigation(data);
    }
    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchTerm(inputValue); // Debounced update
        }, 300);

        return () => clearTimeout(handler); // Cleanup
    }, [inputValue, setSearchTerm]);
    const url:any = 'https://dzs4fietmtf6hgobtp6qchdeoi0nflro.lambda-url.ap-south-1.on.aws/?react=true';
    useEffect(() => {
        (async (url) => {
            try {
                const resp = await fetch(url);
                const response = await resp.json();
                prepareNav(response);
            } catch (error) {
                return <ErrorFallback error={error} resetErrorBoundary={undefined} />
            }
            
        })(url);
    }, [url]);
    return(
        <header>
            <h1><Link to="/React">{title}</Link></h1>
                <nav key="navigation">
                    <a href="http://pramod.click/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                    </a>
                    {navigation.map((a:any) => {
                        if(a.active) {
                            return <a key={a.title} href={a.link} aria-current="page">{a.title}</a>
                        } else {
                            return <a key={a.title} href={a.link}>{a.title}</a>
                        }
                        
                    })}
                    <div className="theme">Theme</div>
                </nav>
            <div className="header-search">
            <input
                className="main-search-input"
                type="search"
                placeholder="Search Here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            </div>
        </header>
    )
}