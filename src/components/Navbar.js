import logo from "../images/fylelogo.png";

export default function Navbar({name}){
    return (
        <ul className="navbar">
            <div className="container">
                <a href="/">
                    <img src={logo} width="90px"/>
                </a>
            <div className="right">
            <select id="category" onChange={(e) => window.location.href=e.target.value} value={name}>
                <option value="" hidden>Select a Subject...</option>
                <option value="love">Love</option>
                <option value="programming">Programming</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="mental_health">Mental Health</option>
                <option value="self_help">Self Help</option>
            </select>
            </div>
            </div>
            </ul>
    )
}