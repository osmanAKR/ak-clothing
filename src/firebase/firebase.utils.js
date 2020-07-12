import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBTLTlMiEF-g28PnQmkrHceNb61bj7WAlw",
    authDomain: "ak-clothing.firebaseapp.com",
    databaseURL: "https://ak-clothing.firebaseio.com",
    projectId: "ak-clothing",
    storageBucket: "ak-clothing.appspot.com",
    messagingSenderId: "255023544275",
    appId: "1:255023544275:web:7e912fdca271424100a126",
    measurementId: "G-2R6BCBD176"
  }

firebase.initializeApp(config)

export const auth =firebase.auth()
export const firestore =firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase