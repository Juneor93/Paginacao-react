import React from "react";
import "../Css/footer.css";

export default () => {
    return (
        <footer>
            <h1>Paginação React - SENAI Suíço Brasileira</h1>
            <ul className="container">
                <li className="col-4"><span>Paulo Henrique</span> <a href="https://github.com/henrique1204"><span>Henrique1204</span></a></li>
                <li className="col-4"><span>Artur Alves</span> <a href="https://github.com/Juneor93"><span>Juneor93</span></a></li>
                <li className="col-4"><span>Nicollas Alves</span> <a href="https://github.com/SuperNicolau123"><span>SuperNicolau123</span></a></li>
                <li className="col-4"><span>Jason Volney</span> <a href="https://github.com/JasonVolney"><span>JasonVolney</span></a></li>
                <li className="col-4"><span>Julia Agatha</span> <a href="https://github.com/agatha-juh"><span>agatha-juh</span></a></li>
                <li className="col-4"><span>Geovanne Sousa</span> <a href="https://github.com/Neutro17"><span>Neutro17</span></a></li>
            </ul>
        </footer>
    )
}
