import React from 'react';
import '../Responsive.css';

// class Footer extends React.Component {
//     constructor(props) {
//         super(props);
//     }

function Footer() {
    return (
        <div className="footer">
            <h5 className="footerTitle">Jantzen Egan 2020</h5>
            <a href="https://github.com/Jantzen-E"><span className="githubLink">Github</span></a>
            <a href="https://www.linkedin.com/in/j-egan-/"><span className="linkedInLink">Linkedin</span></a>
        </div>
    );   
}

export default Footer;