import { Appwrite } from "appwrite";


export default function () {
  
const appwrite = new Appwrite();
appwrite
    .setEndpoint('http://20.193.228.182/v1') // Your Appwrite Endpoint
    .setProject('6259163355147c1f4364')
    ;

    return appwrite
}