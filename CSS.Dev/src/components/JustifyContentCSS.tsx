import React from "react";

const boxStyle: React.CSSProperties = {
  background: "#4CAF50",
  color: "#fff",
  padding: "1rem",
  textAlign: "center",
  borderRadius: "5px",
  minWidth: "60px",
};

const containerStyle = (justify: React.CSSProperties["justifyContent"]): React.CSSProperties => ({
  display: "flex",
  justifyContent: justify,
  gap: "1rem",
  marginBottom: "2rem",
  padding: "1rem",
  border: "2px dashed #ccc",
  background: "#f9f9f9",
});

const justifyOptions: { label: string; value: React.CSSProperties["justifyContent"] }[] = [
  { label: "flex-start → all items left-aligned", value: "flex-start" },
  { label: "flex-end → all items right-aligned", value: "flex-end" },
  { label: "center → items centered in container", value: "center" },
  { label: "space-between → even space between, but not on edges", value: "space-between" },
  { label: "space-around → equal space around each item", value: "space-around" },
  { label: "space-evenly → equal space between all areas, including edges", value: "space-evenly" },
];

const JustifyContentExamples: React.FC = () => {
  return (
    <div style={{ padding: ".4rem" }}>
      <h2>Flexbox: justify-content Examples</h2>

      {justifyOptions.map((opt) => (
        <div key={opt.label}>
          <h4>{opt.label}</h4>
          <div style={containerStyle(opt.value)}>
            <div style={boxStyle}>Box 1</div>
            <div style={boxStyle}>Box 2</div>
            <div style={boxStyle}>Box 3</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JustifyContentExamples;
