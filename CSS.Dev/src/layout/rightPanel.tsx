import React from "react";
import { useLocation } from "react-router-dom";
import RightPanelJustifyContentExamples from "../components/RightPanelJustifyContentExamples";

const RightPanel: React.FC = () => {
  const { pathname } = useLocation();

  if (pathname.includes("/JustifyContentExamples")) return <RightPanelJustifyContentExamples />;
  return (
    <aside id="rightPanel" className="right-panel">
        <h4>Key Points...</h4>
    </aside>
  )
};

export default RightPanel;