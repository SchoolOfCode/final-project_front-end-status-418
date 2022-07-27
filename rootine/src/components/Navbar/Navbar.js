import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-div-left">
                    <img 
                        className="header-logo" 
                        src="" 
                        alt="Rootine logo" />
                    <img 
                        className="header-name" 
                        src="" 
                        alt="Rootine" />
             </div>
                <div className="header-div-right">
                    <a 
                        className ="blogs"
                        href="#">Blogs</a>
                    <a 
                        className="about"
                        href="#">About</a>
                    <img 
                        className="hamburger-menu" 
                        src="" 
                        alt="hamburger-menu" />
                </div>    
                
            </div>
        </header>
    );
}
