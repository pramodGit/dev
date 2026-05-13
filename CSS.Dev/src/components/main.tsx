
export const PageNotFound = () => {
    return(
        <p>404 | Page Not Found</p>
    );
};

export const Dashboard = () => {
    return(
        <>
            <div className="inline-heading"><h1>Cascading Style Sheets</h1></div>
            <p>CSS is the language used to describe the presentation and layout of HTML elements on a web page.</p>
            <h2>Key Features of CSS:</h2>
            <ul>
                <li>Cascading: Styles are applied in order of importance — inline &gt; internal &gt; external.</li>
                <li>Selectors: Target specific HTML elements (.class, #id, div, input[type="text"], etc.)</li>
                <li>Responsiveness: Media queries help adjust layout for different devices (mobile, tablet, desktop).</li>
                <li>Separation of Concerns: Keeps content (HTML) separate from style (CSS).</li>
            </ul>
        </>
    )
};