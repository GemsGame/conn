const projects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT_SUCCESS':
      return state;
    case 'ADD_PROJECT_ERROR':
      return state;
    case 'GET_PROJECTS_SUCCESS':
      return action.payload;
    case 'GET_PROJECTS_ERROR':
        return action.payload;
    default:
      return state;
  }
};

export default projects;
