const useService = userService();
const { user, userData } = stateManager();
export default defineNuxtRouteMiddleware(async function (to, from) {
  if (userData.value) {
    const { userInfo, currentUserData } =
      await useService.setUpUserForPageReload();
    user.value = userInfo;
    userData.value = currentUserData;
    console.log("FILLED UP USER")
  }

});
