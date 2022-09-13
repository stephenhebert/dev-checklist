<template>
  <div>
    You have not yet authenticated.  Please log in to continue.
    <button @click="loginWithGithub()">Login with Github</button>
  </div>

</template>

<script setup>
import { useUser } from '~/stores/user'
const { user } = useUser()
if (user.value?.uid) await navigateTo('/')
</script>

<script>
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
export default {
  methods: {
    async loginWithGithub() {
      const provider = new GithubAuthProvider();
      const auth = getAuth();
      try { 
        const result = await signInWithPopup(auth, provider)
        const user = result.user;
        this.user.setUser(user)
        this.$router.push('/')
      }
      catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    }
  }
}
</script>