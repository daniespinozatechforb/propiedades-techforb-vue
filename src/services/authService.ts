// src/services/authService.ts
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  type User,
} from 'firebase/auth'

const auth = getAuth()
const provider = new GoogleAuthProvider()

export const loginWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, provider)
  return result.user
}

export const logout = async (): Promise<void> => {
  await signOut(auth)
}

export const onAuthChanged = (callback: (user: User | null) => void): void => {
  onAuthStateChanged(auth, callback)
}
