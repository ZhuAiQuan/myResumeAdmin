declare namespace Common {
  type IFormData = {
    password: string
    username: string
    remember: boolean
    code: string
  }
  interface Props {
    updateLoginState: (data: IFormData) => void
    username: string
    password: string
  }
}