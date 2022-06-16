const defaultData = {
  isLogin: false
}
type Actions = {
  type: string
  data: unknown
}

const appReducer = (initData = defaultData, actions: Actions) => {
  const { type, data }: { type: string, data: any } = actions;
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
      if (!initData.isLogin) {
        const loginState = JSON.parse(localStorage.getItem('login') as string) as {isLogin: boolean};

        return {
          ...data,
          isLogin: loginState?.isLogin || false
        }
      }
      return initData
  }
};

export default appReducer