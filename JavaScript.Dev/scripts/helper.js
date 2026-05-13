export const loadMiddlePanelContent = async (viewName) => {
    const response = await fetch("./views/" + viewName);
    document.querySelector("#middlePanel").innerHTML = await response.text();
};
export const loadRightPanelContent = async (viewName) => {
    const response = await fetch("./views/" + viewName);
    document.querySelector("#rightPanel").innerHTML = await response.text();
};