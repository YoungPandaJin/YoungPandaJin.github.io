import React from "react";

const LoaderStyle = ({ local = false }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: local ? "100%" : "100vw",
  height: local ? "100%" : "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "890",
});

export default function Loader() {
  const loaderStyle = LoaderStyle({ local: false });

  return (
    <div className="loader" style={loaderStyle as React.CSSProperties}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
