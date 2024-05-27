
import '../styles/footer.scss'

const Footer: React.FC<{}> = () => {
return (
<footer className="footer">
    <ul className="nav">
        <li className="nav__item">
            <a href="#" className="nav__link">find your instructor</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">request a session</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">download workout planner</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">contact us</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">submit your ideas</a>
        </li>
        <li className="nav__item">
            <a href="#" className="nav__link">work with us</a>
        </li>
    </ul>
    <p className="copyright">
        &copy; 2024 FitMe. All rights reserved.
    </p>
</footer>
)
}

export default Footer;