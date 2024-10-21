
import { Link } from "react-router-dom";

function Header(props) {
    const page_icon = props.dados[0];
    const page_dir = props.dados[1];
    const page_text = props.dados[2];
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <a className="logo brand-logo left">42 | Quiz</a>
                <a data-target="mobile-links" className="right sidenav-trigger">
                    <i className="material-icons" style={{ cursor: 'pointer' }}>menu</i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={`/${page_dir}`}><span>{page_text}</span><i className="material-icons right">{page_icon}</i></Link></li>
                </ul>
                <ul className="sidenav" id="mobile-links">
                    <li><a><span>Profile</span><i className="material-icons right">person</i></a></li>
                    <li><a><span>To play</span><i className="material-icons right">games</i></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;