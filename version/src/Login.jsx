import React from "react";

function Login() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
