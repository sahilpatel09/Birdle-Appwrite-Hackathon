export default () => {
  const userMagicEmail = useState("useremail", () => "default@gmail.com");
  const updateMagicEmail = (newEmail) => (userMagicEmail.value = newEmail);
  


  return {
    userMagicEmail,
    updateMagicEmail,
  };
};
