<template>
  <div class="block" v-if="loggedin">
    <div class="max-w[1504px] m-auto block">
      

      <!-- 3 container -->
      <div class="flex flex-row justify-between">
        
        <UsersMenuToolbar v-if="userData"/>

        <!-- Main Section -->

        <div
          class="flex-auto mb-0 min-w-0 block bg-white pt-2 lg:pl-10 justify-center items-center lg:ml-20 lg:max-w-[950px] w-full"
        >
          <div class="block mx-auto">
            <NuxtChild />
          </div>
        </div>

        <UsersUserDashboardSideSection />

      </div>
    </div>

    <UserBottomLeftMenu :class="{ hidden: globalMenuState }" class="z-50" v-if="userData" />
  </div>
  <div v-else>
    <Loading />
    <h2 class="flex">{{ errorval }}</h2>
  </div>
</template>

<style scoped>
.bo {
  height: 25px;
}
.hu {
  fill: rgb(0, 0, 0);
}
.greendot {
  background-color: rgb(15, 115, 12);
  flex: 0 0 auto;
  border-radius: 50%;
  width: 8px;
  margin-bottom: 1px;
  margin-right: 8px;
  display: inline-block;
}
</style>
<script setup>
const route = useRoute();
const router = useRouter();
const errorval = ref("");
const loggedin = ref(false);

const { user, userData, globalMenuState } = stateManager();
const service = userService();

async function setData() {
  const data = await service.currentUserData();
  userData.value = data;
}
setData();

import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
  .setEndpoint("https://medium.termshel.com/v1") // Your Appwrite Endpoint
  .setProject("6259163355147c1f4364");

// setTimeout(()=>{
//   console.log(user)
// }, 500);

function setPrefs() {
  const userPrefs = { userSet: true };

  let promise = sdk.account.updatePrefs(userPrefs);

  promise.then(
    function (response) {
      console.log("SET PREFS", response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}

function getUserPref(callback) {
  let promise = sdk.account.getPrefs();
  let data = null;
  promise.then(
    function (response) {
      console.log("GET PREFS"); // Success

      if (response.userSet) {
        console.log("PREFS NOT NULL");
      } else {
        callback();
      }
      return response;
    },
    function (error) {
      console.log(error, "CALLING updatePrefs"); // Failure
    }
  );
}

function updatePrefs() {
  const namedata = user.value.name.toString().split(" ");
  const name = namedata[0] + "+" + namedata[1];
  console.log("LOCAL NAME", user.value.name.toString());

  if (name) {
    //ok
  } else {
    user.value.name = user.value.email.split("@")[0].toString();
  }

  const payload = {
    username: user.value.email.split("@")[0].toString(),
    name: user.value.name.toString(),
    img: "",
    bio: "",
    member: true,
  };

  console.log(payload);

  let updateUserData = sdk.database.createDocument(
    "625a2fc009e1c2051230",
    user.value.$id.toString(),
    payload
  );

  updateUserData.then(
    function (response) {
      //console.log(response); // Success
      //console.log("Payload uploaded.")
      userData.value = response;
      //console.log("userData", userData.value)
      setPrefs();
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}

function getUser(name) {
  let promise = sdk.account.get();
  promise.then(
    function (response) {
      // console.log(response)
      user.value = response;
      loggedin.value = true;
      if (name) {
        user.value.name = name;
      } else {
        user.value.name = user.value.email.split("@")[0].toString();
      }

      getUserPref(updatePrefs);

      // setTimeout(()=>{
      //   updatePrefs();
      // }, 300);
    },
    function (error) {
      console.log("ACCOUNT NOT FOUND");
      router.push("/");
    }
  );
}

//authenticating the current user's token
function authenticateUser(id, secret) {
  console.log(id, secret);

  let promise = sdk.account.updateMagicURLSession(
    id.toString(),
    secret.toString()
  );

  promise.then(
    function (response) {
      //console.log(response); // Success
      // if success we update the current user by getting and setting the current user
      getUser((name = null));
    },

    function (error) {
      //else show an erroe
      console.log(error); // Failure
      errorval.value = error + "Please Try to login again.";
    }
  );
}

//getting the routes userid and secret
const uid = route.query.userId;
const ss = route.query.secret;

//if there are parameters available
//we authenticate them and validate the user token

//if no then simply get the current user

if (uid && ss) {
  authenticateUser(uid, ss);
} else {
  console.log("No parameters");

  let promise = sdk.account.get();

  promise.then(
    function (response) {
      console.log("GOOGLE USER DATA", response); // Success
      getUser(response.name.toString());
    },
    function (error) {
      console.log("COULD NOT FOUND the GOOGLE AUTH");
      getUser((name = null));
    }
  );
}
</script>
