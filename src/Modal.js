// Modal.js
import React from "react";

const modalStyle = {
    position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
    background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 1000
};

const boxStyle = {
    background: "#fff", padding: "2rem", borderRadius: "12px", minWidth: "320px", boxShadow: "0 2px 24px rgba(0,0,0,0.14)"
};

function Modal({ children, onClose }) {
    return (
        <div style={modalStyle} onClick={onClose}>
            <div style={boxStyle} onClick={e => e.stopPropagation()}>
                <button style={{ float: "right", fontSize: "1.1rem" }} onClick={onClose}>✖</button>
                <div style={{ clear: "both" }}/>
                {children}
            </div>
        </div>
    );
}

export default Modal;