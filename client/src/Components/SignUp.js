import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

export default function SignUp() {
  const [Disable, setDisable] = useState(false);
  const [value, setValue] = React.useState(null);
  const [User, setUser] = useState({ username: "", email: "", password: "" });

  const onchange = (e) => {
    setDisable(false);
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onClick = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", User);
    setDisable(true);
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <br></br>
                <br></br>
                <div className="form-outline mb-4">
                  <TextField
                    name="username"
                    fullWidth
                    label="Username"
                    id="Username"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>
                <div className="form-outline mb-4">
                  <TextField
                    name="email"
                    fullWidth
                    label="Email"
                    id="Email"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>

                <div className="form-outline mb-3">
                  <TextField
                    name="password"
                    fullWidth
                    label="Password"
                    id="Password"
                    type="password"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary Buttonn"
                    onClick={onClick}
                    disabled={Disable}
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      width: "100%",
                    }}
                  >
                    SignUp
                  </button>
                  <Link to="/Table" className="link-danger">
                    <button
                      type="button"
                      className="btn btn-primary Buttonn my-3"
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                        width: "100%",
                      }}
                    >
                      See All Users
                    </button>
                  </Link>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link to="/" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
