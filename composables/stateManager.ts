export default () => {
  const hpToggler = useState("toggler", () => true);
  const loginwith = useState("state", () => true);
  const useMagicEmail = useState("useMagicEmail", () => "default@email.com");
  
  const user = useState("user", () => null);
  const userData = useState("userdata", () => null);

  const toggleHp = () => {
    if (hpToggler.value == false) {
      hpToggler.value = true;
    } else {
      hpToggler.value = false;
    }
  };

  const setMagicEmail = (newEmail) => {
    useMagicEmail.value = newEmail;
  };

  return {
    hpToggler,
    toggleHp,
    useMagicEmail,
    setMagicEmail,
    loginwith,
    user,
    userData
  };
};
