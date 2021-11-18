import { useFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import store from "../store";
import { UpdateUser } from "../Actions";

export function EditUser(props) {
  // const [data,setData] = useState(props.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newname = document.getElementById("name1").value;
    const newemail = document.getElementById("email1").value;
    const newPhoneNumber = document.getElementById("phoneNumber1").value;
    const obj = { name: newname, email: newemail, phoneNumber: newPhoneNumber };
    console.log(props.data.id);
    store.dispatch(UpdateUser(props.data.id, obj));
  };
  return (
    <>
      <h1>Edit User Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name1">Name</label>
        <input
          type="text"
          name="nname"
          id="name1"
          defaultValue={props.data.data.name}
        />

        <label htmlFor="email1">Email</label>
        <input id="email1" defaultValue={props.data.data.email} />

        <div>
          <label htmlFor="Number1">Phone Number</label>
          <input id="phoneNumber1" defaultValue={props.data.data.phoneNumber} />
        </div>
        <hr />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    UpdateUser: () => dispatch(UpdateUser())
  };
};

export default connect(mapDispatchToProps)(EditUser);
