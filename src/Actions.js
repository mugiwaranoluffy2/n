export function AddUser(data) {
  return {
    type: "ADD_USER",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
}

export function RemoveUser(id, data) {
  console.log(data.name);
  return {
    type: "REMOVE_USER",
    payload: {
      id: id,
      data: data
    }
  };
}
export function UpdateUser(id, data) {
  return {
    type: "UPDATE_USER",
    payload: {
      id: id,
      data: data
    }
  };
}
