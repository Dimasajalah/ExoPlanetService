import React from "react";
import GithubLogo from "../assets/shared/githubLogo.svg";
import LinkedinLogo from "../assets/shared/linkedinLogo.svg";
import SpaceLogo from "../assets/shared/log.svg";

const Footer = () => {
    return (
        <React.Fragment>
            <div>
                <div>
                    <div>
                        <div>
                            <p style={{ display: "flex", justifyContent: "center", color: "burlywood" }}>
                                For Space Enthusiasts
                            </p>
                        </div>
                        <p style={{ color: "grey", display: "flex", justifyContent: "center" }}>
                            Murat AVCI
                            <span style={{ color: "black" }}>&nbsp;|&nbsp;</span>
                            <span style={{ color: "gray" }}>React Frontend Developer</span>
                        </p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="https://github.com/muratavci05">
                                <img src={GithubLogo} style={{ backgroundColor: "white", borderRadius: "50%", width: "25px" }} alt="GitHub" />
                            </a>
                            &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/muratavci05/">
                                <img src={LinkedinLogo} style={{ backgroundColor: "white", borderRadius: "50%", width: "25px" }} alt="LinkedIn" />
                            </a>
                            &nbsp;&nbsp;
                            <a href="/nasa-photo">
                                <img src={SpaceLogo} style={{ borderRadius: "50%", width: "25px" }} alt="Space" />
                            </a>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </React.Fragment>
    );
}

export default Footer;