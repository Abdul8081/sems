export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    payload: userData,
  });
  
  export const setTeams = (teams) => ({
    type: 'SET_TEAMS',
    payload: teams,
  });
  