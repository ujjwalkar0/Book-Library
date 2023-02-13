import logo from "../images/fylelogo.png";

export default function Navbar({ name }) {
    return (
        <ul className="navbar">
            <div className="container">
                <a href="/">
                    <img src={logo} width="90px" />
                </a>
                <div className="right">
                    <select id="category" onChange={(e) => window.location.href = e.target.value} value={name}>
                        <option value="" hidden>Select a Subject...</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="public_health">Public Health</option>
                        <option value="mental_health">Mental Health</option>
                        <option value="medical_care">Medical Care</option>
                    </select>
                </div>
            </div>
        </ul>
    )
}