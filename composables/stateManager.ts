export default () => {
  const hpToggler = useState("toggler", () => true);
  const toggleHp = () => {
    if (hpToggler.value == false) {
      hpToggler.value = true;
    } else {
      hpToggler.value = false;
    }
  };

  return {
    hpToggler,
    toggleHp,
  };
};
