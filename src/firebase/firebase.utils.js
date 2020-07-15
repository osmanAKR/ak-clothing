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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email }= userAuth
    const createdAt= new Date()

    try{
      await userRef.set({ 
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch (err) {
      console.log('error creating user', err.message)
    }
  }
  return userRef
}

export const auth =firebase.auth()
export const firestore =firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase