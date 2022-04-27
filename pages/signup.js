import Layout from "../components/Layout";
import SignupComponent from "../components/auth/signupComponent";

const Signup = () => {
  return (
    <Layout>
      <h3 className="text-center">Signup page</h3>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
        </div>
      </div>
    </Layout>
  );
};
export default Signup;
