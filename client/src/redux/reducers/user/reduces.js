const intialState = {
  user: null,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_USER_AUTH':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
