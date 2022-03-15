import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYdjSwAt5FjlwPYDnZqZaNtfpD9tKUdi0',
  authDomain: 'house-marketplace-app-57aab.firebaseapp.com',
  projectId: 'house-marketplace-app-57aab',
  storageBucket: 'house-marketplace-app-57aab.appspot.com',
  messagingSenderId: '188365378843',
  appId: '1:188365378843:web:bbfc9b5a30012178ccafbe',
}
// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
