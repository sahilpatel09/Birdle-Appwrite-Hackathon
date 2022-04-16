import { Appwrite } from "appwrite";
import { useRouter } from 'vue-router'

const user = ref(null);
export default () => {

  const appwrite = new Appwrite();
  const router = useRouter();  

  appwrite
    .setEndpoint("https://medium.termshel.com/v1")
    .setProject("6259163355147c1f4364");

  
  const updateUser = (newUser) => (user.value = newUser);
  
  appwrite.account
  .get()
  .then((res) => {
    if(router.currentRoute.value.path === "/" && user){
    router.push('/me')
    } 
    user.value = res 

  })
  .catch(() => {
  
    if(router.currentRoute.value.path != "/"){
    router.push('/')
    }

  });
  

    function isLoggedin(){
      const isLoggedin = user.value ? true : false;
      console.log("isLoggedin", isLoggedin)
      return isLoggedin      
    }

  



  return {
    appwrite,
    user,
    isLoggedin,
  };
};
