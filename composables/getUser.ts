export default () => {
  const user = useState('user', () => null)
  const userMagicEmail = useState('useremail', () => "default@gmail.com")
  const updateMagicEmail = (newEmail) => userMagicEmail.value = newEmail
  const updateUser = (newUser) => user.value = newUser
  const isLoggedin = () => {
    if(user.value){
      return true
    }else{
      return false
    }
  }

  return {
    user,
    updateUser,
    userMagicEmail,
    updateMagicEmail,
    isLoggedin
  }
}