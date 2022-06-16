const initState = (): Role.UserStateProps => {
  return {
    userId: '',
    name: '',
    phone: '',
    // 默认给个游客角色
    role: Role.USER_ROLE_ENUM.GUEST
  }
}

const userReducer = (defaultData = initState, actions: Stores.Actions<Role.UserStateProps> ) => {
  const { type, data } = actions;
  switch(type) {
    case 'updateUserInfo':
      return {
        ...initState,
        ...data
      }
    case 'logout':
      return {
        userId: '',
        name: '',
        phone: '',
        role: ''
      }
    default: 
      return defaultData
  }
}

export default userReducer