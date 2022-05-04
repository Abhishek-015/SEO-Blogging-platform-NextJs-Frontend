import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link";
import Category from "../../../components/crud/Category";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 py-3 ">
              <h3>Manage Categories and Tags</h3>
            </div>
            <div className="col-md-6">
              <Category />
            </div>
            <div className="col-md-6">
              <p>tags</p>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};
export default CategoryTag;
