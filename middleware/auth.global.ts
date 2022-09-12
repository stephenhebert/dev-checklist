import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export default async function ({name}) {

  const provider = new GithubAuthProvider();

  // load state from local storage?
  const auth = getAuth();

  // it takes 300ms to return current user
  // is it worth a blocking wait?
  setTimeout(() => {
    if (name !== 'login' && !auth.currentUser) return navigateTo('/login')
    // save current user in local state 
  }, 300)




  
}