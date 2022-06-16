
declare namespace Role {
  // “运营后台式”的 用户角色
  enum USER_ROLE_ENUM {
    ADMIN = 'admin',
    PRODUCT_MANAGER = 'pm',
    OPERATION_MANAGER = 'om',
    INTERN = 'intern',
    GUEST = 'guest'
  }
  interface UserStateProps {
    userId: string
    name: string
    phone: string
    // 添加角色字段
    role: USER_ROLE_ENUM
  }
}