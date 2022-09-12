import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({
    displayName: undefined,
    photoURL: undefined,
    email: undefined
  }),

  // configure caching in local storage

  actions: {
    setUser({ displayName, photoURL, email }) {
      this.displayName = displayName
      this.photoURL = photoURL
      this.email = email
    }
  },
})