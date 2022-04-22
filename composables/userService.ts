import { Appwrite, Models,  Query } from "appwrite";
const appwrite = new Appwrite();

appwrite
  .setEndpoint("https://medium.termshel.com/v1") // Your Appwrite Endpoint
  .setProject("6259163355147c1f4364");


  export type PostWithoutContent = {
    name: string,
    subtitle: string,
    user_id: number,
    status: string,
    pub_id: string,
    created_at: string,
    postUrl: string,
    imgUrl: string,
    readTime: string,
  } & Models.Document;


export const userService = () => {

  async function getAuthStatus(): Promise<boolean> {
    try {
      await appwrite.account.get();
      return true;
    } catch (err) {
      // If there is error, I believe it's 4XX error and it means user is not logged
      // TODO: I should expect 5XX errors here better

      return false;
    }
  }

  async function publishThePost(
    postName: string,
    content: string,
    subtitle: string,
    status: string,
    pub: string,
    url: string,
    img: string,
    readingTime: string
  ): Promise<boolean> {
    console.log(url, img)
    try {
      const { $id: userId, } = await appwrite.account.get();
      const currentUserData = await getUserNameFromUserID(userId.toString())
      
      await appwrite.database.createDocument(
        "625a2f5e86376aefffe6",
        "unique()",
        {
          user_id: userId,
          name: postName.toString(),
          subtitle: subtitle.toString(),
          content: content.toString(),
          status: status.toString(),
          pub_id: pub.toString(),
          postUrl: "@"+currentUserData.username+"/"+url,
          imgUrl: img,
          readTime: readingTime,
          created_at: Math.round(Date.now() / 1000).toString(),
        }
      );
      return true;
    } catch (err: any) {
      alert(err.message);
      return false;
    }
  }

  async function getuserIdFromUsername(userName: string): string {
    try {
      const userData = await appwrite.database.listDocuments(
        "625a2fc009e1c2051230",
        [Query.equal("username", userName)]
      );
      return userData.documents[0];
    } catch (err: any) {
      alert(err.message);
      return false;
    }
  }

  async function getUserWithPosts(userName: string) {
    try {

      const info = await getuserIdFromUsername(userName);
      const id = info.$id.toString();
      const posts = await appwrite.database.listDocuments(
        "625a2f5e86376aefffe6",
        [Query.equal("user_id", id)]
      );

      return { posts, info };
    } catch (err: any) {
      alert(err.message);
      return false;
    }
  }



  async function getAuthorPost(userName: string, blogurl: string) {
    try {
      console.log("PRINTING USERNAME BLOGURL",userName, blogurl)
      
      const info = await getuserIdFromUsername(userName);
      const id = info.$id.toString();
      console.log(id)

      const post = await appwrite.database.listDocuments(
        "625a2f5e86376aefffe6",
        [
        Query.equal("postUrl", "@"+userName+"/"+blogurl),
        
        ]
      );

      console.log("POS AFTER",post)
      if(post.documents[0].user_id === id){
        console.log("SAME ID")
        return { post, info };
      }else{
        console.log("NOT SAMW")
        alert("POST NOT FOUNT")
      }

      
    } catch (err: any) {
      alert(err.message);
      return false;
    }
  }

  async function getUserNameFromUserID(id: string): string {
    try {
      const userData = await appwrite.database.listDocuments(
        "625a2fc009e1c2051230",
        [Query.equal("$id", id)]
      );
      return userData.documents[0];
    } catch (err: any) {
      alert(err.message);
      return false;
    }
  }

  async function currentUserData(){
    try{
    
    const user = await appwrite.account.get();
    const currentUserData = await getUserNameFromUserID(user.$id.toString())
    return currentUserData;

    } catch (err: any) {
      alert(err.message);
      return false;
    }

  }






  return { appwrite, getAuthStatus, publishThePost, getUserWithPosts, getAuthorPost, currentUserData };
};
