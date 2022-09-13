import { useUser } from '~/stores/user'

export default function ({ name }) {

  const { user } = useUser()
  // if (user.value.uid !== undefined) return navigateTo('/login')

}
