import { Input } from "@mui/material";
import "./LoginPage.css";

function LoginPage() {
    return (
        <div className="login">
            <div className="login-form bg-white rounded-3xl shadow-xl">
                <h1 className="text-center m-4">Welcome User!</h1>
                <div className="form">
                    <div className="sign-in-form flex flex-col justify-around content-center">
                        <h1>Sign In</h1>
                        <Input className="sign-in-input m-10" placeholder="Enter Employee ID or Email ID" />
                    </div>
                    <div className="sign-up-form">Sign Up</div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
