import "../styles/login.css";

import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };
  return (
    <div className="login-page">
      <div className="hero-login">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
              <img src={logo} alt="Logo" className="logo-login" />
            </div>

            <div className="col-12 col-md-8 col-lg-6">
              <div className="form-login bg-white p-4 p-md-5 rounded-4 shadow-lg">
                <h2 className="login-text text-center mb-3">Welcome!</h2>
                <div className="login-switch bg-secondary rounded-5 d-flex justify-content-center align-items-center mb-3">
                  <Link className="btn btn-login active box-shadow-lg">Login</Link>
                  <Link className="btn btn-register" to="/register">
                    Register
                  </Link>
                </div>
                <p className="login-txt-1 text-center mb-3">Welcome Back! Please Login to Your Account</p>

                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className=" login-text4 position-relative">
                    <label htmlFor="username" className="form-label">
                      User name
                    </label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your User name" />
                  </div>
                  <div className=" login-text4 position-relative">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                    <i className="las la-eye-slash position-absolute password-toggle-icon"></i>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label className="text-decoration-none" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="btn-submit btn-primary">
                    Login
                  </button>
                </form>

                <p className="text-center login-text3 mt-3 or-login-with">or Login with</p>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-secondary social-btn">
                    <FaGoogle size={25} className="text-light" />
                  </button>
                  <button className="btn btn-outline-secondary mx-1 social-btn text-light">
                    <FaFacebook size={25} className="text-light" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
