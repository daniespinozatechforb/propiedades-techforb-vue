import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBsCGtg2wYt4ytQdP-iKLfYYJb_XwE3Km4',
  authDomain: 'proyecto-1-b64d4.firebaseapp.com',
  projectId: 'proyecto-1-b64d4',
  storageBucket: 'proyecto-1-b64d4.firebasestorage.app',
  messagingSenderId: '271065902760',
  appId: '1:271065902760:web:9f962980ac237be3f19c9d',
  measurementId: 'G-JY3YPWG69M',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }
