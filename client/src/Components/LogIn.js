import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
// import { MuiFileInput } from "mui-file-input";

export default function LogIn() {
  const [value, setValue] = React.useState(null);
  const [User, setUser] = useState({email: "", password: "" });

  const onchange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const onClick = async(e) => {
    e.preventDefault();
    const data = await axios.get("/logIn/"+ User.email+"/"+User.password);
    if(data.data.success)
    {
      alert("Log in successful")
    }
    else
    {
      alert("Log in unsuccessful")
    }
  };
  return (
    <div>
      <section className="vh-100">
        {/* <div className="text-center my-4">
        <h1 style={{ fontWeight: "bold", color: "blue" }}>Log IN</h1>
      </div> */}

        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <br></br>
                <br></br>

                <div className="form-outline mb-2">
                  <TextField
                    name="email"
                    fullWidth
                    label="Email"
                    id="Email"
                    sx={{ borderRadius: "20px" }}
                    onChange={onchange}
                  />
                </div>
                <div className="my-2">
                  <TextField
                    name="password"
                    sx={{
                      borderRadius: "500px",
                    }}
                    fullWidth
                    label="Password"
                    id="Password"
                    type="password"
                    onChange={onchange}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg Buttonn"
                    style={{
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      width: "100%",
                    }}
                    onClick={onClick}
                  >
                    Login
                  </button>
                  <Link to="/Table" className="link-danger">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg Buttonn my-3"
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
                    Don't have an account?{" "}
                    <Link to="/SignUp" className="link-danger">
                      Register
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
