const RightPanelJustifyContentExamples = () => {
    return(
        <aside id="rightPanel" className="right-panel">
            <h4>justify-content: space-around:</h4>
            <ul>
                <li>space-around distributes the items with equal space around them, meaning:</li>
                <li>The space between items is twice as large as the space on the outer edges (start and end).</li>
                <li>That's because each item gets half the space on the left and half on the right, so the spaces between two items combine to be a full unit.</li>
                <li>As a result, the outer margins (left of first item and right of last item) are half the size of the space between items.</li>
            </ul>
        </aside>
    )
}
export default RightPanelJustifyContentExamples;