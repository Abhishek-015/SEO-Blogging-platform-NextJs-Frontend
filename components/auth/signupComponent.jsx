import { useState, useEffect } from "react";
import Router from "next/router";
import { isAuth, signup } from "../../actions/auth";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  useEffect(() => isAuth() && Router.push(`/`), []);

  const { name, email, password, error, loading, message, showForm } = values;

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
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, error: false, loading: true });
    const user = { name, email, password };
    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          loading: false,
          error: "",
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label>Name</label>
          <input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            className="form-control"
            placeholder="Type your name"
            autoFocus
          />
        </div>
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
            disabled={!name || !email || !password}
            className="btn btn-primary btn-sm"
          >
            Sign up
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
      {showForm && signupForm()}
    </>
  );
};

export default SignupComponent;
