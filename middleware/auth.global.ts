import { getAuth, signInWithRedirect, GithubAuthProvider } from "firebase/auth";

export default function (context) {

  console.log('context', context)
  

  const provider = new GithubAuthProvider();


  const auth = getAuth();
  signInWithRedirect(auth, provider);

  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //     const credential = GithubAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;

  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log('user', user)
  //     // ...
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GithubAuthProvider.credentialFromError(error);
  //     // ...
  //   });


  
}