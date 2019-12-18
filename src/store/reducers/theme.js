const initialState = {
  colorTheme: 'purple',
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        colorTheme: action.payload,
      };
    default:
      return state;
  }
};

export default theme;
