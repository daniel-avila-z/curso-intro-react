import React from "react";
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="bio-container">
                    <p className="footer-text">Code💖: <a rel="noreferrer" target="_blank" href="https://github.com/Daniel-AvilaXD">Daniel Avila</a>
                    </p>
                   
                </div>
                <p className="footer-text">Version 00.01</p>
            </div>
        </footer>
    );
};

export { Footer };