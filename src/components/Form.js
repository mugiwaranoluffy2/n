import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { AddUser, RemoveUser } from "../Actions";
import store from "../store";
import UsersList from "./UsersList";

export function Form(props) {
  console.log("Inside Form");
  console.log(props);
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: Number
  };

  const onSubmit = (values) => {
    console.log(values);
    store.dispatch(AddUser(values));
  };
  const removeUserHandler = (id, data) => {
    store.dispatch(RemoveUser(id, data));
  };
  const validate = (values) => {
    const errors = {};

    if (!values.fname) {
      errors.fname = "Required";
    }
    if (!values.lname) {
      errors.lname = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  };

  const validationSchema = yup.object({
    name: yup.string("Enter string").required("name Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    phoneNumber: yup.number().required("Required")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="number">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />

        <button type="submit">Submit</button>
      </form>
      <div>
        <UsersList props={props} getUserId={removeUserHandler} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.list
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddUser: () => dispatch(AddUser()),
    RemoveUser: () => dispatch(RemoveUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
