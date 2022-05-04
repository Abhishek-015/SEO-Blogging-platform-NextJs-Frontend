import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { isAuth, getCookie } from "../../actions/auth";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../actions/category";

const Category = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false, // to control the behavioue of useEffect
  });

  const { name, error, success, categories, removed, reload } = values;
  const token = getCookie("token");

  useEffect(() => {
    loadCategories();
  }, [reload]);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  const showCategories = () => {
    return categories.map((category) => (
      <button
        onClick={() => deleteConfirm(category.slug)}
        title="Double click to delete"
        key={category._id}
        className="btn btn-outline-success btn-sm mx-1 mt-3"
      >
        {category.name}
      </button>
    ));
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      "Are you sure ,you want to delete this category?"
    );
    if (answer) {
      deleteCategory(slug);
    }
  };

  const deleteCategory = (slug) => {
    //   console.log("deleted",slug)
    removeCategory(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: "",
          removed: !removed,
          reload: !reload,
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({ name }, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
          success: true,
          name: "",
          reload: !reload,
        });
      }
    });
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: "",
      reload: false,
    });
  };

  const showSuccess = () => {
    if (success) {
      return (
        <div className=" alert alert-success">
          Category Created successFully
        </div>
      );
    }
  };
  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">Category already exist</div>;
    }
  };
  const showRemoved = () => {
    if (removed) {
      return <div className="alert alert-danger">Category is removed</div>;
    }
  };

  //to clear out the notification display above the div
  const mouseMoveHandler = (e) => {
    setValues({ ...values, error: false, success: false, removed: "" });
  };

  const newCategoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted my-1">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
        />
        <button type="submit" className="btn btn-primary btn-sm my-2">
          Create
        </button>
      </div>
    </form>
  );

  return (
    <>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      <div onMouseMove={mouseMoveHandler}>
        {newCategoryForm()}
        {showCategories()}
      </div>
    </>
  );
};

export default Category;
