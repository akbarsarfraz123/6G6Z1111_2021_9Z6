import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAgVfn_0JhGPH2AJ_RV0pQAIMZ_MNof42c",
    authDomain: "advancedweb-bismillah.firebaseapp.com",
    projectId: "advancedweb-bismillah",
    storageBucket: "advancedweb-bismillah.appspot.com",
    messagingSenderId: "844158624908",
    appId: "1:844158624908:web:12acb245c0f74f0df747a9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const userCollection = db.collection('userCollection')
const defaultMutations: object[] = [];
const defaultCollection = db.collection("mutationsCollection")
defaultCollection.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    const mutation = {
      "title": doc.id,
      "data": doc.data()
    };
    defaultMutations.push(mutation)
  })
  console.log(defaultMutations)
})


// export utils/refs
export {
  db,
  auth,
  usersCollection,
  userCollection,
  defaultMutations,
  defaultCollection
}
