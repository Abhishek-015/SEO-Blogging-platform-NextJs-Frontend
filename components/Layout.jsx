import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <h4>Footer</h4>
    </>
  );
};

export default Layout;
