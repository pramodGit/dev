import { Link } from 'react-router-dom';

export default function LeftPanel() {
    return(
        <>
            <aside id="leftPanel" className="left-panel">
                <h3>Flexbox</h3>
                <nav>
                    <ul>
                        <li><Link to="/CSS/JustifyContentExamples">Justify-Content</Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}