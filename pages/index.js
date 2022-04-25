import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      Index page
      <Link href="/signin">
        <a>Signin</a>
      </Link>
    </Layout>
  );
};
export default Index;
