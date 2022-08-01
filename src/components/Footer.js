import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div>Developed by Jiaqi Xu ⓒ {currentYear}</div>
            <a href='https://www.freepik.com' target="_blank" rel="noreferrer">illustration vector created by www.freepik.com</a>
        </footer>
    )
}

export default Footer;