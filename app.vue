<template>
  <div class="bg-gray">
    <NuxtPage />
  </div>
</template>

<script>
// import '@unocss/reset/tailwind.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBlKOFUyYepKkE_982rIjq4umOauj4avtY",
  authDomain: "dev-checklist-c2225.firebaseapp.com",
  projectId: "dev-checklist-c2225",
  storageBucket: "dev-checklist-c2225.appspot.com",
  messagingSenderId: "140024092391",
  appId: "1:140024092391:web:263055ab45f66d39ec7442"
};
export const firebaseApp = initializeApp(firebaseConfig);
</script>

<style>

body, html { 
  @apply bg-gray;

}
</style>