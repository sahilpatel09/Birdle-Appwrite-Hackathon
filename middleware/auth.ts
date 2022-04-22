const useService = userService();
export default defineNuxtRouteMiddleware(async function (to, from) {
  const loggedIn = await useService.getAuthStatus();
  console.log(to.fullPath);
  if (loggedIn && to.fullPath.toString() === "/") {
    return navigateTo("/me");
  } else if (!loggedIn && to.fullPath.toString() === "/") {
    console.log("HOMEPAGE NOT LOGGED");
  } else if (loggedIn) {
    console.log("MIDDLE LOGGED");
  } else {
    return navigateTo("/");
  }
});
