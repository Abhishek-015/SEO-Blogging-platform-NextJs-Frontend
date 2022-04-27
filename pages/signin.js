import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent"

const Signin = () => {
  return (
    <Layout>
      <h3 className="text-center my-4">Signin page</h3>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
};
export default Signin;
