import Layout from "../components/Layout";
import Link from "next/link";

const Signin = () => {
  return (
    <Layout>
      Signin page
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};
export default Signin;
