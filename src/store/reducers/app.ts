const data = {
  isLogin: false
}
type Actions = {
  type: string
  data: unknown
}

const appReducer = (initData = data, actions: Actions) => {
  const { type, data } = actions;
  switch(type) {
    case 'test':
      return {
        ...initData,
        ...data
      }
    case 'onlogin':
      return {
        ...initData,
        ...data
      }
    default:
      return initData
  }
};

export default appReducer