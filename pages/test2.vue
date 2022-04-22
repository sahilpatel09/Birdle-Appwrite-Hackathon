<template>
  <div>
    Hello

    <input
      type="file"
      id="img"
      name="img"
      v-on:change="send($event)"
      accept="image/*"
    />
    <input type="submit" @click="send" />
  </div>
</template>
<script setup>
import { Appwrite } from "appwrite";
const appwrite = new Appwrite();
const img = ref("");

appwrite
  .setEndpoint("https://medium.termshel.com/v1") // Your Appwrite Endpoint
  .setProject("6259163355147c1f4364");

function getUser() {
  let promise = appwrite.account.get();
  promise.then(
    function (response) {
      console.log("GET USER", response.prefs);
      const prefs = {
        ...response.prefs,
        imgUrl: "htps:dskfjds.com",
      };

      let promise = appwrite.account.updatePrefs(prefs);

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    },
    function (error) {
      console.log(error);
    }
  );
}

getUser();

function send(event) {
  let data = new FormData();
  data.append("name", "my-picture");
  data.append("file", event.target.files[0]);

  let promise = appwrite.storage.createFile(
    "625f78027b24b0de372e",
    "unique()",
    event.target.files[0]
  );

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}
</script>
