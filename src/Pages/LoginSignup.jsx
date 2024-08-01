import React, { useState } from "react";
import "./CSS/loginsignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [agree, setAgree] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkboxChangeHandler = (e) => {
    setAgree(e.target.checked);
  };

  const login = async () => {
    console.log("Login", formData);
    let responseData;
    await fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Register", formData);
    let responseData;
    await fetch(`http://localhost:4000/signup`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Login") {
      login();
    } else {
      signup();
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          {state === "Signup" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <button type="submit">Continue</button>
        </form>
        {state === "Signup" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              style={{ cursor: "pointer" }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an Account?{" "}
            <span
              onClick={() => setState("Signup")}
              style={{ cursor: "pointer" }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={checkboxChangeHandler}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
