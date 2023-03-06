import firebase from 'firebase/compat/app'
import { createContext } from 'react'
import 'firebase/compat/auth'
import 'firebase/compat/database'

export const firebaseConfig = {
  apiKey: 'AIzaSyC2ouhfj3seBilJrtZAlsf1VMnqkKicfWQ',
  authDomain: 'story-book-5cc65.firebaseapp.com',
  databaseURL: 'https://story-book-5cc65-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'story-book-5cc65',
  storageBucket: 'story-book-5cc65.appspot.com',
  messagingSenderId: '718410990630',
  appId: '1:718410990630:web:7e9b30471aea483ccfd2e7',
  measurementId: 'G-X1LGFCP3PQ',
}

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.database()

firebase.initializeApp(firebaseConfig)
export default firebase

// Contexte pour gérer l'authentification des utilisateurs
export const FirebaseContext = createContext({ auth, db, app })

export function FirebaseProvider({ children }) {
  return <FirebaseContext.Provider value={{ auth, db, app }}>{children}</FirebaseContext.Provider>
}
