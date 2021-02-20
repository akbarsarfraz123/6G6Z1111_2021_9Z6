import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'


// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCwH9MZ5_PAhycYKkvNWtepnOtEzl-BRA8",
  authDomain: "advancedwebdevelopment-24804.firebaseapp.com",
  databaseURL: "https://advancedwebdevelopment-24804-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "advancedwebdevelopment-24804",
  storageBucket: "advancedwebdevelopment-24804.appspot.com",
  messagingSenderId: "567354288751",
  appId: "1:567354288751:web:b501ff44c206536821fb9a",
  measurementId: "G-X41QVBKCTJ"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
