import User from "./User";

export default function UsersList(props) {
  console.log(props);
  const deleteUserHandler = (id, data) => {
    props.getUserId(id, data);
  };
  return (
    <ul>
      {props.props.list.map((elem) => (
        <li>
          <User props={elem} clickHandlerDelete={deleteUserHandler} />
        </li>
      ))}
    </ul>
  );
}
