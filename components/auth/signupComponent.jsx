import { useState } from "react";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "Abhishek",
    email: "abhi@gmail.com",
    password: "123456",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: false, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
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
          <button className="btn btn-primary btn-sm">Sign up</button>
        </div>
      </form>
    );
  };

  return <>{signupForm()}</>;
};

export default SignupComponent;
