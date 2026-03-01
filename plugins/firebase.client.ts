import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBfFmhWzXnZZUcZOyJCMFgkpEQfCfXTnP4',
    appId: '1:436221784838:web:a1130da1fda26cfe61a487',
    messagingSenderId: '436221784838',
    projectId: 'clemichelabs',
    authDomain: 'clemichelabs.firebaseapp.com',
    storageBucket: 'clemichelabs.firebasestorage.app',
    measurementId: 'G-BHGXKJ4NL4',
  }

  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)

  return {
    provide: {
      firestore,
    },
  }
})
