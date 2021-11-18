import { useState } from "react";
import EditUser from "./EditUser";

export default function User(props) {
  console.log("Inside User");
  console.log(props);
  const [showEdit, setShowEdit] = useState(false);

  function clickHandler(e) {
    setShowEdit(!showEdit);
  }

  return (
    <div>
      <div>
        <strong>{props.props.data.name}</strong>
        <div>
          <i>{props.props.data.email}</i>
        </div>
        <span>
          <button
            onClick={() =>
              props.clickHandlerDelete(props.props.id, props.props.data)
            }
          >
            Delete
          </button>

          <button onClick={clickHandler}>Edit</button>
          {showEdit && <EditUser data={props.props} />}
        </span>
        <hr />
      </div>
    </div>
  );
}
