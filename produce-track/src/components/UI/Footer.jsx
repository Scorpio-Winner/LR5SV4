import React from "react";

import classes from "../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a
                className={classes.footerLink}
                href="https://github.com/Scorpio-Winner"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
            <span className={classes.footerText}>&copy; 2023</span>
        </footer>
    );
};

export default Footer;