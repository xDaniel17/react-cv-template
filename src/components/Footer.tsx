import "../styles/Footer.css";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer" aria-label="Footer">
            <p>&copy; {currentYear} Developed by Daniel Herrera</p>
        </footer>
    );
};

export default Footer;