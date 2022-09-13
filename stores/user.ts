import { useStorage } from '@vueuse/core'

export function useUser() {
    
  const user = useStorage('user', {
    displayName: undefined,
    photoURL: undefined,
    email: undefined,
    uid: undefined,
  })

  const setUser = ({ displayName, photoURL, email, uid }) => {
    user.value.displayName = displayName
    user.value.photoURL = photoURL
    user.value.email = email
    user.value.uid = uid
  }
 
  return { user, setUser }
}
