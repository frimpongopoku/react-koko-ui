export const ACTIONS = {
  UPDATE: "UPDATE",
};

export const formStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
