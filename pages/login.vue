<template>
  <div>
    You have not yet authenticated.  Please log in to continue.
    <button @click="loginWithGithub()">Login with Github</button>
  </div>

</template>

<script>
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useUser } from '~/stores/user'
export default {
  setup() {
    const user = useUser();
    return { user }
  },
  methods: {
    async loginWithGithub() {
      const provider = new GithubAuthProvider();
      const auth = getAuth();
      try { 
        const result = await signInWithPopup(auth, provider)
        // The signed-in user info.
        const user = result.user;
        console.log('user', user)
        // update local storage?
        this.user.setUser(user)
        this.$router.push('/')
      }
      catch(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;

        }
    }
  }
}
</script>