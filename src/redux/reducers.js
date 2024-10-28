const initialState = {
    user: null,
    teams: [],
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { ...state, user: action.payload };
      case 'SET_TEAMS':
        return { ...state, teams: action.payload };
      default:
        return state;
    }
  };
  