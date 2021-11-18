const initialData = {
  list: []
};

const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_USER":
      const id = action.payload.id;
      const data = action.payload.data;
      const sameEmail = state.list.filter(
        (elem) => elem.data.email === action.payload.data.email
      );
      if (sameEmail.length > 0) {
        console.error("This Email already has an account with us");
        return { list: [...state.list] };
      }
      return {
        list: [...state.list, { id: id, data: data }]
      };

    case "REMOVE_USER":
      console.log("Inside Reducer: " + action.payload.id);
      return {
        state,
        list: state.list.filter((elem) => elem.id !== action.payload.id)
      };

    case "UPDATE_USER":
      const index = state.list.findIndex(
        (elem) => elem.id === action.payload.id
      );
      const newObj = { id: action.payload.id, data: action.payload.data };
      const newList = [...state.list];
      newList[index] = newObj;
      return {
        state,
        list: newList
      };
    default:
      return state;
  }
};
export default Reducer;
