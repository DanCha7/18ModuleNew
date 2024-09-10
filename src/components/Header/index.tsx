import Logo from "../Logo/logo";
import Nav from "../Navigation";
import  "./style.css"

const Header = () =>{
    return(
        <header className="header__content">
            <Logo></Logo>
            <Nav></Nav>
        </header>
    );
};

export default Header;