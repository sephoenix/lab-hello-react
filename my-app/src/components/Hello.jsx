import IhLogo from "./Ihlogo";
import MenuLogo from "./Menulogo";

function Hello() {
    return(
        <div className="hello">
            <div className="nav">
                <IhLogo />
                <MenuLogo />
            </div>
            <div className="welcomeMessage">
                <h1>Say hello to <br /> ReactJS</h1>
                <p className="pHello">You will learn how to use <br /> the most popular frontend library <br />and become a super Ninja developer.</p>
                 <div>
                 <button>Awesome!</button>
                </div>
            </div>
        </div>
    )
}

export default Hello;