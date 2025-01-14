import "./register.css"

export default function Register() {
  return (
    <>
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">NetMafia</h3>
                    <span className="registerDesc">Connect with friends and world around you on NetMafia</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" type="text" className="registerInput" />
                        <input placeholder="Email" type="email" className="registerInput" />
                        <input placeholder="Password" type="password" className="registerInput" />
                        <input placeholder="Password Again" type="password" className="registerInput" />
                        <button className="registerButton">Create Account</button>
                        <span className="registerForgot">Log In</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
