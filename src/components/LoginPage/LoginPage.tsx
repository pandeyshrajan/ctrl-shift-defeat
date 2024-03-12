import { Input } from "@mui/joy";
import "./LoginPage.css";
// import loginPageImage from "../../assets/21404.jpg";
import { Button } from "@mui/material";
import { Icon } from "@iconify/react";
import linkedInIcon from "../../assets/logos--linkedin-icon.svg";
import X from "../../assets/line-md--twitter-x.svg";

function LoginPage() {
    return (
        <div className="login-signup-page">
            <div className="login-container">
                <div className="left-component">
                    <div className="login-form glass rounded-3xl shadow-2xl">
                        <h1 className="text-center content-center m-10 mb-0 text-white">Welcome User! </h1>
                        <Icon className="mt-10 m-0" icon="streamline:user-protection-2-solid" width="4em" height="4em" style={{ color: "white" }} />
                        <div className="form">
                            <div className="sign-in-form flex flex-col">
                                <Input className="sign-in-input" placeholder="Employee ID or Email ID" endDecorator={<Icon icon="teenyicons:id-solid" width="1.2em" height="1.2em" style={{ color: "black" }} />} />
                                <Input className="sign-in-input" placeholder="Password" type="password" endDecorator={<Icon icon="teenyicons:password-solid" width="1.2em" height="1.2em" style={{ color: "black" }} />} />
                                <Button variant="outlined" style={{ width: "50%", backgroundColor: "rgba(58,42,29, 0.7)", color: "white", border: "1px solid white" }}>
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-component">
                    <div className="people-portal-heading text-white">People Portal</div>
                    <div className="text-white about-people-portal">Lorem ipsum dolor sit,Exercitationem rem deserunt officiis iusto iste natus ipsum laboriosam architecto </div>
                    <div className="icons flex flex-row justify-betweem">
                        {/* <Icon icon="line-md:instagram" width="1.2em" height="1.2em" style={{ color: "white" }} /> */}
                        <Icon className="animate-button-hover m-4" icon="line-md:instagram" width=".5em" height=".5em" style={{ color: "white" }} />
                        <Icon className="animate-button-hover m-4" icon="line-md:linkedin" width=".5em" height=".5em" style={{ color: "white" }} />
                        <Icon className="animate-button-hover m-4" icon="line-md:twitter-x" width=".5em" height=".5em" style={{ color: "white" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
