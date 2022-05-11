export const INITIAL_STATE = {
  user: null,
  isLoading: false,
  isError: false,
  message: "",
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        isError: true,
        message: action.message,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
