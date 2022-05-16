const data = {}

const appReducer = (initData = data, actions) => {
  const { type, data } = actions;
  switch(type) {
    case 'test':
      return {
        ...initData,
        ...data
      }
      break;
    default:
      return initData
  }
};

export default appReducer