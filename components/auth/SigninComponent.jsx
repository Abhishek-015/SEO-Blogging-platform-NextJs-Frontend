import { useState, useEffect } from "react";
import { authenticate, isAuth, signin } from "../../actions/auth";
import Router from "next/router";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => isAuth() && Router.push(`/`), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: false, [name]: value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    const user = { email, password };
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        //save user token to cookie
        //save user info to local storage
        //authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push("/admin");
          } else {
            Router.push("/user");
          }
        });
      }
    });
  };

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2"></div>
        <div className="form-group my-2">
          <label>Email</label>
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            className="form-control"
            placeholder="Type your email"
          />
        </div>
        <div className="form-group my-2">
          <label>Password</label>
          <input
            onChange={handleChange}
            name="password"
            value={password}
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>
        <div>
          <button
            disabled={!email || !password}
            className="btn btn-primary btn-sm"
          >
            Sign in
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
    </>
  );
};

export default SigninComponent;
